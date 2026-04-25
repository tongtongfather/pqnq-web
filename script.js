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
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            ${this.renderNavigation()}
            ${this.renderHero()}
            ${this.renderAbout()}
            ${this.renderMenu()}
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
                        <h1 class="hero-title">PQNQ</h1>
                        <p class="hero-subtitle">미니멀리즘과 맛의 조화</p>
                        <a href="#menu" class="hero-cta">메뉴 보기</a>
                    </div>
                </div>
            </section>
        `;
    }

    renderAbout() {
        return `
            <section class="section about" id="about">
                <div class="container">
                    <h2 class="section-title">PQNQ 이야기</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <p>PQNQ는 최소한의 공간과 최대한의 맛을 추구하는 미니멀 키친입니다.</p>
                            <br>
                            <p>우리는 불필요한 것을 제거하고 음식의 본질에 집중합니다. 신선한 재료, 정성스러운 조리, 그리고 완벽한 밸런스. 이것이 PQNQ의 철학입니다.</p>
                            <br>
                            <p>모든 요리는 예술 작품처럼 정성껏 준비되며, 여러분의 식사 경험을 특별하게 만들어 드립니다.</p>
                        </div>
                        <div class="about-image"></div>
                    </div>
                </div>
            </section>
        `;
    }

    renderMenu() {
        const menuItems = [
            {
                name: "시그니처 덮밥",
                description: "신선한 채소와 완벽하게 조리된 밥의 조화",
                price: "₩28,000"
            },
            {
                name: "미니멀 파스타",
                description: "최소한의 재료로 만든 최상의 맛",
                price: "₩32,000"
            },
            {
                name: "순수 스테이크",
                description: "육질의 본질을 살린 미디엄 레어",
                price: "₩48,000"
            },
            {
                name: "정원 샐러드",
                description: "계절의 신선함을 그대로 담아",
                price: "₩18,000"
            },
            {
                name: "디저트 플레이트",
                description: "미니멀한 디자인과 깊은 맛의 만남",
                price: "₩15,000"
            },
            {
                name: "스페셜 코스",
                description: "셰프가 정성껏 준비한 7가지 요리",
                price: "₩85,000"
            }
        ];

        return `
            <section class="section menu" id="menu">
                <div class="container">
                    <h2 class="section-title">메뉴</h2>
                    <div class="menu-grid">
                        ${menuItems.map(item => `
                            <div class="menu-item">
                                <h3 class="menu-item-name">${item.name}</h3>
                                <p class="menu-item-description">${item.description}</p>
                                <p class="menu-item-price">${item.price}</p>
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
                    <h2 class="section-title contact-title">찾아오시는 길</h2>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-label">주소</span>
                            <span class="contact-value">서울시 강남구 테헤란로 123</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">전화</span>
                            <span class="contact-value">02-1234-5678</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">영업시간</span>
                            <span class="contact-value">11:30 - 22:00</span>
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
    initializeAnimations() {
        const elements = document.querySelectorAll('.menu-item, .about-text, .contact-item');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.initializeAnimations();
});

// Add intersection observer for better performance
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

// Start observing after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .about-text, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
