# PQNQ 레스토랑 - 미니멀 키친

pqnq.kr 도메인을 위한 미니멀하고 예술적인 레스토랑 랜딩 페이지입니다.

## 🚀 배포 정보

- **Vercel**: 정적 웹사이트 호스팅
- **GitHub**: 소스 코드 관리
- **도메인**: pqnq.kr

## 📁 프로젝트 구조

```
pqnq-restaurant/
├── index.html              # 메인 HTML 파일
├── styles.css              # 스타일시트
├── script.js               # 메인 애플리케이션 로직
├── vercel.json             # Vercel 배포 설정
├── components/             # 모듈화된 컴포넌트 폴더
│   ├── index.js           # 컴포넌트 export 파일
│   ├── Navigation.js      # 내비게이션 컴포넌트
│   ├── Hero.js            # 히어로 섹션 컴포넌트
│   ├── BrandStory.js      # 브랜드 스토리 컴포넌트
│   ├── Standards.js       # 기준 섹션 컴포넌트
│   ├── Contact.js         # 연락처 컴포넌트
│   └── Footer.js          # 푸터 컴포넌트
└── README.md               # 프로젝트 설명
```

## 🎨 주요 기능

- **포스트모던 디자인**: 잡지 스타일의 여백과 타이포그래피
- **모듈화된 컴포넌트**: 각 섹션을 별도 파일로 관리
- **완벽한 반응형 레이아웃**: 데스크톱, 태블릿, 모바일 최적화
- **부드러운 스크롤 애니메이션**: 페이드인 효과와 인터랙션
- **브랜드 스토리**: PQNQ의 철학과 비전 담은 콘텐츠

## 🧩 컴포넌트 구조

### Navigation
- 고정 헤더 내비게이션
- 모바일 반응형 메뉴
- 부드러운 스크롤

### Hero
- PQNQ 브랜드 타이틀
- 1:1:1 비율 컨셉
- 슬로우 쿠킹 철학

### BrandStory
- '먹는 것'이 곧 '살아가는 것'이기에
- 어머니의 뒷모습에서 배운 음식 무게
- 프랑스 음식문화와 Grass-fed 재료

### Standards
- Low Glycemic & Anti-Inflammatory
- The 1:1:1 Rule
- Pure & Real Food

### Contact
- 위치 정보와 비전
- 강남구 주소
- 미래 연구 선언

## 📱 접속

- **GitHub Pages**: https://tongtongfather.github.io/pqnq-web
- **Vercel**: 배포 후 주소 확인

## 🔧 컴포넌트 관리

각 섹션은 별도의 파일로 분리되어 관리가 용이합니다:

```javascript
// 컴포넌트 사용 예시
const hero = new Hero();
const heroHTML = hero.render();
```

© 2024 PQNQ. All rights reserved.
