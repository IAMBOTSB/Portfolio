// Portfolio data
const portfolioData = {
    personal: {
        name: "Suyash Patil",
        title: "Salesforce Developer", 
        location: "Mumbai, Maharashtra",
        phone: "(+91) 9075354587",
        email: "ssbvpatil04@gmail.com",
        image: "https://raw.githubusercontent.com/IAMBOTSB/Portfolio/main/photo_2025-04-12_15-53-10.jpg"
    },
    sections: {
        from: {
            title: "About Me",
            content: "I'm <strong>Suyash Patil</strong> from <strong>Mumbai, Maharashtra, India 🇮🇳</strong>.<br>A passionate Salesforce Developer driven by innovation and continuous learning.",
            template: "summary-detailed-template"
        },
        experience: {
            title: "Work Experience", 
            content: "Journey through roles like Associate Consultant, Sr. Analyst, and Analyst at Capgemini, focusing on Salesforce development, Gen AI, and client solutions.",
            template: "experience-detailed-template"
        },
        skills: {
            title: "Core Skills",
            content: "<ul><li>⚡️ SFDC Ecosystem (Clouds, LWC, Apex)</li><li>🤖 Salesforce Einstein & Gen AI</li><li>💻 React, JavaScript, Java</li><li>🔄 Agile, Integrations, CRM Strategy</li></ul>",
            template: "skills-detailed-template"
        },
        achievements: {
            title: "Key Achievements",
            content: "<ul><li>🏆 VALUE CREATOR AWARD - Capgemini</li><li>🌟 STAR AWARD - Capgemini</li><li>📈 Delivered high-impact Salesforce projects & PoCs.</li></ul>",
            template: "awards-detailed-template"
        },
        certifications: {
            title: "Top Certifications",
            content: "<ul><li>✅ Platform Developer II & I</li><li>✅ Omnistudio Developer</li><li>✅ AI Associate, Administrator</li><li>9x Salesforce Certified & more!</li></ul>",
            template: "certificates-detailed-template"
        }
    },
    skills: {
        chartData: {
            labels: ["LWC & Aura", "APEX", "Service Cloud", "Gen AI & Einstein", "Integration", "React & JS"],
            values: [90, 85, 80, 88, 75, 70]
        }
    }
};

// Global variables
let particles = [];
let mouseTrail = [];
let currentSection = null;
let skillsChart = null;
let isCardFlipped = false;
let outsideClickHandler = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Show loading spinner initially
    showLoadingSpinner();
    
    // Initialize all systems
    setTimeout(() => {
        initializeParticleSystem();
        initializeMouseTrail();
        initializeCardFlip();
        initializeHotspots();
        initializeEnhancedEffects();
        initializeKeyboardNavigation();
        handleResize();
        hideLoadingSpinner();
        
        // Auto-flip card after 1.5 seconds
        setTimeout(() => {
            if (!isCardFlipped) {
                flipCard();
            }
        }, 1500);
    }, 1000);
}

// Loading spinner functions
function showLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'flex';
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.opacity = '0';
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);
}

// Particle system
function initializeParticleSystem() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
    
    // Animate particles
    animateParticles();
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
    
    container.appendChild(particle);
    particles.push(particle);
}

function animateParticles() {
    particles.forEach(particle => {
        // Add random movement
        const randomX = (Math.random() - 0.5) * 2;
        const randomY = (Math.random() - 0.5) * 2;
        
        particle.style.transform += ` translate(${randomX}px, ${randomY}px)`;
    });
    
    requestAnimationFrame(animateParticles);
}

// Mouse trail system
function initializeMouseTrail() {
    const canvas = document.getElementById('mouseTrail');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse movement tracking
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({
            x: e.clientX,
            y: e.clientY,
            life: 1
        });
        
        // Limit trail length
        if (mouseTrail.length > 20) {
            mouseTrail.shift();
        }
    });
    
    // Animate trail
    function animateTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        mouseTrail.forEach((point, index) => {
            if (point.life > 0) {
                ctx.globalAlpha = point.life * 0.3;
                ctx.fillStyle = '#1fb8cd';
                ctx.beginPath();
                ctx.arc(point.x, point.y, 3 * point.life, 0, Math.PI * 2);
                ctx.fill();
                
                // Fade out
                point.life -= 0.05;
            }
        });
        
        // Remove dead points
        mouseTrail = mouseTrail.filter(point => point.life > 0);
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Card flip functionality
function initializeCardFlip() {
    const cardContainer = document.getElementById('cardContainer');
    const cardFront = cardContainer.querySelector('.card-front');
    
    // Only allow clicking on the front face to flip
    cardFront.addEventListener('click', function(e) {
        if (!isCardFlipped) {
            e.stopPropagation();
            flipCard();
        }
    });
}

