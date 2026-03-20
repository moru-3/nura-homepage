async function loadPartial(targetId, filePath, rootPath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const response = await fetch(filePath, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error(`Failed to load partial: ${filePath}`);
  }

  const html = await response.text();
  target.innerHTML = html.replaceAll('{{ROOT}}', rootPath);
}

function initActiveNav() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add('text-blue-400', 'font-bold');
      link.classList.remove('text-gray-300', 'text-white');
      link.setAttribute('aria-current', 'page');
    }
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

function initMobileActivities() {
  const currentPage = document.body.dataset.page;
  const mobileActivitiesToggle = document.getElementById('mobile-activities-toggle');
  const mobileActivitiesSubmenu = document.getElementById('mobile-activities-submenu');
  const mobileActivitiesArrow = document.getElementById('mobile-activities-arrow');

  if (!mobileActivitiesToggle || !mobileActivitiesSubmenu) return;

  const setActivitiesMenu = (isOpen) => {
    mobileActivitiesToggle.setAttribute('aria-expanded', String(isOpen));
    mobileActivitiesArrow?.classList.toggle('rotate-180', isOpen);
    mobileActivitiesSubmenu.style.maxHeight = isOpen
      ? `${mobileActivitiesSubmenu.scrollHeight}px`
      : '0px';
  };

  if (currentPage === 'activities') {
    requestAnimationFrame(() => setActivitiesMenu(true));
  }

  mobileActivitiesToggle.addEventListener('click', () => {
    const isOpen = mobileActivitiesToggle.getAttribute('aria-expanded') === 'true';
    setActivitiesMenu(!isOpen);
  });
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (!mobileMenuBtn || !mobileMenu) return;

  const mobileMenuPanel = mobileMenu.querySelector('.mobile-menu-panel');
  const ANIMATION_MS = 300;
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
    closeTimeoutId = setTimeout(() => mobileMenu.classList.add('hidden'), ANIMATION_MS);
  };

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

async function initLayout() {
  const root = document.body.dataset.root || '.';

  await loadPartial('site-header', `${root}/partials/header.html`, root);
  await loadPartial('site-footer', `${root}/partials/footer.html`, root);

  initActiveNav();
  initTopbarBlur();
  initMobileActivities();
  initMobileMenu();
}

window.addEventListener('DOMContentLoaded', () => {
  initLayout().catch((error) => {
    console.error(error);
  });
});
