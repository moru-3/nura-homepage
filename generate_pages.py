from pathlib import Path

base = Path('/mnt/data/nura_subpages')

common_head = '''<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link rel="icon" type="image/png" sizes="32x32" href="{asset_prefix}source/resources/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="{asset_prefix}source/resources/favicon-16x16.png" />
    <link rel="shortcut icon" type="image/png" href="{asset_prefix}source/resources/favicon-32x32.png" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap" rel="stylesheet">
    <style>
      html {{ scroll-behavior: smooth; }}
      html, body {{ background-color: #030712; overflow-x: hidden; }}
      body {{ font-family: 'Pretendard', 'Noto Sans KR', sans-serif; }}
      .page-shell {{ min-height: 100vh; }}
      .hero-grid {{
        background-image:
          radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 28%),
          radial-gradient(circle at bottom left, rgba(14,165,233,0.14), transparent 24%);
      }}
    </style>
  </head>
  <body class="bg-gray-950 text-white min-h-screen overflow-x-hidden">
'''

nav = '''    <header id="topbar" class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="{asset_prefix}source/resources/nura-logo.png" alt="NURA 로고" class="w-10 h-10 object-contain" />
          <div class="leading-tight">
            <div class="text-sm md:text-base font-bold text-white">전국대학교로켓연합회</div>
            <div class="text-[9px] md:text-xs text-gray-400">National University Rocket Association</div>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" data-page="overview" class="nav-link text-gray-300 hover:text-white transition">Overview</a>
          <a href="/about/" data-page="about" class="nav-link text-gray-300 hover:text-white transition">About</a>
          <a href="/activities/" data-page="activities" class="nav-link text-gray-300 hover:text-white transition">Activities</a>
          <a href="/sponsors/" data-page="sponsors" class="nav-link text-gray-300 hover:text-white transition">Sponsors</a>
          <a href="/resources/" data-page="resources" class="nav-link text-gray-300 hover:text-white transition">Resources</a>
        </nav>

        <button id="mobile-menu-btn" class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="hidden md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-md">
        <div class="px-4 py-4 flex flex-col gap-3 text-sm">
          <a href="/" data-page="overview" class="nav-link text-gray-300">Overview</a>
          <a href="/about/" data-page="about" class="nav-link text-gray-300">About</a>
          <a href="/activities/" data-page="activities" class="nav-link text-gray-300">Activities</a>
          <a href="/sponsors/" data-page="sponsors" class="nav-link text-gray-300">Sponsors</a>
          <a href="/resources/" data-page="resources" class="nav-link text-gray-300">Resources</a>
        </div>
      </div>
    </header>
'''

footer = '''    <footer class="bg-gray-900 border-t border-gray-800 py-8 px-4 md:px-16 w-full">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 md:px-8">
          <div>
            <h3 class="text-lg font-bold mb-4 text-blue-400">NURA</h3>
            <p class="text-gray-400 text-sm mb-2">전국대학교로켓연합회</p>
            <p class="text-gray-400 text-sm mb-2">National University Rocket Association</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">연락처</h3>
            <div class="text-gray-400 text-sm space-y-2">
              <p class="break-all">Email: nurarocketscience@gmail.com</p>
              <p>Instagram: @nura._.official</p>
              <p>Address: 경기도 고양시 덕양구 항공대학로 76</p>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">사업자 정보</h3>
            <div class="text-gray-400 text-sm space-y-2">
              <p>사업자등록번호: 609-82-83482</p>
              <p>대표자: 전하상</p>
              <p>설립일: 1992년 3월 2일</p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center pb-2 md:pb-8">
          <p class="text-gray-500 text-sm">© 1992 NURA. All rights reserved.</p>
        </div>
      </div>
    </footer>
'''

common_script = '''    <script>
      const currentPage = '{current_page}';
      document.querySelectorAll('.nav-link').forEach((link) => {{
        if (link.dataset.page === currentPage) {{
          link.classList.add('text-blue-400', 'font-bold');
          link.classList.remove('text-gray-300');
        }}
      }});

      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenuBtn && mobileMenu) {{
        mobileMenuBtn.addEventListener('click', () => {{
          mobileMenu.classList.toggle('hidden');
        }});
        mobileMenu.querySelectorAll('a').forEach((link) => {{
          link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        }});
      }}
    </script>
  </body>
</html>
'''

