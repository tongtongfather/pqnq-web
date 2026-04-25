// Standards Section Component
class Standards {
    render() {
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
}

export default Standards;
