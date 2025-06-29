public with sharing class RelatedObjectsController {

    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getRelatedObjectsAndRecords() {
        return processAndPopulateData(
            wrapHomePageConfigs(fetchHomePageObjectConfigs(10)),
            UserInfo.getUserId()
        );
    }

    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getAllRelatedRecords(Id recordId) {
        if (recordId == null) throw new AuraHandledException('Record Id is required.');
        String objectName = getSObjectNameFromId(recordId);
        return processAndPopulateData(
            wrapRelatedObjectConfigs(fetchRelatedObjectConfigs(objectName)),
            recordId
        );
    }

    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getParentRecords(Id childRecordId) {
        if (childRecordId == null) throw new AuraHandledException('Child Record Id is required.');
        String childObjectName = getSObjectNameFromId(childRecordId);
        List<ParentConfigWrapper> wrappers = new List<ParentConfigWrapper>();

        for (RelatedParentObject__mdt config : fetchRelatedParentObjectConfigs(childObjectName)) {
            if (!isValid(config)) continue;
            Id parentId = getParentId(childObjectName, config.Lookup__c, childRecordId);
            if (parentId == null) continue;
            wrappers.add(new ParentConfigWrapper(config, parentId));
        }

        return processAndPopulateData(wrappers);
    }

    //============================== Private Helpers ==============================
    private interface ConfigWrapper {
        String getObjectName();
        List<String> getFields();
        String getWhereClause();
        String getLabel();
    }

    private class HomePageConfigWrapper implements ConfigWrapper {
        Home_Page_Objects_Configuratiom__mdt config;
        Id currentUserId;
        HomePageConfigWrapper(Home_Page_Objects_Configuratiom__mdt c, Id uid) { config = c; currentUserId = uid; }
        public String getObjectName() { return config.Object__c; }
        public List<String> getFields() { return parseFields(config.Fields__c); }
        public String getWhereClause() {
            return String.isNotBlank(config.Subscriber__c)
                ? config.Subscriber__c + ' = \'' + currentUserId + '\''
                : 'OwnerId = \'' + currentUserId + '\'';
        }
        public String getLabel() { return config.MasterLabel; }
    }

    private class RelatedObjectConfigWrapper implements ConfigWrapper {
        RelatedObject__mdt config;
        Id recordId;
        RelatedObjectConfigWrapper(RelatedObject__mdt c, Id rid) { config = c; recordId = rid; }
        public String getObjectName() { return config.RelatedObject__c; }
        public List<String> getFields() { return parseFields(config.Fields__c, true); }
        public String getWhereClause() { return config.Lookup__c + ' = \'' + recordId + '\''; }
        public String getLabel() { return config.RelatedObject__c; }
    }

    private class ParentConfigWrapper implements ConfigWrapper {
        RelatedParentObject__mdt config;
        Id parentId;
        ParentConfigWrapper(RelatedParentObject__mdt c, Id pid) { config = c; parentId = pid; }
        public String getObjectName() { return config.RelatedObject__c; }
        public List<String> getFields() { return parseFields(config.Fields__c, true); }
        public String getWhereClause() { return 'Id = \'' + parentId + '\''; }
        public String getLabel() { return config.RelatedObject__c; }
    }

    private static Map<String, Object> processAndPopulateData(List<ConfigWrapper> configs) {
        Map<String, Object> result = new Map<String, Object>();
        for (ConfigWrapper wrapper : configs) {
            List<String> fields = wrapper.getFields();
            if (fields == null || fields.isEmpty()) continue;
            String soql = 'SELECT ' + String.join(fields, ', ') + ' FROM ' + wrapper.getObjectName() + ' WHERE ' + wrapper.getWhereClause() + ' LIMIT 10';
            List<SObject> records = executeQuery(soql, wrapper.getObjectName());
            if (records != null) {
                result.put(wrapper.getLabel(), packageDataForResponse(fields, records));
            }
        }
        return result;
    }

    private static List<ConfigWrapper> wrapHomePageConfigs(List<Home_Page_Objects_Configuratiom__mdt> configs, Id userId) {
        List<ConfigWrapper> wrappers = new List<ConfigWrapper>();
        for (Home_Page_Objects_Configuratiom__mdt config : configs) {
            if (!isValid(config)) continue;
            List<String> fields = parseFields(config.Fields__c);
            if (fields.size() <= 2) continue;
            wrappers.add(new HomePageConfigWrapper(config, userId));
        }
        return wrappers;
    }

    private static List<SObject> fetchCustomMetadata(String objectApiName, String soql) {

if (Schema.getGlobalDescribe().get(objectApiName).getDescribe().isAccessible()) {

return Database.query(soql);

}

return new List<SObject>();

}



private static List<Home_Page_Objects_Configuratiom__mdt> fetchHomePageObjectConfigs(Integer recordLimit) {

return (List<Home_Page_Objects_Configuratiom__mdt>) fetchCustomMetadata(

'Home_Page_Objects_Configuratiom__mdt',

'SELECT Fields__c, MasterLabel, Object__c, Subscriber__c FROM Home_Page_Objects_Configuratiom__mdt LIMIT ' + recordLimit

);

}



private static List<RelatedObject__mdt> fetchRelatedObjectConfigs(String objectName) {

return (List<RelatedObject__mdt>) fetchCustomMetadata(

'RelatedObject__mdt',

'SELECT RelatedObject__c, Fields__c, Lookup__c, MasterLabel FROM RelatedObject__mdt WHERE MasterLabel = \'' + String.escapeSingleQuotes(objectName) + '\''

);

}



private static List<RelatedParentObject__mdt> fetchRelatedParentObjectConfigs(String childObjectName) {

return (List<RelatedParentObject__mdt>) fetchCustomMetadata(

'RelatedParentObject__mdt',

'SELECT MasterLabel, Fields__c, RelatedObject__c, Lookup__c FROM RelatedParentObject__mdt WHERE MasterLabel = \'' + String.escapeSingleQuotes(childObjectName) + '\''

);

}

    private static List<String> parseFields(String fieldsStr) {
        List<String> fieldList = new List<String>();
        if (String.isBlank(fieldsStr)) return fieldList;
        for (String field : fieldsStr.split(',')) {
            String f = field.trim();
            if (String.isNotBlank(f) && !fieldList.contains(f)) fieldList.add(f);
        }
        return fieldList;
    }

    private static List<String> parseFields(String fieldsStr, Boolean ensureId) {
        List<String> list = parseFields(fieldsStr);
        if (ensureId && !list.contains('Id')) list.add(0, 'Id');
        return list;
    }

    private static List<SObject> executeQuery(String soql, String objectNameForError) {
        try {
            return Database.query(soql);
        } catch (Exception e) {
            System.debug('Query failed: ' + objectNameForError + ' :: ' + e.getMessage());
            return null;
        }
    }

    private static Map<String, Object> packageDataForResponse(List<String> fieldList, List<SObject> records) {
        Map<String, Object> data = new Map<String, Object>();
        data.put('fields', fieldList);
        data.put('records', flattenRecords(records, fieldList));
        return data;
    }

    private static List<Map<String, Object>> flattenRecords(List<SObject> records, List<String> fields) {
        List<Map<String, Object>> result = new List<Map<String, Object>>();
        for (SObject rec : records) {
            Map<String, Object> map = new Map<String, Object>();
            for (String f : fields) {
                map.put(f, getRelationshipFieldValue(rec, f));
            }
            result.add(map);
        }
        return result;
    }

    private static Object getRelationshipFieldValue(SObject rec, String fieldName) {
        if (!fieldName.contains('.')) return rec.get(fieldName);
        List<String> parts = fieldName.split('\\.');
        SObject temp = rec;
        for (Integer i = 0; i < parts.size() - 1; i++) {
            if (temp == null) return null;
            temp = temp.getSObject(parts[i]);
        }
        return temp != null ? temp.get(parts[parts.size() - 1]) : null;
    }

    private static Id getParentId(String childObjectName, String lookupField, Id childRecordId) {
        String soql = 'SELECT ' + lookupField + ' FROM ' + childObjectName + ' WHERE Id = \'' + childRecordId + '\'';
        List<SObject> results = executeQuery(soql, childObjectName);
        return (results != null && !results.isEmpty()) ? (Id) results[0].get(lookupField) : null;
    }

    private static String getSObjectNameFromId(Id recordId) {
        return recordId.getSObjectType().getDescribe().getName();
    }

    private static Boolean isValid(Home_Page_Objects_Configuratiom__mdt c) {
        return String.isNotBlank(c.Object__c) && String.isNotBlank(c.Fields__c);
    }

    private static Boolean isValid(RelatedObject__mdt c) {
        return String.isNotBlank(c.RelatedObject__c) && String.isNotBlank(c.Fields__c) && String.isNotBlank(c.Lookup__c);
    }

    private static Boolean isValid(RelatedParentObject__mdt c) {
        return String.isNotBlank(c.RelatedObject__c) && String.isNotBlank(c.Fields__c) && String.isNotBlank(c.Lookup__c);
    }
}