function flipCard() {
    const cardContainer = document.getElementById('cardContainer');
    
    if (!isCardFlipped) {
        cardContainer.classList.add('flipped');
        isCardFlipped = true;
    }
}

// Hotspot system
function initializeHotspots() {
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const section = this.dataset.section;
            showBranchPopup(section, e);
        });
        
        // Hover effects
        hotspot.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.opacity = '0.8';
            this.style.background = 'rgba(31, 184, 205, 0.4)';
        });
        
        hotspot.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.background = 'rgba(31, 184, 205, 0.2)';
        });
    });
}

// Branch popup functions
function showBranchPopup(section, event) {
    // Close any existing popup first
    closeBranchPopup();
    
    const popup = document.getElementById('branchPopup');
    const sectionData = portfolioData.sections[section];
    
    if (!sectionData) return;
    
    // Set popup content
    document.getElementById('popupTitle').textContent = sectionData.title;
    document.getElementById('popupContent').innerHTML = sectionData.content;
    
    // Position popup
    const rect = event.target.getBoundingClientRect();
    const popupWidth = 320;
    const popupHeight = 200;
    
    let left = rect.right + 10;
    let top = rect.top;
    
    // Adjust if popup would go off screen
    if (left + popupWidth > window.innerWidth) {
        left = rect.left - popupWidth - 10;
    }
    if (top + popupHeight > window.innerHeight) {
        top = window.innerHeight - popupHeight - 20;
    }
    if (left < 10) {
        left = 10;
    }
    if (top < 10) {
        top = 10;
    }
    
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    
    // Show popup
    popup.classList.remove('hidden');
    currentSection = section;
    
    // Set up outside click handler
    setTimeout(() => {
        outsideClickHandler = function(e) {
            const popup = document.getElementById('branchPopup');
            if (!popup.contains(e.target) && !e.target.closest('.hotspot')) {
                closeBranchPopup();
            }
        };
        document.addEventListener('click', outsideClickHandler);
    }, 100);
}

function closeBranchPopup() {
    const popup = document.getElementById('branchPopup');
    popup.classList.add('hidden');
    currentSection = null;
    
    if (outsideClickHandler) {
        document.removeEventListener('click', outsideClickHandler);
        outsideClickHandler = null;
    }
}

// Detail modal functions
function openDetailModal() {
    if (!currentSection) return;
    
    const modal = document.getElementById('detailModal');
    const sectionData = portfolioData.sections[currentSection];
    
    // Set modal title
    document.getElementById('modalTitle').textContent = sectionData.title;
    
    // Get template content
    const template = document.getElementById(sectionData.template);
    const modalContent = document.getElementById('modalContent');
    
    if (template) {
        modalContent.innerHTML = template.innerHTML;
        
        // Initialize chart if skills section
        if (currentSection === 'skills') {
            setTimeout(() => initializeSkillsChart(), 100);
        }
    }
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Close branch popup
    closeBranchPopup();
}

function closeDetailModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    
    // Destroy chart if exists
    if (skillsChart) {
        skillsChart.destroy();
        skillsChart = null;
    }
}