index_body = '''    <div class="page-shell flex flex-col">
{nav}
      <main class="w-full flex-1 flex flex-col pt-20">
        <section id="overview" class="relative overflow-hidden flex flex-col justify-center h-[calc(100vh-5rem)] w-full p-0 m-0">
          <div id="slideshow-bg" class="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <img src="source/overview/blurred/slide1.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-[1500ms]" style="z-index:1;" alt="슬라이드1">
            <img src="source/overview/blurred/slide2.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드2">
            <img src="source/overview/blurred/slide3.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드3">
            <img src="source/overview/blurred/slide4.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드4">
            <img src="source/overview/blurred/slide5.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드5">
            <img src="source/overview/blurred/slide6.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드6">
            <img src="source/overview/blurred/slide7.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드7">
            <img src="source/overview/blurred/slide8.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드8">
            <img src="source/overview/blurred/slide9.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드9">
            <img src="source/overview/blurred/slide10.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드10">
            <img src="source/overview/blurred/slide11.jpg" class="slide-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms]" style="z-index:0;" alt="슬라이드11">
            <div class="absolute inset-0 bg-black/60 z-10"></div>
          </div>
          <div class="relative z-30 flex items-center justify-center h-full w-full text-white">
            <div class="w-full max-w-3xl flex flex-col items-start text-left pl-8 pr-8">
              <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                <span class="text-blue-400">전국대학교로켓연합회</span><br>
                <span class="text-lg font-normal text-gray-300">National University Rocket Association</span>
              </h1>
              <p class="text-lg md:text-xl text-gray-200 drop-shadow-lg">로켓 기술 교류를 촉진하고 대학생들의 발사 활동을 지원합니다.</p>
            </div>
          </div>
        </section>
      </main>
{footer}
    </div>
    <script>
      (function() {{
        const slides = document.querySelectorAll('.slide-img');
        let current = 0;
        function showSlide(idx) {{
          slides.forEach((img, i) => {{
            img.style.opacity = (i === idx) ? '1' : '0';
            img.style.zIndex = (i === idx) ? '1' : '0';
          }});
          current = idx;
        }}
        function nextSlide() {{
          showSlide((current + 1) % slides.length);
        }}
        showSlide(0);
        setInterval(nextSlide, 3000);
      }})();
    </script>
'''

subpage_template = '''    <div class="page-shell flex flex-col">
{nav}
      <main class="w-full flex-1 flex flex-col pt-20">
        <section class="hero-grid border-b border-white/10">
          <div class="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <div class="max-w-3xl">
              <p class="text-sm md:text-base uppercase tracking-[0.2em] text-blue-300/90 mb-4">{eyebrow}</p>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p class="text-lg md:text-xl text-gray-300 leading-relaxed">{description}</p>
            </div>
          </div>
        </section>
        <section class="max-w-6xl mx-auto w-full px-6 md:px-8 py-12 md:py-16">
{content}
        </section>
      </main>
{footer}
    </div>
'''

about_content = '''          <div class="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 class="text-2xl font-bold mb-6">단체 소개</h2>
            <div class="space-y-5 text-gray-300 leading-8 text-base md:text-lg">
              <p>NURA는 대학의 로켓 정보 교류 및 활동, 로켓 발사대회 경진을 목표로 설립되었습니다.</p>
              <p>1992년 한국항공대에서 로켓 발사 대회가 개최된 것을 시작으로, 1993년 각 대학의 로켓 정보 교류 및 활동을 위한 전국 로켓 연구 연합회가 창설되었습니다.</p>
              <p>그 후 2001년 정식으로 전국대학교로켓연합회를 발족하였으며, 현재까지 대학생 로켓 활동의 연결점 역할을 이어가고 있습니다.</p>
            </div>
          </div>'''

activities_cards = [
    ("학술대회", [
        "로켓 설계 및 제작 과정 발표",
        "자체 개발 기술 소개 및 세미나",
        "리크루팅 부스 및 참여자 교류",
    ]),
    ("발사대회", [
        "자체 설계한 로켓의 실제 발사 및 비행 실험",
        "평가/비평가 로켓 운영을 통한 기술 구현 및 검증",
        "비행 안정성, 구조 완성도 등에 따른 심사 및 시상",
    ]),
    ("추진공학회", [
        "항공우주 분야 기술 교류 학회 참여",
        "로켓 및 추진기술 논문 세션 운영",
        "리크루팅 부스 및 산학 협력 활동",
    ]),
    ("기타 활동", [
        "학술대회 연계 교류회 및 네트워킹 행사",
        "로켓 기술 관련 공동 워크숍 및 기획 세션",
        "산학 연계 기회 탐색 및 외부 행사 참여",
    ])
]

activities_content = ['          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">']
for title, items in activities_cards:
    lis = ''.join(f'<li>{item}</li>' for item in items)
    activities_content.append(f'''            <article class="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
              <h2 class="text-2xl font-bold mb-5 text-blue-300">{title}</h2>
              <ul class="list-disc pl-5 space-y-3 text-gray-300 leading-7">{lis}</ul>
            </article>''')
