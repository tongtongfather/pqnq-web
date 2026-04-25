// Component-based structure mimicking React
class App {
    constructor() {
        this.state = {
            isMobileMenuOpen: false,
            isScrolled: false
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
            ${this.renderNavigation()}
            ${this.renderHero()}
            ${this.renderBrandStory()}
            ${this.renderStandards()}
            ${this.renderContact()}
            ${this.renderFooter()}
        `;
    }

    renderNavigation() {
        return `
            <nav class="nav" id="navigation">
                <div class="container">
                    <div class="nav-content">
                        <div class="logo">PQNQ</div>
                        <ul class="nav-links" id="navLinks">
                            <li><a href="#home" class="nav-link">홈</a></li>
                            <li><a href="#about" class="nav-link">소개</a></li>
                            <li><a href="#menu" class="nav-link">메뉴</a></li>
                            <li><a href="#contact" class="nav-link">연락처</a></li>
                        </ul>
                        <button class="mobile-menu-toggle" id="mobileMenuToggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }

    renderHero() {
        return `
            <section class="hero" id="home">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title brand-title fade-in">PQNQ</h1>
                        <p class="hero-subtitle brand-subtitle fade-in">Piquenique Bistro</p>
                        <p class="hero-subtitle brand-subtitle fade-in">1:1:1, 건강한 삶을 위한 가장 정직한 비율.</p>
                        <div class="hero-concept fade-in">
                            맛을 위해 건강을 타협하지 않는 '슬로우 쿠킹'
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderBrandStory() {
        return `
            <section class="section brand-story" id="brand-story">
                <div class="container">
                    <div class="brand-story-content">
                        <h2 class="section-title fade-in">'먹는 것'이 곧 '살아가는 것'이기에.</h2>
                        <div class="brand-story-text body-text fade-in">
                            <p>식당을 운영하며 저희를 키워내신 어머니의 뒷모습에서 음식의 무게를 배웠습니다.</p>
                            <br>
                            <p>프랑스에서 생활하며 배운 음식문화를 바탕으로 마가린과 씨앗 오일을 배제하고, 올리브오일과 풀을 먹고 자란(Grass-fed) 버터와 유제품을 사용합니다.</p>
                            <br>
                            <p>저온 조리로 조리과정에서 생기는 독소물질을 최소화합니다.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderStandards() {
        const standards = [
            {
                title: "Low Glycemic & Anti-Inflammatory",
                description: "혈당을 천천히 올리는 쿠스쿠스와 알룰로스 사용, 항염 작용을 돕는 심혈관 친화적 식재료 연구."
            },
            {
                title: "The 1:1:1 Rule",
                description: "당뇨 환자 식단에서 착안한 곡물, 채소, 단백질의 황금 비율."
            },
            {
                title: "Pure & Real Food",
                description: "직접 만든 스프와 카레, 정직한 소스와 재료."
            }
        ];

        return `
            <section class="section standards" id="standards">
                <div class="container">
                    <h2 class="section-title fade-in">PQNQ의 기준</h2>
                    <div class="standards-grid">
                        ${standards.map((standard, index) => `
                            <div class="standard-card fade-in" style="animation-delay: ${index * 0.2}s">
                                <h3 class="standard-title">${standard.title}</h3>
                                <p class="standard-description">${standard.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderContact() {
        return `
            <section class="section contact" id="contact">
                <div class="container">
                    <div class="contact-content">
                        <h2 class="contact-title fade-in">Location & Contact</h2>
                        <div class="contact-address fade-in">
                            서울특별시 강남구 강남대로48길 6, 1층 (피끄니크비스트로)
                        </div>
                        <div class="contact-vision fade-in">
                            "우리는 더 건강한 미래를 연구합니다. 이제 온라인에서도 PQNQ의 철학을 만나보세요."
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderFooter() {
        return `
            <footer class="footer">
                <div class="container">
                    <p class="footer-text">© 2024 PQNQ. All rights reserved.</p>
                </div>
            </footer>
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

