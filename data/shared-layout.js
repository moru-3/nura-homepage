(function () {
  const LAYOUT_STYLE_ID = 'nura-shared-layout-style';

  function injectSharedStyles() {
    if (document.getElementById(LAYOUT_STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = LAYOUT_STYLE_ID;
    style.textContent = `
      #topbar {
        background: transparent;
        border-bottom: 1px solid transparent;
        transition:
          background-color 260ms ease,
          backdrop-filter 260ms ease,
          -webkit-backdrop-filter 260ms ease,
          border-color 260ms ease,
          box-shadow 260ms ease;
      }

      #topbar.is-scrolled {
        background: rgba(0, 0, 0, 0.42);
        backdrop-filter: blur(14px) saturate(1.08);
        -webkit-backdrop-filter: blur(14px) saturate(1.08);
        border-bottom-color: rgba(255, 255, 255, 0.08);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
      }

      body.mobile-menu-open #topbar.is-scrolled {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }

      .activities-dropdown {
        position: relative;
      }

      .activities-dropdown-menu {
        position: absolute;
        top: 100%;
        margin-top: 11px;
        left: 50%;
        transform: translateX(-50%) translateY(8px);
  width: max-content;
  min-width: 0px;
        background: rgba(255, 255, 255, 0.96);
        border: none;
        border-radius: 16px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
          opacity 180ms ease,
          transform 180ms ease,
          visibility 180ms ease;
        overflow: hidden;
        z-index: 80;
      }

      .activities-dropdown:hover .activities-dropdown-menu {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
      }

      .activities-dropdown-item {
        display: flex;
        align-items: center;
  justify-content: center;
  text-align: center;
        gap: 12px;
        padding: 14px 16px;
        color: #111111;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        transition:
          background-color 180ms ease,
          color 180ms ease,
          transform 180ms ease;
      }

      .activities-dropdown-item + .activities-dropdown-item {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
      }

      .activities-dropdown-item:hover {
        background: #71b3e2;
        color: #ffffff;
        transform: scale(1.02);
      }


      .activities-dropdown::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 14px;
      }
    `;

    document.head.appendChild(style);
  }

  function renderHeader(basePath) {
    return `
      <header
        id="topbar"
        class="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300"
      >
        <div class="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <a href="${basePath}/" class="relative z-[70] flex items-center shrink-0">
            <img
              src="${basePath}/source/resources/nura-header.png"
              alt="전국대학교로켓연합회 로고"
              class="block h-5 md:h-7 w-auto max-w-[240px] md:max-w-[520px] object-contain translate-y-[1px]"
            />
          </a>

          <nav class="hidden md:flex items-center gap-8 text-base font-medium">
            <a href="${basePath}/" data-page="overview" class="nav-link text-gray-300 hover:text-white transition">Overview</a>
            <a href="${basePath}/about/" data-page="about" class="nav-link text-gray-300 hover:text-white transition">About</a>
            <div class="activities-dropdown">
              <a
                href="${basePath}/activities/"
                data-page="activities"
                class="nav-link text-gray-300 hover:text-white transition inline-flex items-center gap-2"
              >
                Activities
                <svg class="w-4 h-4 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <div class="activities-dropdown-menu">
                <a href="${basePath}/activities/meeting.html" class="activities-dropdown-item">
                  <span>대표자 회의</span>
                </a>
                <a href="${basePath}/activities/kspe.html" class="activities-dropdown-item">
                  <span>추진공학회</span>
                </a>
                <a href="${basePath}/activities/conference.html" class="activities-dropdown-item">
                  <span>학술대회</span>
                </a>
                <a href="${basePath}/activities/launch.html" class="activities-dropdown-item">
                  <span>발사대회</span>
                </a>
              </div>
            </div>
            <a href="${basePath}/partnership/" data-page="Partnership" class="nav-link text-gray-300 hover:text-white transition">Partnership</a>
            <a href="${basePath}/resources/" data-page="resources" class="nav-link text-gray-300 hover:text-white transition">Resources</a>
          </nav>

          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="모바일 메뉴 열기"
            aria-expanded="false"
            class="md:hidden relative z-[70] inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-white"
          >
            <svg
              id="menu-icon-open"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              id="menu-icon-close"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          class="fixed inset-0 z-[60] hidden md:hidden bg-slate-950/88 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300 ease-out"
        >
          <div class="flex flex-col justify-between min-h-screen px-6 pt-20 pb-10 transform transition duration-300 ease-out opacity-0 translate-y-3">
            <div class="flex flex-col gap-1">
              <a href="${basePath}/" data-page="overview" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">Overview</a>
              <a href="${basePath}/about/" data-page="about" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">About</a>
              <div class="border-b border-white/10">
   <div class="flex items-center justify-between gap-3 py-4">
                  <a
                    href="${basePath}/activities/"
                    data-page="activities"
                    class="nav-link flex-1 text-2xl font-semibold text-white"
                  >
                    Activities
                  </a>
                  <button
                    id="mobile-activities-toggle"
                    type="button"
                    class="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition hover:bg-white/10"
                    aria-label="Activities 하위 메뉴 열기"
                    aria-expanded="false"
                    aria-controls="mobile-activities-submenu"
                  >
                  <svg
                    id="mobile-activities-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-300 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                </div>

                <div id="mobile-activities-submenu" class="max-h-0 overflow-hidden transition-all duration-300 ease-out">
                  <div class="pb-4">
                    <a href="${basePath}/activities/meeting.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">Meeting</a>
                    <a href="${basePath}/activities/kspe.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">KSPE Conference</a>
                    <a href="${basePath}/activities/conference.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">Conference</a>
                    <a href="${basePath}/activities/launch.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">Launch</a>
                  </div>
                </div>
              </div>
              <a href="${basePath}/partnership/" data-page="Partnership" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">Partnership</a>
              <a href="${basePath}/resources/" data-page="resources" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">Resources</a>
            </div>

            <div class="pt-10 text-sm text-gray-400">National University Rocket Association</div>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    return `
      <footer class="bg-black border-t border-gray-800 py-8 px-4 md:px-16 w-full">
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
            <p class="text-gray-500 text-sm">© 1992 - 2026 NURA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }

  function highlightCurrentPage(currentPage) {
    document.querySelectorAll('.nav-link').forEach((link) => {
      if (link.dataset.page === currentPage) {
        link.classList.add('text-blue-400', 'font-bold');
        link.classList.remove('text-gray-300', 'text-white');
      }
    });
  }

  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (!mobileMenuBtn || !mobileMenu) return;

    const mobileMenuPanel = mobileMenu.firstElementChild;
    const animationMs = 300;
    let closeTimeoutId;

    const setMenuState = (isOpen) => {
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      menuIconOpen?.classList.toggle('hidden', isOpen);
      menuIconClose?.classList.toggle('hidden', !isOpen);
      document.body.classList.toggle('overflow-hidden', isOpen);
      document.body.classList.toggle('mobile-menu-open', isOpen);
    };

    const openMenu = () => {
      clearTimeout(closeTimeoutId);
      mobileMenu.classList.remove('hidden');
      requestAnimationFrame(() => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
        mobileMenuPanel?.classList.remove('opacity-0', 'translate-y-3');
        mobileMenuPanel?.classList.add('opacity-100', 'translate-y-0');
      });
      setMenuState(true);
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenuPanel?.classList.remove('opacity-100', 'translate-y-0');
      mobileMenuPanel?.classList.add('opacity-0', 'translate-y-3');
      setMenuState(false);
      closeTimeoutId = setTimeout(() => mobileMenu.classList.add('hidden'), animationMs);
    };

    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  function initTopbarBlur() {
    const topbar = document.getElementById('topbar');
    if (!topbar) return;

    const updateTopbarBlur = () => {
      if (window.scrollY > 12) {
        topbar.classList.add('is-scrolled');
      } else {
        topbar.classList.remove('is-scrolled');
      }
    };

    updateTopbarBlur();
    window.addEventListener('scroll', updateTopbarBlur, { passive: true });
  }

  function initMobileActivitiesToggle() {
    const mobileActivitiesToggle = document.getElementById('mobile-activities-toggle');
    const mobileActivitiesSubmenu = document.getElementById('mobile-activities-submenu');
    const mobileActivitiesArrow = document.getElementById('mobile-activities-arrow');

    if (!mobileActivitiesToggle || !mobileActivitiesSubmenu) return;

    mobileActivitiesToggle.addEventListener('click', () => {
      const isOpen = mobileActivitiesToggle.getAttribute('aria-expanded') === 'true';

      mobileActivitiesToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileActivitiesArrow?.classList.toggle('rotate-180', !isOpen);

      if (isOpen) {
        mobileActivitiesSubmenu.style.maxHeight = '0px';
      } else {
        mobileActivitiesSubmenu.style.maxHeight = mobileActivitiesSubmenu.scrollHeight + 'px';
      }
    });
  }

  function initSharedLayout() {
    const body = document.body;
    if (!body) return;

    const basePath = body.dataset.basePath || '.';
    const currentPage = body.dataset.currentPage || '';
    const headerMount = document.querySelector('[data-shared-header]');
    const footerMount = document.querySelector('[data-shared-footer]');

    injectSharedStyles();

    if (headerMount) {
      headerMount.outerHTML = renderHeader(basePath);
    }

    if (footerMount) {
      footerMount.outerHTML = renderFooter();
    }

    highlightCurrentPage(currentPage);
    initMobileMenu();
    initTopbarBlur();
    initMobileActivitiesToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedLayout, { once: true });
  } else {
    initSharedLayout();
  }
})();
      .activities-dropdown-menu {
        position: absolute;
        top: 100%;
        margin-top: 11px;
        left: 50%;
        transform: translateX(-50%) translateY(8px);
        width: 220px;
        background: rgba(255, 255, 255, 0.96);
        border: none;
        border-radius: 16px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
          opacity 180ms ease,
          transform 180ms ease,
          visibility 180ms ease;
        overflow: hidden;
        z-index: 80;
      }

      .activities-dropdown:hover .activities-dropdown-menu {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
      }

      .activities-dropdown-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
        color: #111111;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        transition:
          background-color 180ms ease,
          color 180ms ease,
          transform 180ms ease;
      }

      .activities-dropdown-item + .activities-dropdown-item {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
      }

      .activities-dropdown-item:hover {
        background: #71b3e2;
        color: #ffffff;
        transform: scale(1.02);
      }

      .activities-dropdown-item:hover .activities-dropdown-arrow {
        color: #ffffff;
      }

      .activities-dropdown-arrow {
        color: #111111;
        transition: color 180ms ease;
      }

      .activities-dropdown::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 14px;
      }
    `;

    document.head.appendChild(style);
  }

  function renderHeader(basePath) {
    return `
      <header
        id="topbar"
        class="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300"
      >
        <div class="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <a href="${basePath}/" class="relative z-[70] flex items-center shrink-0">
            <img
              src="${basePath}/source/resources/nura-header.png"
              alt="전국대학교로켓연합회 로고"
              class="block h-5 md:h-7 w-auto max-w-[240px] md:max-w-[520px] object-contain translate-y-[1px]"
            />
          </a>

          <nav class="hidden md:flex items-center gap-8 text-base font-medium">
            <a href="${basePath}/" data-page="overview" class="nav-link text-gray-300 hover:text-white transition">Overview</a>
            <a href="${basePath}/about/" data-page="about" class="nav-link text-gray-300 hover:text-white transition">About</a>
            <div class="activities-dropdown">
              <a
                href="${basePath}/activities/"
                data-page="activities"
                class="nav-link text-gray-300 hover:text-white transition inline-flex items-center gap-2"
              >
                Activities
                <svg class="w-4 h-4 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <div class="activities-dropdown-menu">
                <a href="${basePath}/activities/meeting.html" class="activities-dropdown-item">
                  <span>대표자 회의</span>
                  <span class="activities-dropdown-arrow">→</span>
                </a>
                <a href="${basePath}/activities/kspe.html" class="activities-dropdown-item">
                  <span>춘추계 학술대회</span>
                  <span class="activities-dropdown-arrow">→</span>
                </a>
                <a href="${basePath}/activities/conference.html" class="activities-dropdown-item">
                  <span>학술대회</span>
                  <span class="activities-dropdown-arrow">→</span>
                </a>
                <a href="${basePath}/activities/launch.html" class="activities-dropdown-item">
                  <span>발사대회</span>
                  <span class="activities-dropdown-arrow">→</span>
                </a>
              </div>
            </div>
            <a href="${basePath}/partnership/" data-page="Partnership" class="nav-link text-gray-300 hover:text-white transition">Partnership</a>
            <a href="${basePath}/resources/" data-page="resources" class="nav-link text-gray-300 hover:text-white transition">Resources</a>
          </nav>

          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="모바일 메뉴 열기"
            aria-expanded="false"
            class="md:hidden relative z-[70] inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-white"
          >
            <svg
              id="menu-icon-open"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              id="menu-icon-close"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          class="fixed inset-0 z-[60] hidden md:hidden bg-slate-950/88 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300 ease-out"
        >
          <div class="flex flex-col justify-between min-h-screen px-6 pt-20 pb-10 transform transition duration-300 ease-out opacity-0 translate-y-3">
            <div class="flex flex-col gap-1">
              <a href="${basePath}/" data-page="overview" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">Overview</a>
              <a href="${basePath}/about/" data-page="about" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">About</a>
              <div class="border-b border-white/10">
   <div class="flex items-center justify-between gap-3 py-4">
                  <a
                    href="${basePath}/activities/"
                    data-page="activities"
                    class="nav-link flex-1 text-2xl font-semibold text-white"
                  >
                    Activities
                  </a>
                  <button
                    id="mobile-activities-toggle"
                    type="button"
                    class="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition hover:bg-white/10"
                    aria-label="Activities 하위 메뉴 열기"
                    aria-expanded="false"
                    aria-controls="mobile-activities-submenu"
                  >
                  <svg
                    id="mobile-activities-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-300 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                </div>

                <div id="mobile-activities-submenu" class="max-h-0 overflow-hidden transition-all duration-300 ease-out">
                  <div class="pb-4">
                    <a href="${basePath}/activities/meeting.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">Meeting</a>
                    <a href="${basePath}/activities/kspe.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">KSPE Conference</a>
                    <a href="${basePath}/activities/conference.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">Conference</a>
                    <a href="${basePath}/activities/launch.html" class="block py-2 text-2xl font-medium text-gray-300 hover:text-white transition">Launch</a>
                  </div>
                </div>
              </div>
              <a href="${basePath}/partnership/" data-page="Partnership" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">Partnership</a>
              <a href="${basePath}/resources/" data-page="resources" class="nav-link py-4 text-2xl font-semibold text-white border-b border-white/10">Resources</a>
            </div>

            <div class="pt-10 text-sm text-gray-400">National University Rocket Association</div>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    return `
      <footer class="bg-black border-t border-gray-800 py-8 px-4 md:px-16 w-full">
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
    `;
  }

  function highlightCurrentPage(currentPage) {
    document.querySelectorAll('.nav-link').forEach((link) => {
      if (link.dataset.page === currentPage) {
        link.classList.add('text-blue-400', 'font-bold');
        link.classList.remove('text-gray-300', 'text-white');
      }
    });
  }

  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (!mobileMenuBtn || !mobileMenu) return;

    const mobileMenuPanel = mobileMenu.firstElementChild;
    const animationMs = 300;
    let closeTimeoutId;

    const setMenuState = (isOpen) => {
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      menuIconOpen?.classList.toggle('hidden', isOpen);
      menuIconClose?.classList.toggle('hidden', !isOpen);
      document.body.classList.toggle('overflow-hidden', isOpen);
      document.body.classList.toggle('mobile-menu-open', isOpen);
    };

    const openMenu = () => {
      clearTimeout(closeTimeoutId);
      mobileMenu.classList.remove('hidden');
      requestAnimationFrame(() => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
        mobileMenuPanel?.classList.remove('opacity-0', 'translate-y-3');
        mobileMenuPanel?.classList.add('opacity-100', 'translate-y-0');
      });
      setMenuState(true);
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenuPanel?.classList.remove('opacity-100', 'translate-y-0');
      mobileMenuPanel?.classList.add('opacity-0', 'translate-y-3');
      setMenuState(false);
      closeTimeoutId = setTimeout(() => mobileMenu.classList.add('hidden'), animationMs);
    };

    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  function initTopbarBlur() {
    const topbar = document.getElementById('topbar');
    if (!topbar) return;

    const updateTopbarBlur = () => {
      if (window.scrollY > 12) {
        topbar.classList.add('is-scrolled');
      } else {
        topbar.classList.remove('is-scrolled');
      }
    };

    updateTopbarBlur();
    window.addEventListener('scroll', updateTopbarBlur, { passive: true });
  }

  function initMobileActivitiesToggle() {
    const mobileActivitiesToggle = document.getElementById('mobile-activities-toggle');
    const mobileActivitiesSubmenu = document.getElementById('mobile-activities-submenu');
    const mobileActivitiesArrow = document.getElementById('mobile-activities-arrow');

    if (!mobileActivitiesToggle || !mobileActivitiesSubmenu) return;

    mobileActivitiesToggle.addEventListener('click', () => {
      const isOpen = mobileActivitiesToggle.getAttribute('aria-expanded') === 'true';

      mobileActivitiesToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileActivitiesArrow?.classList.toggle('rotate-180', !isOpen);

      if (isOpen) {
        mobileActivitiesSubmenu.style.maxHeight = '0px';
      } else {
        mobileActivitiesSubmenu.style.maxHeight = mobileActivitiesSubmenu.scrollHeight + 'px';
      }
    });
  }

  function initSharedLayout() {
    const body = document.body;
    if (!body) return;

    const basePath = body.dataset.basePath || '.';
    const currentPage = body.dataset.currentPage || '';
    const headerMount = document.querySelector('[data-shared-header]');
    const footerMount = document.querySelector('[data-shared-footer]');

    injectSharedStyles();

    if (headerMount) {
      headerMount.outerHTML = renderHeader(basePath);
    }

    if (footerMount) {
      footerMount.outerHTML = renderFooter();
    }

    highlightCurrentPage(currentPage);
    initMobileMenu();
    initTopbarBlur();
    initMobileActivitiesToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedLayout, { once: true });
  } else {
    initSharedLayout();
  }
})();
