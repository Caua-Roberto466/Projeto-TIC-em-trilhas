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

// Função para ativar o modo noturno
function enableDarkMode() {
    body.classList.add('night-mode');
    const elementsToToggle = [
        ...body.querySelectorAll('.header, .footer, .learning-styles, .test-section, .test-container, #mobileMenu, .mobile-nav-link.highlight, .paths-section, .benefits-section, .testimonials-section, .cta-section, .section-header, .nav-link, .btn, .card, .tab-button, .path-card, .tab-content, .tab-title, .benefit-card, .testimonial, #loginForm, #cadastroForm')
    ];
    elementsToToggle.forEach(element => element.classList.add('night-mode'));

    // Atualiza o texto do botão
    toggleNightModeBtn.textContent = 'Modo Claro';
}

// Função para desativar o modo noturno
function disableDarkMode() {
    body.classList.remove('night-mode');
    const elementsToToggle = [
        ...body.querySelectorAll('.header, .footer, .learning-styles, .test-section, .test-container, #mobileMenu, .mobile-nav-link.highlight, .paths-section, .benefits-section, .testimonials-section, .cta-section, .section-header, .nav-link, .btn, .card, .tab-button, .path-card, .tab-content, .tab-title, .benefit-card, .testimonial, #loginForm, #cadastroForm')
    ];
    elementsToToggle.forEach(element => element.classList.remove('night-mode'));

    // Atualiza o texto do botão
    toggleNightModeBtn.textContent = 'Modo Noturno';
}

// Verifica se o modo noturno deve ser ativado ao carregar a página
if (localStorage.getItem('night-mode') === 'true') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Adiciona o evento de clique ao botão
toggleNightModeBtn.addEventListener('click', () => {
    if (body.classList.contains('night-mode')) {
        disableDarkMode();
        localStorage.setItem('night-mode', 'false');
    } else {
        enableDarkMode();
        localStorage.setItem('night-mode', 'true');
    }
});