activities_content.append('          </div>')
activities_content = '\n'.join(activities_content)

sponsors_data = [
    ("대한항공", "source/sponsors/koreanair.png", "https://www.koreanair.com"),
    ("이노스페이스", "source/sponsors/innospace.png", "https://www.innospc.com"),
    ("한국항공우주연구원", "source/sponsors/kari.jpg", "https://www.kari.re.kr"),
    ("LIG풍산", "source/sponsors/ligpoongsan.png", "https://www.ligpoongsan.co.kr"),
]

sponsors_content = ['          <div class="mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-gray-300 leading-8">',
                    '            NURA의 활동을 후원해주시는 기업 및 기관들입니다.',
                    '          </div>',
                    '          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">']
for name, logo, url in sponsors_data:
    sponsors_content.append(f'''            <a href="{url}" target="_blank" rel="noopener noreferrer" class="rounded-3xl bg-white p-8 flex items-center justify-center min-h-[180px] shadow-lg shadow-black/10 hover:-translate-y-1 transition-transform">
              <img src="../{logo}" alt="{name} 로고" class="max-w-full max-h-24 object-contain" />
            </a>''')
sponsors_content.append('          </div>')
sponsors_content = '\n'.join(sponsors_content)

resources_content = '''          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article class="rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative min-h-[300px]">
              <img src="../source/resources/onedrive-blur.png" alt="NURA Gallery" class="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div class="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <h2 class="text-2xl font-bold mb-4">갤러리</h2>
                  <p class="text-gray-200 leading-7">NURA의 활동 사진, 대회 사진 등은 아래 원드라이브 공유 폴더에서 확인하실 수 있습니다.</p>
                </div>
                <div class="pt-8">
                  <a href="https://onedrive.live.com/your-shared-gallery-link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                    <span class="text-2xl mr-2">🖼️</span> NURA 갤러리 바로가기
                  </a>
                </div>
              </div>
            </article>
            <article class="rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative min-h-[300px]">
              <img src="../source/resources/notion-blur.png" alt="NURA Resources" class="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div class="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <h2 class="text-2xl font-bold mb-4">문서실</h2>
                  <p class="text-gray-200 leading-7">NURA의 기술, 역사 등에 관한 각종 문서는 아래 노션 페이지에서 확인하실 수 있습니다.</p>
                </div>
                <div class="pt-8">
                  <a href="https://www.notion.so/nura/NURA-Resources" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                    <span class="text-2xl mr-2">📄</span> NURA 노션 바로가기
                  </a>
                </div>
              </div>
            </article>
          </div>'''

pages = {
    base / 'index.html': (
        common_head.format(title='NURA | 전국대학교로켓연합회', asset_prefix='') +
        index_body.format(nav=nav.format(asset_prefix=''), footer=footer) +
        common_script.format(current_page='overview')
    ),
    base / 'about' / 'index.html': (
        common_head.format(title='NURA | About', asset_prefix='../') +
        subpage_template.format(
            nav=nav.format(asset_prefix='../'),
            eyebrow='About',
            title='단체 소개',
            description='NURA의 출범 배경과 연혁을 별도 페이지로 분리했습니다.',
            content=about_content,
            footer=footer,
        ) + common_script.format(current_page='about')
    ),
    base / 'activities' / 'index.html': (
        common_head.format(title='NURA | Activities', asset_prefix='../') +
        subpage_template.format(
            nav=nav.format(asset_prefix='../'),
            eyebrow='Activities',
            title='주요 활동',
            description='학술대회, 발사대회, 학회 참여 및 교류 활동을 한 페이지에 모았습니다.',
            content=activities_content,
            footer=footer,
        ) + common_script.format(current_page='activities')
    ),
    base / 'sponsors' / 'index.html': (
        common_head.format(title='NURA | Sponsors', asset_prefix='../') +
        subpage_template.format(
            nav=nav.format(asset_prefix='../'),
            eyebrow='Sponsors',
            title='후원사',
            description='NURA의 활동을 지원하는 기업 및 기관을 별도 하위페이지로 분리했습니다.',
            content=sponsors_content,
            footer=footer,
        ) + common_script.format(current_page='sponsors')
    ),
    base / 'resources' / 'index.html': (
        common_head.format(title='NURA | Resources', asset_prefix='../') +
        subpage_template.format(
            nav=nav.format(asset_prefix='../'),
            eyebrow='Resources',
            title='자료실',
            description='갤러리와 문서실 링크를 별도 하위페이지에서 바로 확인할 수 있도록 정리했습니다.',
            content=resources_content,
            footer=footer,
        ) + common_script.format(current_page='resources')
    ),
}

for path, html in pages.items():
    path.write_text(html, encoding='utf-8')

print('generated', len(pages), 'files')
