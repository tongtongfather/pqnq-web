// Navigation Component
class Navigation {
    render() {
        return `
            <nav class="nav" id="navigation">
                <div class="container">
                    <div class="nav-content">
                        <div class="logo">PQNQ</div>
                        <ul class="nav-links" id="navLinks">
                            <li><a href="#home" class="nav-link">홈</a></li>
                            <li><a href="#brand-story" class="nav-link">스토리</a></li>
                            <li><a href="#standards" class="nav-link">기준</a></li>
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
}

export default Navigation;
