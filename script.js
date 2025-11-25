// Portfolio Interactive Animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.project-item, .text, .skill-category-title, .divider');
    animateElements.forEach(function(el) {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Typing effect for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(function(title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.visibility = 'visible';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 300);
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.social-link, .nav-link');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });

    // Parallax effect for background
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.scrollY;
                document.body.style.backgroundPosition = '0 ' + (scrolled * 0.1) + 'px';
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add stagger animation to skill text items
    const skillTexts = document.querySelectorAll('#skills .text');
    skillTexts.forEach(function(text, index) {
        text.style.animationDelay = (0.1 * (index + 1)) + 's';
    });

    // Footer icons bounce on page load
    const footerIcons = document.querySelectorAll('.footer-icons a');
    footerIcons.forEach(function(icon, index) {
        setTimeout(function() {
            icon.style.animation = 'bounceIn 0.5s ease forwards';
        }, 100 * (index + 1));
    });
});
