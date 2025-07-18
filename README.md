# NURA 홈페이지

전국대학교로켓연합회(NURA) 공식 홈페이지입니다.

## 📁 프로젝트 구조

```
nura-homepage/
├── index.html              # 메인 HTML 파일
├── README.md               # 이 문서
├── image_postprocessing.py # 이미지 후처리 스크립트 (선택사항)
├── source/
│   ├── overview/           # 개요 섹션 이미지
│   │   ├── blurred/        # 블러 처리된 슬라이드 이미지
│   │   │   ├── slide1.jpg
│   │   │   ├── slide2.jpg
│   │   │   └── slide3.jpg
│   │   └── [원본 이미지들]
│   ├── resources/          # 리소스 파일들
│   │   ├── nura-logo.png   # 메인 로고
│   │   ├── favicon-32x32.png # 파비콘 (32x32)
│   │   ├── favicon-16x16.png # 파비콘 (16x16)
│   │   ├── notion-blur.png # 노션 배경 이미지
│   │   └── onedrive-blur.png # 원드라이브 배경 이미지
│   └── sponsors/           # 후원사 로고들
│       ├── koreanair.png
│       ├── innospace.png
│       ├── kari.jpg
│       └── ligpoongsan.png
└── venv/                   # Python 가상환경 (선택사항)
```

## 🚀 시작하기

### 기본 실행
1. `index.html` 파일을 웹 브라우저에서 열기
2. 로컬 서버 없이도 정상 작동합니다

### 개발 환경 설정 (선택사항)
```bash
# Python 가상환경 활성화
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux

# 필요한 패키지 설치
pip install Pillow
```

## 📝 콘텐츠 관리

### 1. 텍스트 콘텐츠 수정
모든 텍스트 콘텐츠는 `index.html` 파일 내의 `contentData` 객체에서 관리됩니다.

```javascript
const contentData = {
  "overview": {
    "title": "전국대학교로켓연합회",
    "subtitle": "The National Universities' Rocket Association",
    "description": "로켓 기술 교류를 촉진하고 대학생들의 발사 활동을 지원합니다."
  },
  // ... 기타 섹션들
};
```

#### 수정 가능한 섹션들:
- **overview**: 메인 화면 제목과 설명
- **about**: 단체 소개
- **activities**: 주요 활동 (카테고리별로 구성)
- **sponsors**: 후원사 정보
- **resources**: 자료실 링크
- **footer**: 푸터 정보 (연락처, 사업자 정보 등)

### 2. 이미지 교체

#### 개요 슬라이드 이미지
- 위치: `source/overview/blurred/`
- 파일명: `slide1.jpg`, `slide2.jpg`, `slide3.jpg`
- 권장 크기: 1920x1080 이상
- **중요**: 블러 처리된 이미지를 사용해야 합니다
- **블러 처리**: `image_postprocessing.py` 스크립트를 사용하여 원본 이미지를 블러 처리할 수 있습니다
- **파일 형식**: JPG, PNG 등 웹 호환 형식 사용 (HEIC, TIFF 등은 피하기)

#### 로고 및 파비콘
- 메인 로고: `source/resources/nura-logo.png`
- 파비콘: `source/resources/favicon-32x32.png`, `favicon-16x16.png`
- **파일 형식**: PNG 권장 (투명 배경 지원)

#### 후원사 로고
- 위치: `source/sponsors/`
- 권장 크기: 300x150px (2:1 직사각형 비율)
- 투명 배경 권장
- **파일 형식**: JPG, PNG, GIF 등 웹 호환 형식 사용 (HEIC, TIFF 등은 피하기)

### 3. 링크 수정

#### 자료실 링크
```javascript
"resources": {
  "gallery": {
    "url": "https://onedrive.live.com/your-shared-gallery-link"
  },
  "document": {
    "url": "https://www.notion.so/nura/NURA-Resources"
  }
}
```

#### 후원사 링크
```javascript
"sponsors": {
  "sponsors": [
    {
      "name": "대한항공",
      "url": "https://www.koreanair.com"
    }
  ]
}
```

## 🎨 디자인 커스터마이징

### 색상 변경
Tailwind CSS 클래스를 사용하여 색상을 변경할 수 있습니다:

- 메인 색상: `text-blue-400`, `bg-blue-600`
- 배경색: `bg-gray-950`, `bg-gray-900`
- 텍스트 색상: `text-white`, `text-gray-300`

### 레이아웃 수정
- 사이드바 너비: `w-44` (176px)
- 섹션 패딩: `py-20`
- 반응형 그리드: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

## 🛠️ 유지보수 가이드

### 새로운 후원사 추가
1. 로고 이미지를 `source/sponsors/` 폴더에 추가
2. `contentData.sponsors.sponsors` 배열에 정보 추가:
```javascript
{
  "name": "새로운 후원사",
  "logo": "source/sponsors/new-sponsor.png",
  "url": "https://new-sponsor.com",
  "ratio": 1.5  // 로고 가로세로 비율
}
```

### 새로운 활동 카테고리 추가
1. `contentData.activities.categories` 배열에 추가:
```javascript
{
  "title": "새로운 활동",
  "items": [
    "활동 내용 1",
    "활동 내용 2"
  ]
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

## 📞 연락처 정보 업데이트

푸터의 연락처 정보는 `contentData.footer.contact`에서 관리됩니다:

```javascript
"contact": {
  "title": "연락처",
  "items": [
    {
      "label": "Email",
      "value": "nurarocketscience@gmail.com"
    },
    {
      "label": "Instagram", 
      "value": "@nura._.official"
    },
    {
      "label": "Address",
      "value": "경기도 고양시 덕양구 항공대학로 76"
    }
  ]
}
```

## ⚠️ 주의사항

1. **이미지 최적화**: 웹용으로 이미지를 압축하여 로딩 속도를 개선하세요
2. **파일명**: 한글 파일명 사용을 피하고 영문으로 작성하세요
3. **백업**: 중요한 변경사항 전에 반드시 백업을 만드세요
4. **테스트**: 변경사항 적용 후 다양한 브라우저에서 테스트하세요

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

**마지막 업데이트**: 2025년 07월

**관리자**: 전현우(jhw030520@gmail.com)