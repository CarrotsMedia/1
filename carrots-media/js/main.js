/**
 * Main JavaScript File
 * Handles Navigation, Mobile Menu, and Scroll Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate hamburger to X
            const spans = mobileBtn.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
        });
    }

    // Smooth Scroll for Anchor Links (with offset for sticky header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset hamburger
                const spans = mobileBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar Scroll Effect (blur/transparency adjustment)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    console.log('Carrots Media Site Initiated 🥕');
});
