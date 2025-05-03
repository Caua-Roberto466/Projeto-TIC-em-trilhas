document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Toggle menu icon
            const menuIcon = menuToggle.querySelector('.menu-icon');
            if (mobileMenu.classList.contains('active')) {
                menuIcon.style.background = 'transparent';
                menuIcon.style.transform = 'rotate(360deg)';
                menuIcon.style.transition = 'all 0.6s ease';
                
                if (menuIcon.style.background === 'transparent') {
                    menuIcon.style.background = 'transparent';
                }
                
                menuIcon.style.transform = 'rotate(360deg)';
                
                menuIcon.style.transition = 'all 0.6s ease';
                
                menuIcon.style.background = 'transparent';
                
            } else {
                menuIcon.style.background = 'var(--medium-gray)';
                
                menuIcon.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Test options
    const options = document.querySelectorAll('.option');
    if (options) {
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                options.forEach(opt => {
                    opt.classList.remove('active');
                    opt.style.borderColor = '#e5e5e5';
                    const radio = opt.querySelector('input[type="radio"]');
                    if (radio) radio.checked = false;
                });
                
                // Add active class to clicked option
                this.classList.add('active');
                this.style.borderColor = 'var(--orange)';
                const radio = this.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
            });
        });
    }

    // Test navigation
    const nextButton = document.getElementById('nextButton');
    const testContainer = document.getElementById('testContainer');
    const testResult = document.getElementById('testResult');
    
    if (nextButton && testContainer && testResult) {
        nextButton.addEventListener('click', function() {
            testContainer.style.display = 'none';
            testResult.style.display = 'block';
        });
    }

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons && tabContents) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to current button and content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks) {
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    // Start test button
    const startTestButton = document.getElementById('startTestButton');
    if (startTestButton) {
        startTestButton.addEventListener('click', () => {
            const testSection = document.getElementById('testSection');
            if (testSection) {
                testSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // See paths button
    const seePathsButton = document.getElementById('seePathsButton');
    if (seePathsButton) {
        seePathsButton.addEventListener('click', () => {
            const pathsSection = document.getElementById('pathsSection');
            if (pathsSection) {
                pathsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Seleciona elementos do DOM
const toggleNightModeBtn = document.getElementById('toggleNightMode');
const body = document.body;
const header = document.querySelector('.header');
const learningStylesSection = document.querySelector('.learning-styles');
const testSection = document.querySelector('.test-section');
const pathsSection = document.querySelector('.paths-section');
const benefitsSection = document.querySelector('.benefits-section');
const testimonialsSection = document.querySelector('.testimonials-section');
const ctaSection = document.querySelector('.cta-section');
const navLinks = document.querySelectorAll('.nav-link');
const buttons = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');
const footer = document.querySelector('.footer');
const sectionHeaders = document.querySelectorAll('.section-header');
const optionsLabels = document.querySelectorAll('.option label');
const tabButtons = document.querySelectorAll('.tab-button');
const pathCards = document.querySelectorAll('.path-card');
const tabContent = document.querySelectorAll('.tab-content');
const tabTitle = document.querySelectorAll('.tab-title');
const benefitCards = document.querySelectorAll('.benefit-card');
const testimonials = document.querySelectorAll('.testimonial');

// Função para alternar o modo noturno
function toggleDarkMode() {
    body.classList.toggle('night-mode');
    header.classList.toggle('night-mode');
    footer.classList.toggle('night-mode');
    learningStylesSection.classList.toggle('night-mode');
    testSection.classList.toggle('night-mode');
    pathsSection.classList.toggle('night-mode');
    benefitsSection.classList.toggle('night-mode');
    testimonialsSection.classList.toggle('night-mode');
    ctaSection.classList.toggle('night-mode');

    sectionHeaders.forEach(header => header.classList.toggle('night-mode'));
    optionsLabels.forEach(label => label.classList.toggle('night-mode'));
    navLinks.forEach(link => link.classList.toggle('night-mode'));
    buttons.forEach(button => button.classList.toggle('night-mode'));
    cards.forEach(card => {
        card.classList.toggle('night-mode');
        const cardTitle = card.querySelector('.card-title');
        if (cardTitle) {
            cardTitle.classList.toggle('night-mode');
        }
        const btn = card.querySelector('.btn');
        if (btn) {
            btn.classList.toggle('night-mode');
        }
    });
    tabButtons.forEach(button => button.classList.toggle('night-mode'));
    pathCards.forEach(card => card.classList.toggle('night-mode'));
    tabContent.forEach(content => content.classList.toggle('night-mode'));
    tabTitle.forEach(title => title.classList.toggle('night-mode'));
    benefitCards.forEach(card => card.classList.toggle('night-mode'));
    testimonials.forEach(testimonial => testimonial.classList.toggle('night-mode'));
    // Seção CTA
    const sectionTitle = document.querySelector('.section-title');
    const sectionText = document.querySelector('.section-text');
    sectionTitle.classList.toggle('night-mode');
    sectionText.classList.toggle('night-mode');
}

// Adiciona o evento de clique ao botão
toggleNightModeBtn.addEventListener('click', toggleDarkMode);