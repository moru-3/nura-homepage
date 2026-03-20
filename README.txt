# NURA 공통 레이아웃 분리본 (전체 묶음)

이 묶음은 상단 네비게이션 / 모바일 메뉴 / 푸터를 partial로 분리하고, 공통 동작을 layout.js로 묶은 전체 구조입니다.

## 포함 페이지
- index.html (Overview)
- about/index.html
- activities/index.html
- activities/conference.html
- activities/launch.html
- partnership/index.html
- resources/index.html

## 공통 파일
- partials/header.html
- partials/footer.html
- assets/css/common.css
- assets/js/layout.js

## 구조 특징
- 각 페이지는 data-root, data-page만 다르게 둡니다.
- 현재 페이지 활성화, 모바일 메뉴, Activities 서브메뉴, 스크롤 blur는 assets/js/layout.js 하나에서 처리합니다.
- 공통 반복 구간은 partials에서만 수정하면 전체 페이지에 반영됩니다.

## 실행 방법
이 구조는 fetch()로 partial을 읽기 때문에 file:// 방식으로 직접 열면 동작하지 않습니다.
반드시 아래 중 하나로 실행하세요.
- VS Code Live Server
- python -m http.server
- GitHub Pages / Netlify / Vercel
