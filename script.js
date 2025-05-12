document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && !event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherIcon = otherItem.querySelector('.toggle-icon i');
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                const icon = item.querySelector('.toggle-icon i');
                if (item.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
    }

    // Testimonial Slider
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentTestimonial = 0;

    if (testimonialItems.length > 0) {
        // Hide all testimonials except the first one
        testimonialItems.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none';
            }
        });

        // Previous button click
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                testimonialItems[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
                testimonialItems[currentTestimonial].style.display = 'block';
            });
        }

        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                testimonialItems[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
                testimonialItems[currentTestimonial].style.display = 'block';
            });
        }

        // Auto slide testimonials every 5 seconds
        setInterval(() => {
            if (nextBtn) {
                nextBtn.click();
            }
        }, 5000);
    }

    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Header on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.padding = '0.7rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'var(--white)';
        }
    });

    // Form Validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const formInputs = bookingForm.querySelectorAll('input, select, textarea');
            
            formInputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--danger)';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                // Show success message (in a real application, you would send the form data to a server)
                const formContainer = bookingForm.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Appointment Booked Successfully!</h3>
                    <p>Thank you for booking an appointment with HousePhysio. We will confirm your appointment shortly via email or phone.</p>
                `;
                
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
                
                // Style success message
                const styles = document.createElement('style');
                styles.innerHTML = `
                    .success-message {
                        text-align: center;
                        padding: 2rem;
                    }
                    .success-icon {
                        font-size: 4rem;
                        color: var(--success);
                        margin-bottom: 1rem;
                    }
                    .success-message h3 {
                        margin-bottom: 1rem;
                    }
                `;
                document.head.appendChild(styles);
            }
        });
    }

    // Newsletter Form Validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailInput.value)) {
                emailInput.style.borderColor = 'var(--danger)';
                return;
            }
            
            // Show subscribed message
            const newsletterContent = document.querySelector('.newsletter-content');
            newsletterContent.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Thank You for Subscribing!</h2>
                <p>You have successfully subscribed to our newsletter. Stay tuned for health tips and updates.</p>
            `;
        });
    }

    // Animate on Scroll (simple implementation)
    const animateElements = document.querySelectorAll('.service-card, .team-card, .about-content, .section-header');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (elementPosition.top < windowHeight * 0.9) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    // Check elements on load and scroll
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);
}); 