# NURA 홈페이지

전국대학교로켓연합회(NURA) 공식 홈페이지입니다.

## 📁 프로젝트 구조

```
nura-homepage/
├── index.html              # 메인 HTML 파일
├── README.md               # 이 문서
├── image_postprocessing.py # 이미지 후처리 스크립트 (선택사항)
├── about/                
│   └── index.html          # 하위 HTML 파일
├── activities/
│   ├── index.html          # 하위 HTML 파일
│   ├── meeting/
│   │   └── index.html
│   ├── kspe/
│   │   └── index.html
│   ├── conference/
│   │   └── index.html
│   └── launch/
│       └── index.html
├── resources/           
│   └── index.html          # 하위 HTML 파일
├── partnership/               
│   └── index.html          # 하위 HTML 파일
├── members/               
│   └── index.html          # 하위 HTML 파일
├── data/               
│   ├── shared-layout.js    # 헤더, 푸터
│   └── site-data.js        # 각종 변수
├── source/
│   ├── overview/           # 개요 섹션 이미지
│   │   ├── blurred/        # 블러 처리된 슬라이드 이미지
│   │   │   └── [블러 처리된 이미지들]
│   │   └── [원본 이미지들]
│   ├── resources/          # 리소스 파일들
│   │   ├── nura-header.png # 헤더 로고 이미지
│   │   ├── nura-icon.png   # 앱 아이콘 및 터치 아이콘
│   │   ├── favicon-32x32.png # 파비콘 (32x32)
│   │   ├── favicon-16x16.png # 파비콘 (16x16)
│   │   ├── structure.png   # 내부 구조 이미지
│   │   ├── NURA_AI.ai      # CI 가이드라인 파일
│   │   ├── 2026 전국대학교로켓학술대회 규정_260402.pdf
│   │   ├── 2026 전국대학교로켓발사대회 규정집_260403.pdf
│   │   ├── meeting.jpg     # 대표자 회의 배경 이미지
│   │   ├── kspe.jpg        # 추진공학회 배경 이미지
│   │   ├── conference.jpg  # 학술대회 배경 이미지
│   │   └── launch.jpg      # 발사대회 배경 이미지
│   ├── partnership/        # 후원사 로고들
│   │   ├── koreanair.png
│   │   ├── innospace.png
│   │   ├── kari.jpg
│   │   ├── kasa.png
│   │   └── ligpoongsan.png
│   ├── members/            # 회원 대학 지도 및 로고
│   │   ├── south-korea.svg
│   │   └── used-logos/
│   │       └── [회원 대학 로고들]
│   └── news/               # 뉴스 사진들
│       ├── news1.jpg
│       ├── news2.jpg
│       └── news3.jpg
├── robots.txt
├── sitemap.xml             # 사이트맵
├── [네이버 인증 파일]          # 네이버 사이트 인증 파일
└── venv/                   # Python 가상환경 (선택사항)
```

## 🚀 시작하기

### 기본 실행
정적 사이트이므로 프로젝트 루트에서 간단한 로컬 서버를 띄우면 됩니다.

```bash
python -m http.server 8000
```

이후 브라우저에서 아래 주소를 열면 됩니다.

```text
http://localhost:8000
```

### 그냥 HTML 파일을 직접 열어도 되나요?
가능한 경우도 있지만, 상대 경로·링크·이미지 확인을 안정적으로 하려면 **로컬 서버 방식**을 권장합니다.

### 개발 환경 설정 (선택사항)
```bash
# Python 가상환경 활성화
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux

# 필요한 패키지 설치
pip install Pillow
```

---

## 📁 핵심 파일 설명

### `data/shared-layout.js`
공통 레이아웃 파일입니다.

다음 요소를 담당합니다.

- 상단 헤더 렌더링
- 데스크톱/모바일 네비게이션
- Activities 드롭다운 메뉴
- 모바일 메뉴 열림/닫힘 및 스크롤 잠금
- 공통 푸터 렌더링
- 현재 페이지 강조 표시

각 HTML 파일의 `body`에는 아래 속성이 들어가 있어야 공통 네비게이션이 올바르게 동작합니다.

```html
<body data-current-page="home" data-base-path=".">
```

하위 폴더 페이지에서는 보통 아래처럼 설정합니다.

```html
<body data-current-page="about" data-base-path="..">
```

### `data/site-data.js`
반복적으로 렌더링되는 데이터 모음입니다.

현재 관리 항목:

- `overviewStats` : 메인 페이지 통계 카드
- `newsItems` : 메인 페이지 관련 기사 카드
- `resourceDocuments` : 자료실 문서 목록
- `historyData` : 연혁 문서 목록
- `memberOrganizations` : 회원 대학/동아리 목록
- `memberRegions` : 세부 권역 정의

