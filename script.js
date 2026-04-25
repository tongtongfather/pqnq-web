// Import modular components
// Note: In a real ES6 module environment, you would use:
// import { Hero, BrandStory, Standards, Contact, Navigation, Footer } from './components/index.js';
// For now, we'll simulate the component structure

// Component-based structure mimicking React with modular components
class App {
    constructor() {
        this.state = {
            isMobileMenuOpen: false,
            isScrolled: false
        };
        this.components = {
            Navigation: new Navigation(),
            Hero: new Hero(),
            BrandStory: new BrandStory(),
            Standards: new Standards(),
            Contact: new Contact(),
            Footer: new Footer()
        };
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupFadeInAnimations();
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            ${this.components.Navigation.render()}
            ${this.components.Hero.render()}
            ${this.components.BrandStory.render()}
            ${this.components.Standards.render()}
            ${this.components.Contact.render()}
            ${this.components.Footer.render()}
        `;
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.getElementById('navLinks');

        if (mobileMenuToggle && navLinks) {
            mobileMenuToggle.addEventListener('click', () => {
                this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
                navLinks.classList.toggle('active');
                
                // Animate hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                if (this.state.isMobileMenuOpen) {
                    spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (this.state.isMobileMenuOpen) {
                        this.state.isMobileMenuOpen = false;
                        navLinks.classList.remove('active');
                        const spans = mobileMenuToggle.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                }
            });
        });

        // Add hover effects to menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-4px)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
            });
        });
    }

    setupScrollEffects() {
        const navigation = document.getElementById('navigation');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 50;
            
            if (scrolled !== this.state.isScrolled) {
                this.state.isScrolled = scrolled;
                
                if (navigation) {
                    if (scrolled) {
                        navigation.style.background = 'rgba(255, 255, 255, 0.98)';
                        navigation.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                    } else {
                        navigation.style.background = 'rgba(255, 255, 255, 0.95)';
                        navigation.style.boxShadow = 'none';
                    }
                }
            }

            // Reveal animations on scroll
            this.handleScrollAnimations();
        });
    }

    handleScrollAnimations() {
        const elements = document.querySelectorAll('.menu-item, .about-text, .contact-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize scroll animations
    setupFadeInAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 1s ease';
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 100);
                }
            });
        }, observerOptions);

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});

