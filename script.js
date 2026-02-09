// ========================================
// Mobile Navigation
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        // Support keyboard activation for hamburger
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburger.click();
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ========================================
    // Smooth Scrolling
    // ========================================

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // FAQ Accordion
    // ========================================

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });

    // ========================================
    // Contact Form Validation and Submission
    // ========================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                showError('nameError', 'Моля, въведете вашето име');
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                showError('emailError', 'Моля, въведете вашия имейл');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showError('emailError', 'Моля, въведете валиден имейл адрес');
                isValid = false;
            }
            
            // Subject validation
            const subject = document.getElementById('subject').value;
            if (subject === '') {
                showError('subjectError', 'Моля, изберете тема');
                isValid = false;
            }
            
            // Message validation
            const message = document.getElementById('message').value.trim();
            if (message === '') {
                showError('messageError', 'Моля, напишете съобщение');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Съобщението трябва да е поне 10 символа');
                isValid = false;
            }
            
            // Terms validation
            const terms = document.getElementById('terms').checked;
            if (!terms) {
                showError('termsError', 'Моля, приемете условията');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                submitForm();
            }
        });
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            errorElement.parentElement.querySelector('input, select, textarea').style.borderColor = '#e74c3c';
        }
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
        
        const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
        inputs.forEach(input => {
            input.style.borderColor = '#e0e6ed';
        });
    }

    function submitForm() {
        // Hide form and show success message
        contactForm.style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Optional: Reset form after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 5000);
        }
    }

    // ========================================
    // Scroll to Top Button
    // ========================================

    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #4a90e2 0%, #50c878 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    document.body.appendChild(scrollBtn);

    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect for scroll button
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px)';
        scrollBtn.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    });

    // ========================================
    // Navbar Scroll Effect
    // ========================================

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#1a1a2e';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // ========================================
    // Animation on Scroll
    // ========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.card, .content-box, .comparison-card, .interface-card, .business-card, .recommendation-card, .stat-card, .insight-card, .cert-card, .project-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // ========================================
    // Terminal Typing Animation
    // ========================================

    const terminalLine = document.querySelector('.terminal-line .typing');
    if (terminalLine) {
        const commands = [
            'ls -la',
            'cat README.md',
            'sudo apt update',
            'docker ps -a',
            'git status',
            'npm install'
        ];
        let currentCommand = 0;

        function typeCommand() {
            currentCommand = (currentCommand + 1) % commands.length;
            terminalLine.textContent = commands[currentCommand];
        }

        setInterval(typeCommand, 3000);
    }

    // ========================================
    // Dynamic Copyright Year
    // ========================================

    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && footerYear.textContent.includes('2026')) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
    }

    // ========================================
    // Loading Animation for Charts
    // ========================================

    const chartContainers = document.querySelectorAll('.chart-container canvas');
    chartContainers.forEach(canvas => {
        canvas.style.opacity = '0';
        canvas.style.transition = 'opacity 0.5s ease';
        
        // Fade in when chart is loaded
        setTimeout(() => {
            canvas.style.opacity = '1';
        }, 300);
    });

    // ========================================
    // Skill Bar Animation
    // ========================================

    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger animation
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // ========================================
    // Print Page Functionality
    // ========================================

    // Add print button (optional)
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i>';
    printBtn.className = 'print-btn';
    printBtn.title = 'Принтирай страницата';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    // Show print button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            printBtn.style.display = 'flex';
        } else {
            printBtn.style.display = 'none';
        }
    });

    printBtn.addEventListener('click', () => {
        window.print();
    });

    printBtn.addEventListener('mouseenter', () => {
        printBtn.style.transform = 'translateY(-5px)';
        printBtn.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
    });

    printBtn.addEventListener('mouseleave', () => {
        printBtn.style.transform = 'translateY(0)';
        printBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    });

    document.body.appendChild(printBtn);

    // ========================================
    // Share Functionality
    // ========================================

    function shareOnSocial(platform) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        let shareUrl = '';
        
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }

    // Make share function available globally
    window.shareOnSocial = shareOnSocial;

    // ========================================
    // Local Storage for Form Data (Optional)
    // ========================================

    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    
    // Save form data to local storage
    formInputs.forEach(input => {
        // Load saved data
        const savedValue = localStorage.getItem(input.id);
        if (savedValue && input.type !== 'checkbox' && input.type !== 'radio') {
            input.value = savedValue;
        }
        
        // Save on change
        input.addEventListener('change', () => {
            if (input.type !== 'checkbox' && input.type !== 'radio') {
                localStorage.setItem(input.id, input.value);
            }
        });
    });

    // Clear local storage on successful submission
    if (contactForm) {
        const originalSubmit = submitForm;
        submitForm = function() {
            originalSubmit();
            formInputs.forEach(input => {
                localStorage.removeItem(input.id);
            });
        };
    }

    // ========================================
    // Accessibility Improvements
    // ========================================

    // Add keyboard navigation for FAQ
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                    question.setAttribute('aria-expanded', 
                        item.classList.contains('active') ? 'true' : 'false'
                    );
                }
            });
        }
    });

    // ========================================
    // Dark Mode Toggle (Optional Feature)
    // ========================================

    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.title = 'Превключи тъмен режим';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 150px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    // Show dark mode toggle on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            darkModeToggle.style.display = 'flex';
        } else {
            darkModeToggle.style.display = 'none';
        }
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.querySelector('i').className = 'fas fa-sun';
    }

    document.body.appendChild(darkModeToggle);

    console.log('CLI vs GUI website loaded successfully! 🚀');
});
