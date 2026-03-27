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
│   ├── meeting.html       
│   ├── kspe.html
│   ├── conference.html     
│   └── launch.html 
├── resources/           
│   └── index.html          # 하위 HTML 파일
├── partnership/               
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
│   │   ├── nura-logo.png   # 메인 로고
│   │   ├── favicon-32x32.png # 파비콘 (32x32)
│   │   ├── favicon-16x16.png # 파비콘 (16x16)
│   │   ├── notion-blur.png # 노션 배경 이미지
│   │   ├── onedrive-blur.png # 원드라이브 배경 이미지
│   │   ├── nura-header.png # 헤더 이미지
│   │   ├── nura-icon.png   # 로고
│   │   ├── structure.png   # 내부 구조 이미지
│   │   ├── meeting.png     # 대표자 회의 배경 이미지
│   │   ├── kspe.png        # 추진공학회 배경 이미지
│   │   ├── conference.png  # 학술대회 배경 이미지
│   │   └── launch.png      # 발사대회 배경 이미지
│   ├── partnership/        # 후원사 로고들
│   │   ├── koreanair.png
│   │   ├── innospace.png
│   │   ├── kari.jpg
│   │   └── ligpoongsan.png
│   └── news/               # 뉴스 사진들
│       ├── news1.jpg
│       ├── news2.jpg
│       └── news3.jpg
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

### 1) `data/shared-layout.js`
공통 레이아웃 파일입니다.

다음 요소를 담당합니다.

- 상단 헤더 렌더링
- 데스크톱/모바일 네비게이션
- Activities 드롭다운 메뉴
- 공통 푸터 렌더링
- 현재 페이지 강조 표시

각 HTML 파일의 `body`에는 아래 속성이 들어가 있어야 공통 네비게이션이 올바르게 동작합니다.

```html
<body data-current-page="overview" data-base-path=".">
```

하위 폴더 페이지에서는 보통 아래처럼 설정합니다.

```html
<body data-current-page="about" data-base-path="..">
```

### 2) `data/site-data.js`
반복적으로 렌더링되는 데이터 모음입니다.

현재 관리 항목:

- `overviewStats` : 메인 페이지 통계 카드
- `newsItems` : 메인 페이지 관련 기사 카드
- `resourceDocuments` : 자료실 문서 목록

즉, 숫자/뉴스/자료실 목록은 HTML 본문을 직접 수정하지 않아도 이 파일에서 갱신할 수 있습니다.

### 3) 각 페이지의 HTML 파일
페이지별 본문 콘텐츠는 각 HTML 파일 안에 직접 작성되어 있습니다.

- `index.html` : 메인 비주얼, 단체 소개, 뉴스, 통계, 파트너 섹션
- `about/index.html` : 연혁 타임라인 및 다이얼 UI
- `activities/index.html` : 활동 카드 목록
- `activities/*.html` : 활동별 상세 설명
- `partnership/index.html` : 협력 개요, 구조 소개, 문의 CTA
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

---

## 🛠️ 유지보수 가이드

### 1. 메인 페이지 숫자 카드 수정

`data/site-data.js`의 `overviewStats` 배열을 수정합니다.

```javascript
overviewStats: [
  {
    basis: "2026년 3월 기준",
    label: "참여 대학",
    value: 35,
    unit: "개교"
  }
]
```

### 2. 메인 페이지 기사 카드 수정

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

### 3. 자료실 목록 수정

`resources/index.html`은 `data/site-data.js`의 `resourceDocuments` 배열을 읽어서 목록을 생성합니다.

```javascript
resourceDocuments: [
  {
    date: "2026.03",
    title: "전국대학교로켓연합회 소개서",
    category: "소개서",
    format: "PDF",
    size: "8.2MB",
    description: "소개 자료 설명",
    href: "../source/resources/nura-profile.pdf"
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

### 4. 공통 네비게이션 수정

상단 메뉴, Activities 드롭다운, 푸터는 `data/shared-layout.js`에서 수정합니다.

수정 가능 항목 예시:

- 메뉴 이름
- 드롭다운 항목
- 링크 경로
- 모바일 메뉴 구조
- 상단바 스타일
- 푸터 문구

### 5. 활동 페이지 수정

활동 소개 페이지는 파일별로 직접 수정합니다.

- `activities/index.html` : Activities 목록 화면
- `activities/meeting.html` : 대표자 회의
- `activities/kspe.html` : 한국추진공학회 NURA 세션
- `activities/conference.html` : 전국대학교로켓학술대회
- `activities/launch.html` : 전국대학교로켓발사대회

### 6. About 연혁 수정

연혁 내용과 카드 구조는 `about/index.html` 내부에서 직접 수정합니다.  
이 페이지는 커스텀 다이얼/타임라인 UI를 사용하므로, 연도 카드 간격·다이얼 위치·스크롤 기준선을 바꿀 때는 CSS와 스크립트를 함께 확인하는 것이 좋습니다.

### 7. 새로운 후원사 추가
1. 로고 이미지를 `source/Partnership/` 폴더에 추가
2. `contentData.Partnership.Partnership` 배열에 정보 추가:
```javascript
{
  "name": "새로운 후원사",
  "logo": "source/Partnership/new-sponsor.png",
  "url": "https://new-sponsor.com",
  "ratio": 1.5  // 로고 가로세로 비율
}
```

### 파비콘 재생성
로고가 변경된 경우:
```bash
# Python 스크립트로 파비콘 생성
python -c "
from PIL import Image
img = Image.open('source/resources/nura-logo.png')
size = max(img.size)
favicon = Image.new('RGBA', (size, size), (0, 0, 0, 0))
x_offset = (size - img.size[0]) // 2
y_offset = (size - img.size[1]) // 2
favicon.paste(img, (x_offset, y_offset))
favicon.resize((32, 32)).save('source/resources/favicon-32x32.png')
favicon.resize((16, 16)).save('source/resources/favicon-16x16.png')
"
```

### 이미지 블러 처리
개요 슬라이드용 이미지를 블러 처리하려면:
```bash
# image_postprocessing.py 스크립트 실행
python image_postprocessing.py
```
스크립트는 `source/overview/` 폴더의 원본 이미지들을 블러 처리하여 `source/overview/blurred/` 폴더에 저장합니다.

## ⚠️ 주의사항

1. **이미지 최적화**: 웹용으로 이미지를 압축하여 로딩 속도를 개선하세요
2. **파일명**: 한글 파일명 사용을 피하고 영문으로 작성하세요
3. **백업**: 중요한 변경사항 전에 반드시 백업을 만드세요
4. **테스트**: 변경사항 적용 후 다양한 브라우저에서 테스트하세요

5. **파일 추가**: PDF 링크가 들어가 있지만, 실제 저장소의 `source/resources/` 안에는 해당 PDF 파일이 없을 수 있습니다.  
버튼이 정상 동작하려면 아래 둘 중 하나가 필요합니다.
- 실제 PDF 파일을 해당 경로에 추가
- `href`를 외부 문서 링크로 변경

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

**마지막 업데이트**: 2026년 03월

**관리자**: 전현우(jhw030520@gmail.com), 심승기(shimseunggi@naver.com)