즉, 숫자/뉴스/자료실 목록은 HTML 본문을 직접 수정하지 않아도 이 파일에서 갱신할 수 있습니다.

### 각 페이지의 HTML 파일
페이지별 본문 콘텐츠는 각 HTML 파일 안에 직접 작성되어 있습니다.

- `index.html` : 메인 비주얼, 단체 소개, 뉴스, 통계, 파트너 섹션
- `about/index.html` : 연혁 타임라인 및 다이얼 UI
- `activities/index.html` : 활동 카드 목록
- `activities/*/index.html` : 활동별 상세 설명
- `partnership/index.html` : 협력 개요, 후원 안내, 계좌 안내, 문의 CTA
- `members/index.html` : 지도 기반 권역별 회원 대학 소개 및 로고 월
- `resources/index.html` : 자료 목록 렌더링 화면

---

## 🎨 디자인 커스터마이징

### 색상 변경
Tailwind CSS 클래스를 사용하여 색상을 변경할 수 있습니다:

- 메인 색상: `text-blue-400`, `bg-blue-600`
- 배경색: `bg-black`, `bg-gray-900`
- 텍스트 색상: `text-white`, `text-gray-300`

### 커스터마이징
이 프로젝트는 Tailwind CDN 기반이지만, 실제로는 다음 두 방식이 함께 사용됩니다.

- HTML 내 Tailwind 유틸리티 클래스
- 각 페이지 내부 `<style>` 블록의 커스텀 CSS

따라서 디자인 수정 시 아래 순서로 확인하는 것이 좋습니다.

1. HTML 클래스 값 확인
2. 페이지 내부 `<style>` 확인
3. 공통 요소면 `data/shared-layout.js` 확인

특히 아래 항목은 페이지마다 직접 스타일이 들어가 있습니다.

- 히어로 영역 높이/여백
- 타임라인 카드
- 활동 카드
- 드롭다운 메뉴
- 모바일 메뉴
- 회원 대학 지도/로고 영역
- 후원 안내 카드와 계좌 팝오버

---

## 🛠️ 유지보수 가이드

### 메인 페이지 숫자 카드 수정

`data/site-data.js`의 `overviewStats` 배열을 수정합니다.

```javascript
overviewStats: [
  {
    basis: "2026년 4월 기준",
    label: "참여 대학",
    value: 37,
    unit: "개교"
  }
]
```

### 메인 페이지 기사 카드 수정

`data/site-data.js`의 `newsItems` 배열을 수정합니다.

```javascript
newsItems: [
  {
    date: "2024.07.08",
    title: "기사 제목",
    summary: "기사 요약",
    image: "source/news/news1.jpg",
    href: "https://..."
  }
]
```

### 자료실 목록 수정

`resources/index.html`은 `data/site-data.js`의 `resourceDocuments` 배열을 읽어서 목록을 생성합니다.

```javascript
resourceDocuments: [
  {
    date: "2026.04",
    title: "2026 전국대학교로켓학술대회 규정",
    category: "Conference",
    format: "pdf",
    size: "491KB",
    description: "2026 전국대학교로켓학술대회 규정입니다.",
    href: "../source/resources/2026 전국대학교로켓학술대회 규정_260402.pdf"
  }
]
```

업로드 예정 상태로 표시하고 싶다면:

```javascript
{
  title: "활동 브로슈어",
  category: "Brochure",
  format: "PDF",
  status: "coming-soon"
}
```

### 연혁 목록 수정

`about/index.html`은 `data/site-data.js`의 `historyData` 배열을 읽어서 목록을 생성합니다.

```javascript
historyData: [
  {
    year: 1992,
    featured: true,
    items: ["제1회 로켓발사대회(한국항공대학교)"]
  }
]
```

### 회원 대학 데이터 수정

예시:

```javascript
memberOrganizations: [
  {
    name: "전북대학교",
    region: "jeonbuk",
    clubName: "JURG",
    description: "전북특별자치도 전주시 덕진구 백제대로 567",
    instagramHandle: "@jbnu_ohcket"
  }
]
```

`region` 값은 `memberRegions`의 `id`와 일치해야 합니다.

회원 대학 카드와 로고 월의 외부 링크는 아래 순서로 사용됩니다.

1. `instagramHandle`
2. `website`

로고 이미지는 `members/index.html`의 `memberLogoPathByName` 객체에서 학교명과 파일 경로를 연결합니다.