// Skills radar chart
function initializeSkillsChart() {
    const canvas = document.getElementById('skillsRadarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const chartData = portfolioData.skills.chartData;
    
    skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Skill Level',
                data: chartData.values,
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: 'rgba(31, 184, 205, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(31, 184, 205, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(31, 184, 205, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: '#626c71',
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(98, 108, 113, 0.3)'
                    },
                    angleLines: {
                        color: 'rgba(98, 108, 113, 0.3)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        color: '#134252'
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Interview modal functions
function openInterviewModal(role, period) {
    const modal = document.getElementById('interviewModal');
    
    // Set role info
    document.getElementById('interviewRoleTitle').textContent = role;
    document.getElementById('interviewRolePeriod').textContent = period;
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Generate initial questions
    generateQuestions();
}

function closeInterviewModal() {
    const modal = document.getElementById('interviewModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function generateQuestions() {
    const questionsContainer = document.getElementById('interviewQuestions');
    const generateBtn = document.getElementById('generateBtn');
    
    // Show loading
    questionsContainer.innerHTML = `
        <div class="loading-questions">
            <div class="spinner-small"></div>
            <p>Generating interview questions...</p>
        </div>
    `;
    
    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';
    
    // Simulate API call delay
    setTimeout(() => {
        const questions = getInterviewQuestions();
        displayQuestions(questions);
        
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate New Questions';
    }, 2000);
}

function getInterviewQuestions() {
    const questionSets = [
        [
            {
                category: "Technical Skills",
                question: "Can you explain the difference between Apex triggers and Process Builder? When would you use each?"
            },
            {
                category: "Problem Solving",
                question: "Describe a challenging Salesforce implementation you worked on. How did you overcome the obstacles?"
            },
            {
                category: "Best Practices",
                question: "How do you ensure your Lightning Web Components are optimized for performance?"
            },
            {
                category: "Integration",
                question: "What approaches would you use to integrate Salesforce with external systems?"
            },
            {
                category: "AI & Innovation",
                question: "How have you leveraged Salesforce Einstein or Gen AI features in your projects?"
            }
        ],
        [
            {
                category: "Architecture",
                question: "How do you approach designing a scalable Salesforce solution for a large enterprise?"
            },
            {
                category: "Development",
                question: "Explain your process for writing and maintaining test classes in Apex."
            },
            {
                category: "User Experience",
                question: "How do you balance customization with out-of-the-box functionality in Salesforce?"
            },
            {
                category: "Data Management",
                question: "What strategies do you use for data migration and data quality in Salesforce?"
            },
            {
                category: "Collaboration",
                question: "How do you work with stakeholders to gather requirements and manage expectations?"
            }
        ],
        [
            {
                category: "Advanced Development",
                question: "Describe your experience with Salesforce DX and CI/CD practices."
            },
            {
                category: "Security",
                question: "How do you implement proper security and sharing rules in Salesforce?"
            },
            {
                category: "Performance",
                question: "What techniques do you use to optimize SOQL queries and prevent governor limit issues?"
            },
            {
                category: "Innovation",
                question: "How do you stay updated with the latest Salesforce features and incorporate them into projects?"
            },
            {
                category: "Leadership",
                question: "Describe a time when you mentored junior developers or led a technical initiative."
            }
        ]
    ];
    
    // Return random question set
    return questionSets[Math.floor(Math.random() * questionSets.length)];
}

function displayQuestions(questions) {
    const questionsContainer = document.getElementById('interviewQuestions');
    
    let questionsHTML = questions.map((q, index) => `
        <div class="question-item" style="animation-delay: ${index * 0.1}s">
            <h4>${q.category}</h4>
            <p>${q.question}</p>
        </div>
    `).join('');
    
    questionsContainer.innerHTML = questionsHTML;
    
    // Animate questions in
    const questionItems = questionsContainer.querySelectorAll('.question-item');
    questionItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Enhanced hover effects for cards
function initializeEnhancedEffects() {
    const cardContainer = document.getElementById('cardContainer');
    
    cardContainer.addEventListener('mousemove', function(e) {
        if (!isCardFlipped) return; // Only apply effects when card is flipped
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (x - centerX) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    cardContainer.addEventListener('mouseleave', function() {
        if (isCardFlipped) {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        }
    });
}

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes modals
        if (e.key === 'Escape') {
            closeDetailModal();
            closeInterviewModal();
            closeBranchPopup();
        }
        
        // Space or Enter flips card when focused
        if ((e.key === ' ' || e.key === 'Enter') && document.activeElement === document.getElementById('cardContainer')) {
            e.preventDefault();
            if (!isCardFlipped) {
                flipCard();
            }
        }
    });
}

// Resize handler
function handleResize() {
    window.addEventListener('resize', function() {
        // Close popups on resize
        closeBranchPopup();
        
        // Reposition elements if needed
        if (skillsChart) {
            skillsChart.resize();
        }
    });
}

// Add smooth scrolling for any anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Export functions for global access
window.closeBranchPopup = closeBranchPopup;
window.openDetailModal = openDetailModal;
window.closeDetailModal = closeDetailModal;
window.openInterviewModal = openInterviewModal;
window.closeInterviewModal = closeInterviewModal;
window.generateQuestions = generateQuestions;