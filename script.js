// Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!email || !message) {
            alert('Bitte füllen Sie alle erforderlichen Felder aus.');
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }

        // Log form data (in production, this would be sent to a server)
        console.log('Formular Daten:', {
            name,
            email,
            phone,
            message,
            timestamp: new Date().toLocaleString('de-DE')
        });

        // Show success message
        alert('Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir werden Sie bald kontaktieren.');

        // Reset form
        contactForm.reset();

        // In production, you would send this data to your backend
        // Example with fetch:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, phone, message })
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch((error) => console.error('Error:', error));
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            // Link is valid, smooth scroll is handled by CSS
            // This code prevents default and manually handles for better compatibility
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            document.querySelectorAll('.nav a').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and feature cards for animation
document.querySelectorAll('section, .feature, .review-card').forEach(element => {
    observer.observe(element);
});

// Mobile menu toggle (if you add a mobile menu icon)
// This is a placeholder for future mobile menu functionality
const toggleMobileMenu = () => {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('mobile-open');
    }
};

// Log page load
console.log('Hannes Bio Honig Website geladen');
console.log('Telefon: +49 (0) 176 45765373');
console.log('E-Mail: ytneojulian@gmail.com');