```javascript
memberRegions: [
  {
    id: "jeonbuk",
    name: "전북",
    coverage: "전북특별자치도",
    description: "전북 지역에 속한 회원 대학과 로켓 동아리 현황입니다."
  }
]
```

### 공통 네비게이션 수정

상단 메뉴, Activities 드롭다운, 푸터는 `data/shared-layout.js`에서 수정합니다.

수정 가능 항목 예시:

- 메뉴 이름
- 드롭다운 항목
- 링크 경로
- 모바일 메뉴 구조
- 상단바 스타일
- 푸터 문구

### 활동 페이지 수정

활동 소개 페이지는 파일별로 직접 수정합니다.

- `activities/index.html` : Activities 목록 화면
- `activities/meeting/index.html` : 대표자 회의
- `activities/kspe/index.html` : 한국추진공학회 NURA 세션
- `activities/conference/index.html` : 전국대학교로켓학술대회
- `activities/launch/index.html` : 전국대학교로켓발사대회

### 새로운 후원사 추가

1. 로고 이미지를 `source/partnership/` 폴더에 추가
2. `index.html`의 파트너 로고 영역에 이미지와 링크 추가
3. 필요하면 `source/partnership/` 아래 기존 로고 비율에 맞게 이미지를 정리

현재 사용 중인 후원사 로고 파일:

- `koreanair.png`
- `innospace.png`
- `kari.jpg`
- `kasa.png`
- `ligpoongsan.png`

### 후원 안내 수정

후원 방식, 후원 효과, 계좌 안내는 `partnership/index.html`에서 직접 수정합니다.

계좌 정보는 후원 안내 문장 안의 계좌 팝오버와 하단 CTA 영역에 들어가 있으므로, 변경 시 두 위치를 함께 확인하는 것이 좋습니다.

### 파비콘 재생성
로고가 변경된 경우:
```bash
# Python 스크립트로 파비콘 생성
python -c "
from PIL import Image
img = Image.open('source/resources/nura-icon.png')
size = max(img.size)
favicon = Image.new('RGBA', (size, size), (0, 0, 0, 0))
x_offset = (size - img.size[0]) // 2
y_offset = (size - img.size[1]) // 2
favicon.paste(img, (x_offset, y_offset))
favicon.resize((32, 32)).save('source/resources/favicon-32x32.png')
favicon.resize((16, 16)).save('source/resources/favicon-16x16.png')
"
```

### SEO 정보 수정

각 HTML 파일의 `<head>`에는 기본 SEO 정보가 들어가 있습니다.

수정 대상 예시:

- `<title>`
- `<meta name="description">`
- `og:title`
- `og:description`
- 파비콘 및 터치 아이콘 링크

네이버 사이트 인증 파일은 `naver489cbd41cbce3895ff5c2fbf7e61e54c.html`입니다. 인증 파일명은 검색 콘솔에서 발급된 값과 일치해야 합니다.

### 이미지 블러 처리
개요 슬라이드용 이미지를 블러 처리하려면:
```bash
# image_postprocessing.py 스크립트 실행
python image_postprocessing.py
```
스크립트는 `source/overview/` 폴더의 원본 이미지들을 블러 처리하여 `source/overview/blurred/` 폴더에 저장합니다.

## ⚠️ 주의사항

1. **이미지 최적화**: 웹용으로 이미지를 압축하여 로딩 속도를 개선하세요
2. **파일명**: 새 이미지 파일명은 가능하면 영문으로 작성하세요
3. **백업**: 중요한 변경사항 전에 반드시 백업을 만드세요
4. **테스트**: 변경사항 적용 후 다양한 브라우저에서 테스트하세요
5. **자료 링크**: `resourceDocuments`에 `href`를 추가한 경우 실제 파일이 있는지 함께 확인하세요
6. **모바일 확인**: 헤더, 모바일 메뉴, 회원 지도, 후원 안내는 모바일에서 반드시 다시 확인하세요

## 🔄 배포

### 자동 배포
- **클라우드플레어 스토리지** 기반으로 호스팅됩니다
- Git 저장소에 푸시하면 자동으로 배포됩니다
- 별도의 배포 설정이 필요하지 않습니다

### 배포 과정
1. 로컬에서 변경사항을 Git에 커밋
2. `git push` 명령으로 원격 저장소에 푸시
3. 자동으로 클라우드플레어 스토리지에 반영
4. 웹사이트가 즉시 업데이트됩니다

---

**마지막 업데이트**: 2026년 04월
- **현재 관리자**: 심승기(shimseunggi@naver.com)
- **기여자**: 전현우(jhw030520@gmail.com), 심승기(shimseunggi@naver.com)
