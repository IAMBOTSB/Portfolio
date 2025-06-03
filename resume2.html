<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suyash Patil - Interactive Portfolio Resume</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Visualization & Content Choices: 
        - Main Flipping Card: Goal: Engage & Initial Navigation -> Viz: Image with Hotspots & Popups -> Interaction: Card flip, hotspot click for popups containing "View Details" links.
        - Detailed Content: Goal: Comprehensive Info -> Viz: Full-page Modal with Flip Animation -> Interaction: Modal appears on "View Details" click, contains full text, timeline, radar chart (re-initialized in modal), lists. Close button returns to main card.
        - CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f4eac4; /* Page background matches card section for seamless initial view */
            color: #383838;
            margin: 0;
            overflow-x: hidden;
            display: flex; /* For centering the card initially */
            flex-direction: column;
            align-items: center;
            justify-content: center; /* Center card vertically for initial view */
            min-height: 100vh; /* Ensure body takes full viewport height */
        }
        
        header, footer {
            display: none !important; /* Hide header and footer */
        }

        main {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center; /* Ensure card section is centered */
        }

        .card-section-wrapper {
            display: flex;
            justify-content: center;
            padding-top: 20px; 
            padding-bottom: 40px;
            background-color: #f4eac4; 
            width: auto; /* Adjust width to content or keep 100% if needed */
            max-width: 100%;
        }

        .card-container-fixed { 
            position: relative;
            width: 600px; 
            height: auto; 
        }

        .card-flip-container {
            perspective: 1000px;
            width: 100%;
        }

        .card-flip {
            width: 100%;
            min-height: 901px; 
            transition: transform 1s ease-in-out;
            transform-style: preserve-3d;
            position: relative;
        }

        .card-front, 
        .card-back { 
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 15px; 
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .card-front { 
            background: #e3c29f; 
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            cursor: pointer;
        }

        .card-back-design-pattern { 
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                45deg,
                #caa474,
                #caa474 10px,
                #e3c29f 10px,
                #e3c29f 20px
            );
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px; 
            position: relative;
        }

        .reveal-text {
            font-size: 24px; 
            font-weight: bold;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.35);
            padding: 12px 24px;
            border-radius: 8px;
            animation: fadeInText 1.5s ease-in-out infinite alternate;
        }

        .card-back { 
            transform: rotateY(180deg);
            z-index: 1;
            background-color: #fff; 
        }

        .card-flip.flipped {
            transform: rotateY(180deg);
        }

        .interactive-card-image-container { 
            position: relative;
            width: 100%;
            height: 100%;
        }

        .interactive-card-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover; 
            border-radius: 15px; 
        }

        .hotspot {
            position: absolute;
            cursor: pointer;
            background: rgba(255, 255, 255, 0); 
            transition: background-color 0.3s, border 0.3s;
        }

        .hotspot:hover {
            border: 3px solid #D97706; 
            background: rgba(217, 119, 6, 0.2); 
        }

        .branch-popup {
            display: none;
            position: fixed; /* Changed to fixed for better positioning relative to viewport */
            z-index: 1000;
            animation: fadeInPopup 0.3s ease-out;
            /* JS will set top/left */
        }

        .branch-content {
            background: #f0dfc1; 
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            padding: 20px;
            width: 300px; 
            position: relative;
            border: 3px solid #8c6e48; 
        }

        .branch-content h2 {
            margin-top: 0;
            font-size: 18px;
            color: #4a3b24; 
        }

        .branch-content p,
        .branch-content ul,
        .branch-content .view-details-link-container {
            font-size: 14px;
            margin-top: 10px;
            color: #5c4b31;
        }
        .branch-content .view-details-link {
            font-weight: 600;
            color: #8c6e48; 
        }
        .branch-content .view-details-link:hover {
            color: #D97706; 
            text-decoration: underline;
        }

        .branch-content ul {
            padding-left: 20px;
            margin-bottom: 10px; 
        }

        .branch-content ul li {
            margin-bottom: 6px;
        }
        .branch-content ul li strong {
            color: #4a3b24;
        }

        .popup-arrow { 
            width: 0;
            height: 0;
            position: absolute;
            left: -10px; 
            top: 20px;
            border-style: solid;
            border-width: 10px 10px 10px 0; 
            border-color: transparent #8c6e48 transparent transparent; 
        }

        .close-popup-btn { 
            position: absolute;
            top: 10px;
            right: 14px;
            font-size: 20px;
            font-weight: bold;
            color: #a18864;
            cursor: pointer;
            transition: color 0.3s;
        }

        .close-popup-btn:hover {
            color: #4a3b24;
        }

        @keyframes fadeInText {
            from { opacity: 0.7; transform: scale(1); }
            to { opacity: 1; transform: scale(1.03); }
        }
        @keyframes fadeInPopup {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            left: -0.5rem;
            top: 0.25rem; 
            background-color: #FDBA74; 
            border: 3px solid #FFFBEB; 
        }
        .chart-container-modal { /* Specific class for chart in modal */
            position: relative;
            width: 100%;
            max-width: 450px; /* Adjusted for modal */
            height: 380px; /* Adjusted for modal */
            margin: 20px auto;
        }

        /* Detail Modal Styles */
        .detail-modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease-in-out;
        }
        .detail-modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }
        .detail-modal-flipper {
            perspective: 1500px;
            width: 90%;
            max-width: 1000px;
            height: 85vh;
        }
        .detail-modal-card {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
            transform: rotateY(180deg); /* Start flipped to show "back" first */
        }
        .detail-modal-card.flipped {
            transform: rotateY(0deg); /* Flip to show "front" (content) */
        }
        .detail-modal-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background-color: #FDFBF8; /* Light background for modal content */
            border-radius: 10px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.25);
            overflow-y: auto;
        }
        .detail-modal-back-face { /* The side initially visible before content loads/flips */
            transform: rotateY(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            color: #888;
            background-color: #e0d6c3; /* Slightly different from main card back */
        }
        .detail-modal-front-face { /* Content side */
            padding: 25px 35px;
        }
        .detail-modal-close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 2.5rem;
            font-weight: bold;
            color: #888;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 10; /* Ensure it's above content */
        }
        .detail-modal-close-btn:hover {
            color: #333;
        }
        /* Styles for content within the detail modal */
        .detail-modal-front-face h2 {
            font-size: 2rem;
            color: #D97706;
            border-bottom: 2px solid #FDBA74;
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
         .detail-modal-front-face h3 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #383838; }
         .detail-modal-front-face p, .detail-modal-front-face ul { font-size: 0.95rem; line-height: 1.6; color: #4A5568; }
         .detail-modal-front-face ul { list-style-position: inside; padding-left: 0.5rem; }
         .detail-modal-front-face .experience-details li { margin-bottom: 0.3rem; }
         .detail-modal-front-face .generate-questions-btn { margin-top: 1rem; }
         .detail-modal-front-face .text-center { text-align: center; }
         .detail-modal-front-face .text-amber-700 { color: #B45309; } /* Tailwind amber-700 */


        /* Hidden container for original detailed sections (used as templates) */
        #original-detailed-sections-templates {
            display: none !important;
        }
        .modal { /* For Gemini questions */
            transition: opacity 0.25s ease;
        }
        .modal-content {
            transition: transform 0.25s ease;
        }
    </style>
</head>
<body class="antialiased">
    <header> </header>

    <main>
        <section id="hero" class="card-section-wrapper">
            <div class="card-container-fixed">
                <div class="card-flip-container" id="flipContainer">
                    <div class="card-flip" id="flipCardElement">
                        <div class="card-front">
                            <div class="card-back-design-pattern">
                                <p class="reveal-text">Click to Reveal Bio</p>
                            </div>
                        </div>
                        <div class="card-back">
                            <div class="interactive-card-image-container" id="playerCard">
                                <img src="https://raw.githubusercontent.com/IAMBOTSB/Portfolio/main/photo_2025-04-12_15-53-10.jpg" alt="Suyash Patil Portfolio Image" onerror="this.onerror=null; this.src='https://placehold.co/600x901/e3c29f/4a3b24?text=Suyash+Patil';">
                                <div class="hotspot" data-section-key="from" style="top: 157px;left: 304px;width: 245px;height: 177px;border-radius: 15px;"></div>
                                <div class="hotspot" data-section-key="skills" style="top: 354px;left: 304px;width: 245px;height: 259px;border-radius: 17px;"></div>
                                <div class="hotspot" data-section-key="achievements" style="top: 634px;left: 43px;width: 506px;height: 91px;border-radius: 17px;"></div>
                                <div class="hotspot" data-section-key="certifications" style="top: 746px;left: 43px;width: 506px;height: 91px;border-radius: 17px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="branch-popup" id="branchPopup">
                <div class="popup-arrow"></div>
                <div class="branch-content">
                    <span class="close-popup-btn" id="closePopupBtnElement">&times;</span>
                    <h2 id="popupTitleElement">Title</h2>
                    <div id="popupTextElement">Content...</div>
                </div>
            </div>
        </section>
    </main>
    
    <footer> </footer>

    <div id="detailContentModalOverlay" class="detail-modal-overlay">
        <div class="detail-modal-flipper">
            <div class="detail-modal-card" id="detailModalCard">
                <div class="detail-modal-face detail-modal-back-face">
                    <p>Loading Details...</p>
                </div>
                <div class="detail-modal-face detail-modal-front-face">
                    <button id="detailModalCloseBtn" class="detail-modal-close-btn">&times;</button>
                    <div id="detailModalContentArea">
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div id="original-detailed-sections-templates">
        <div id="summary-detailed-template">
            <section class="text-center mb-10">
                <h1 class="text-4xl md:text-5xl font-bold">SUYASH PATIL</h1>
                <p class="text-xl md:text-2xl text-amber-700 mt-2 font-medium">Salesforce Developer</p>
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
                    <span class="text-sm">Mumbai, Maharashtra</span>
                    <span class="text-sm">(+91) 9075354587</span>
                    <a href="mailto:ssbvpatil04@gmail.com" class="text-sm hover:text-amber-600 transition-colors duration-300">ssbvpatil04@gmail.com</a>
                </div>
            </section>
            <h2>About Me</h2>
            <p>
                A dedicated Salesforce Developer with a strong foundation in SFDC, Service Cloud, Sales Cloud, Experience Cloud, and emerging technologies like Agentforce and Salesforce Einstein. Proven ability to deliver on project requirements, explore innovative solutions, and contribute to client success through development, PoCs, and demos. Experienced in leveraging React, Apex, LWC, and integrating Generative AI functionalities within the Salesforce ecosystem. Committed to continuous learning and professional development, as evidenced by multiple Salesforce certifications.
            </p>
        </div>

        <div id="experience-detailed-template">
            <h2>Work Experience</h2>
            <div class="relative border-l-2 border-amber-200 pl-8 space-y-12 mt-6">
                <div class="timeline-item" data-role="Associate Consultant" data-company="Capgemini, Mumbai">
                    <h3>Associate Consultant</h3>
                    <p class="text-base font-medium text-amber-700">Capgemini, Mumbai</p>
                    <p class="text-sm text-gray-500 mb-2">MARCH 2025 - PRESENT</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm experience-details">
                        <li>Worked on regular Salesforce project deliverables while exploring innovation opportunities.</li>
                        <li>Upskilled in Agentforce and successfully presented use cases to clients.</li>
                        <li>Contributed to projects handling both core development and PoC/demo responsibilities.</li>
                        <li>Explored Generative AI use cases through internal PoCs to add value to client discussions.</li>
                        <li>Completed Salesforce Omnistudio training, strengthening low-code automation capabilities.</li>
                    </ul>
                    <button class="generate-questions-btn mt-4 text-sm bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        ✨ Generate Interview Questions
                    </button>
                </div>
                <div class="timeline-item" data-role="Sr. Analyst" data-company="Capgemini, Mumbai">
                    <h3>Sr. Analyst</h3>
                    <p class="text-base font-medium text-amber-700">Capgemini, Mumbai</p>
                    <p class="text-sm text-gray-500 mb-2">MARCH 2024 - MARCH 2025</p>
                     <ul class="list-disc pl-5 space-y-1 text-sm experience-details">
                        <li>Leveraged React to build a customer-facing web application.</li>
                        <li>Implemented Salesforce Gen AI integrations to connect the platform with external AI tools.</li>
                        <li>Utilized Einstein Copilot and Recommendations to enhance user productivity.</li>
                        <li>Contributed to internal projects utilizing Gen AI, honing teamwork and practical application skills.</li>
                    </ul>
                    <button class="generate-questions-btn mt-4 text-sm bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        ✨ Generate Interview Questions
                    </button>
                </div>
                <div class="timeline-item" data-role="Analyst" data-company="Capgemini, Mumbai">
                    <h3>Analyst</h3>
                    <p class="text-base font-medium text-amber-700">Capgemini, Mumbai</p>
                    <p class="text-sm text-gray-500 mb-2">SEPT 2022 - MARCH 2024</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm experience-details">
                        <li>Demonstrated Salesforce development expertise in LWC, Apex Triggers, and Apex Testing.</li>
                        <li>Managed Service Cloud functionalities to streamline processes and improve customer service.</li>
                        <li>Ensured data accuracy and committed to the ongoing success of development projects.</li>
                    </ul>
                    <button class="generate-questions-btn mt-4 text-sm bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        ✨ Generate Interview Questions
                    </button>
                </div>
            </div>
        </div>
        
        <div id="skills-detailed-template">
             <h2>Core Competencies</h2>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6">
                <div class="md:order-2">
                    <div class="chart-container-modal bg-white rounded-xl shadow-lg p-4">
                        <canvas id="skillsChartModal"></canvas> </div>
                </div>
                <div class="space-y-4 md:order-1">
                    <div>
                        <h4 class="text-lg font-semibold">Salesforce Technologies:</h4>
                        <p class="text-sm leading-relaxed">SFDC, Salesforce Service Cloud, Salesforce Sales Cloud, Salesforce Experience Cloud, Salesforce Agentforce, Salesforce Integration, Salesforce Data Cloud, Salesforce Case Management, Salesforce Einstein, Salesforce Flows, Lightning Web Components (LWC), APEX, SOQL, Salesforce Omnistudio.</p>
                    </div>
                     <div>
                        <h4 class="text-lg font-semibold">Programming & Web:</h4>
                        <p class="text-sm leading-relaxed">React, Javascript, Java.</p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold">Methodologies/Other:</h4>
                        <p class="text-sm leading-relaxed">CRM, Agile Development, Client Communication, Problem-Solving, PoC Development.</p>
                    </div>
                </div>
             </div>
        </div>

        <div id="certificates-detailed-template">
            <h2>Certifications</h2>
            <ul class="space-y-3 mt-6">
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Platform Developer II</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Platform Developer I</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Omnistudio Developer</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Agentforce Specialist</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Platform App Builder</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified AI Associate</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Administrator</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Salesforce Certified Associate</li>
                <li class="flex items-center text-sm bg-amber-50 p-3 rounded-lg shadow-sm"><span class="text-amber-600 mr-3 text-lg">&#10004;</span>Advance Java Development and Web Development</li>
            </ul>
        </div>

        <div id="awards-detailed-template">
            <h2>Awards</h2>
             <ul class="space-y-4 mt-6">
                <li class="flex items-start bg-amber-50 p-4 rounded-lg shadow-sm">
                    <span class="text-amber-600 mr-3 text-xl mt-1">&#127942;</span>
                    <div>
                        <p class="font-semibold text-base">VALUE CREATOR AWARD</p>
                        <p class="text-sm text-gray-500">Capgemini (JAN 2025 - MARCH 2025)</p>
                    </div>
                </li>
                <li class="flex items-start bg-amber-50 p-4 rounded-lg shadow-sm">
                     <span class="text-amber-600 mr-3 text-xl mt-1">&#127942;</span>
                    <div>
                        <p class="font-semibold text-base">STAR AWARD</p>
                        <p class="text-sm text-gray-500">Capgemini (JAN 2024 - JUN 2024)</p>
                    </div>
                </li>
            </ul>
        </div>
        
         <div id="education-detailed-template">
            <h2>Education</h2>
            <div class="bg-amber-50 p-4 rounded-lg shadow-sm mt-6">
                <h3 class="text-xl font-semibold">BE - Computer Engineering</h3>
                <p class="text-amber-700 font-medium">Mumbai University, Mumbai</p>
                <p class="text-sm text-gray-500 mt-1">AUG 2018 - MAY 2022</p>
            </div>
        </div>
    </div>

    <div id="interviewModal" class="modal fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-[3000] opacity-0 pointer-events-none">
        <div class="modal-content bg-white rounded-lg shadow-xl p-6 w-full max-w-lg transform scale-95">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold text-gray-800">✨ Suggested Interview Questions</h3>
                <button id="closeGeminiModalBtn" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <div id="geminiModalBody" class="text-gray-600 space-y-3 max-h-[60vh] overflow-y-auto">
                <div id="geminiLoadingIndicator" class="text-center py-4 hidden">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto"></div>
                    <p class="mt-2 text-sm text-gray-500">Generating questions...</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        const cardSectionData = {
            from: {
                title: "About Me",
                content: "I'm <strong>Suyash Patil</strong> from <strong>Mumbai, Maharashtra, India 🇮🇳</strong>.<br>A passionate Salesforce Developer driven by innovation and continuous learning.",
                detailsLink: "<p class='view-details-link-container'><a href='#' class='view-details-link' data-target-template='summary-detailed-template'>View Full Summary...</a></p>"
            },
            skills: {
                title: "Core Skills",
                content: `
                    <ul>
                        <li>⚡️ SFDC Ecosystem (Clouds, LWC, Apex)</li>
                        <li>🤖 Salesforce Einstein & Gen AI</li>
                        <li>💻 React, JavaScript, Java</li>
                        <li>🔄 Agile, Integrations, CRM Strategy</li>
                    </ul>`,
                detailsLink: "<p class='view-details-link-container'><a href='#' class='view-details-link' data-target-template='skills-detailed-template'>See Detailed Skills & Proficiency...</a></p>"
            },
            achievements: {
                title: "Key Achievements",
                content: `
                    <ul>
                        <li>🏆 VALUE CREATOR AWARD - Capgemini</li>
                        <li>🌟 STAR AWARD - Capgemini</li>
                        <li>📈 Delivered high-impact Salesforce projects & PoCs.</li>
                    </ul>`,
                detailsLink: "<p class='view-details-link-container'><a href='#' class='view-details-link' data-target-template='awards-detailed-template'>View All Awards...</a></p>"
            },
            certifications: {
                title: "Top Certifications",
                content: `
                    <ul>
                        <li>✅ Platform Developer II & I</li>
                        <li>✅ Omnistudio Developer</li>
                        <li>✅ AI Associate, Administrator</li>
                        <li>9x Salesforce Certified & more!</li>
                    </ul>`,
                detailsLink: "<p class='view-details-link-container'><a href='#' class='view-details-link' data-target-template='certificates-detailed-template'>See All Certifications...</a></p>"
            }
        };

        const popupElement = document.getElementById("branchPopup");
        const popupTitleElement = document.getElementById("popupTitleElement");
        const popupTextElement = document.getElementById("popupTextElement");
        const flipCardElement = document.getElementById("flipCardElement");
        const cardContainerFixed = document.querySelector('.card-container-fixed');
        
        const detailModalOverlay = document.getElementById('detailContentModalOverlay');
        const detailModalCard = document.getElementById('detailModalCard');
        const detailModalContentArea = document.getElementById('detailModalContentArea');
        const detailModalCloseBtn = document.getElementById('detailModalCloseBtn');
        let skillsModalChart = null; // To store chart instance

        document.querySelectorAll(".hotspot").forEach(el => {
            el.addEventListener("click", (event) => {
                event.stopPropagation(); 
                const sectionKey = el.getAttribute("data-section-key");
                const data = cardSectionData[sectionKey];

                if (data) {
                    popupTitleElement.innerHTML = data.title;
                    popupTextElement.innerHTML = data.content + (data.detailsLink || ''); 

                    const hotspotRect = el.getBoundingClientRect();
                    // Position popup next to hotspot
                    popupElement.style.left = `${hotspotRect.right + 10}px`; 
                    popupElement.style.top = `${hotspotRect.top}px`; 
                    popupElement.style.display = 'block';

                    const viewDetailsLink = popupTextElement.querySelector('.view-details-link');
                    if (viewDetailsLink) {
                        viewDetailsLink.addEventListener('click', function(e) {
                            e.preventDefault();
                            const targetTemplateId = this.dataset.targetTemplate;
                            showDetailInModal(targetTemplateId);
                            popupElement.style.display = 'none'; 
                        });
                    }
                }
            });
        });
        
        function showDetailInModal(templateId) {
            const template = document.getElementById(templateId);
            if (template && detailModalOverlay && detailModalCard && detailModalContentArea) {
                detailModalContentArea.innerHTML = template.innerHTML;
                
                detailModalOverlay.classList.add('active');
                setTimeout(() => { // Allow overlay to become visible before flip
                    detailModalCard.classList.add('flipped'); // Trigger flip to content
                }, 50);


                if (templateId === 'skills-detailed-template') {
                    const canvas = detailModalContentArea.querySelector('#skillsChartModal');
                    if (canvas) {
                        if (skillsModalChart) {
                            skillsModalChart.destroy(); // Destroy previous chart instance
                        }
                        skillsModalChart = new Chart(canvas.getContext('2d'), {
                            type: 'radar',
                            data: {
                                labels: ['LWC & Aura', 'APEX', 'Service Cloud', 'Gen AI & Einstein', 'Integration', 'React & JS'],
                                datasets: [{
                                    label: 'Proficiency Level',
                                    data: [90, 85, 80, 88, 75, 70],
                                    backgroundColor: 'rgba(253, 186, 116, 0.3)', 
                                    borderColor: 'rgba(249, 115, 22, 1)', 
                                    pointBackgroundColor: 'rgba(249, 115, 22, 1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(249, 115, 22, 1)',
                                    borderWidth: 2,
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: { r: { angleLines: { color: 'rgba(0,0,0,0.1)' }, grid: { color: 'rgba(0,0,0,0.1)' }, pointLabels: { font: { size: 10 }, color: '#4B5563' }, ticks: { display: false, beginAtZero: true, max: 100, stepSize: 20 }}},
                                plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => `${ctx.dataset.label || ''}: ${ctx.parsed.r || 0}%`}}}
                            }
                        });
                    }
                }
                // Re-attach event listeners for Gemini buttons if they are in the loaded content
                attachGeminiButtonListeners(detailModalContentArea);
            }
        }

        function closeDetailModal() {
            if (detailModalOverlay && detailModalCard) {
                detailModalCard.classList.remove('flipped'); // Flip back
                 setTimeout(() => { // Wait for flip animation
                    detailModalOverlay.classList.remove('active');
                    if (skillsModalChart) { // Clean up chart
                        skillsModalChart.destroy();
                        skillsModalChart = null;
                    }
                }, 600); // Match transition duration (0.8s is a bit long, using 0.6s for timeout)
            }
        }
        if(detailModalCloseBtn) detailModalCloseBtn.addEventListener('click', closeDetailModal);
        if(detailModalOverlay) detailModalOverlay.addEventListener('click', function(event) {
            if (event.target === detailModalOverlay) { // Click on overlay itself
                closeDetailModal();
            }
        });


        document.getElementById("closePopupBtnElement").addEventListener("click", () => {
            popupElement.style.display = 'none';
        });
        
        document.addEventListener('click', function(event) {
            if (popupElement.style.display === 'block' && !popupElement.contains(event.target) && !Array.from(document.querySelectorAll(".hotspot")).some(h => h.contains(event.target))) {
                popupElement.style.display = 'none';
            }
        });

        if (flipCardElement) {
            const cardFrontFace = flipCardElement.querySelector('.card-front');
            if (cardFrontFace) {
                 cardFrontFace.addEventListener("click", () => {
                    flipCardElement.classList.toggle("flipped");
                });
            }
        }
        window.addEventListener("load", () => {
            setTimeout(() => {
                if(flipCardElement && !flipCardElement.classList.contains("flipped")) {
                     flipCardElement.classList.add("flipped");
                }
            }, 1200); 
        });

        // Gemini API Modal Logic
        const geminiInterviewModal = document.getElementById('interviewModal');
        const geminiModalBody = document.getElementById('geminiModalBody');
        const closeGeminiModalBtn = document.getElementById('closeGeminiModalBtn');
        const geminiLoadingIndicator = document.getElementById('geminiLoadingIndicator');
        
        function openGeminiInterviewModal() {
            if (!geminiInterviewModal) return;
            geminiInterviewModal.classList.remove('opacity-0', 'pointer-events-none');
            geminiInterviewModal.querySelector('.modal-content').classList.remove('scale-95');
            geminiInterviewModal.querySelector('.modal-content').classList.add('scale-100');
        }

        function closeGeminiInterviewModal() {
            if (!geminiInterviewModal) return;
            geminiInterviewModal.querySelector('.modal-content').classList.remove('scale-100');
            geminiInterviewModal.querySelector('.modal-content').classList.add('scale-95');
            geminiInterviewModal.classList.add('opacity-0', 'pointer-events-none');
        }
        
        if(closeGeminiModalBtn) closeGeminiModalBtn.addEventListener('click', closeGeminiInterviewModal);
        if(geminiInterviewModal) geminiInterviewModal.addEventListener('click', (event) => {
            if (event.target === geminiInterviewModal) closeGeminiInterviewModal();
        });

        function attachGeminiButtonListeners(container) {
            const generateQuestionBtns = container.querySelectorAll('.generate-questions-btn');
            generateQuestionBtns.forEach(btn => {
                // Prevent adding multiple listeners if content is reloaded
                if (btn.dataset.listenerAttached) return;
                btn.dataset.listenerAttached = 'true';

                btn.addEventListener('click', async function() {
                    const timelineItem = this.closest('.timeline-item');
                    const role = timelineItem.dataset.role;
                    const company = timelineItem.dataset.company;
                    const detailsList = timelineItem.querySelector('.experience-details');
                    let accomplishments = [];
                    if (detailsList) {
                        accomplishments = Array.from(detailsList.querySelectorAll('li')).map(li => li.textContent.trim());
                    }

                    if (!geminiModalBody || !geminiLoadingIndicator) return;
                    geminiModalBody.innerHTML = ''; 
                    geminiLoadingIndicator.classList.remove('hidden');
                    geminiModalBody.appendChild(geminiLoadingIndicator);
                    openGeminiInterviewModal();

                    const promptText = `Generate 3-4 insightful interview questions (mix of behavioral and situational) for a candidate, Suyash Patil, based on this role and accomplishments. Format as a numbered list.

Role: ${role} at ${company}
Accomplishments/Responsibilities:
${accomplishments.map(acc => `- ${acc}`).join('\n')}

Generated Questions:`;

                    try {
                        let chatHistory = [{ role: "user", parts: [{ text: promptText }] }];
                        const payload = { contents: chatHistory };
                        const apiKey = ""; 
                        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                        
                        const response = await fetch(apiUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });

                        if (!response.ok) throw new Error(`API request failed: ${response.status}`);
                        
                        const result = await response.json();
                        geminiLoadingIndicator.classList.add('hidden');

                        if (result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
                            const text = result.candidates[0].content.parts[0].text;
                            const questionsHtml = text.split('\n').map(q => {
                                if (q.match(/^\d+\./)) return `<p class="mb-2 p-3 bg-amber-50 rounded-md shadow-sm text-sm">${q}</p>`;
                                return q ? `<p class="mb-1 text-sm">${q}</p>` : '';
                            }).join('');
                            geminiModalBody.innerHTML = questionsHtml;
                        } else {
                            geminiModalBody.innerHTML = '<p>Sorry, unable to generate questions now. Please try later.</p>';
                            console.error('Unexpected API response:', result);
                        }
                    } catch (error) {
                        geminiLoadingIndicator.classList.add('hidden');
                        geminiModalBody.innerHTML = `<p class="text-red-600">Error: ${error.message}. Check console.</p>`;
                        console.error('Error generating questions:', error);
                    }
                });
            });
        }
    </script>
</body>
</html>
