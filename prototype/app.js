document.documentElement.classList.add('motion-ready');

const loader = document.querySelector('[data-site-loader]');
const hasSeenLoader = sessionStorage.getItem('nodda-loader-seen') === 'true';

if (loader) {
  if (hasSeenLoader) {
    loader.remove();
  } else {
    const startedAt = performance.now();
    const closeLoader = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, 1150 - elapsed);
      window.setTimeout(() => {
        loader.dataset.leaving = 'true';
        window.setTimeout(() => loader.remove(), 420);
        sessionStorage.setItem('nodda-loader-seen', 'true');
      }, remaining);
    };

    if (document.readyState === 'complete') closeLoader();
    else window.addEventListener('load', closeLoader, { once: true });
  }
}

const revealGroups = [
  '.practical-grid > div',
  '.section-heading',
  '.collection-banner',
  '.product-card',
  '.service-card',
  '.feature-photo, .feature-copy',
  '.reel-card',
  '.notice-grid > *',
  '.community-grid > *',
  '.question-layout > *',
  '.visit-grid > *',
  '.catalogue-hero-grid > *',
  '.catalogue-card',
  '.empty-state'
];

const revealElements = [];

revealGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.dataset.reveal = '';
    element.style.setProperty('--reveal-delay', `${Math.min(index * 60, 180)}ms`);
    revealElements.push(element);
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.dataset.visible = 'true';
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => { element.dataset.visible = 'true'; });
}

const menuButton = document.querySelector('.menu-trigger');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileMenu.hidden = open;
    document.body.classList.toggle('menu-open', !open);
  });

  mobileMenu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
  });
}

const searchDialog = document.querySelector('.search-dialog');
document.querySelectorAll('.search-trigger').forEach((button) => {
  button.addEventListener('click', () => searchDialog?.showModal());
});

const filterButton = document.querySelector('.filter-trigger');
const filterPanel = document.querySelector('.filter-panel');
const filterClose = document.querySelector('.filter-close');
const applyFilters = document.querySelector('.apply-filters');

function setFilterOpen(open) {
  if (!filterButton || !filterPanel) return;
  filterButton.setAttribute('aria-expanded', String(open));
  filterPanel.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open && window.innerWidth <= 720);
}

filterButton?.addEventListener('click', () => setFilterOpen(true));
filterClose?.addEventListener('click', () => setFilterOpen(false));
applyFilters?.addEventListener('click', () => setFilterOpen(false));

const filterInputs = document.querySelectorAll('.filter-panel input[type="checkbox"]');
const filterCount = document.querySelector('.filter-count');
const catalogueCards = [...document.querySelectorAll('.catalogue-card')];
const resultCount = document.querySelector('.toolbar-row > p strong');
const emptyState = document.querySelector('[data-empty-state]');

function applyCatalogueFilters() {
  const groups = ['category', 'availability', 'pet'];
  const active = Object.fromEntries(groups.map((group) => [
    group,
    [...document.querySelectorAll(`[data-filter="${group}"]:checked`)].map((input) => input.value)
  ]));

  let visible = 0;
  catalogueCards.forEach((card) => {
    const matches = groups.every((group) => {
      if (!active[group].length) return true;
      const values = (card.dataset[group] || '').split(' ');
      return active[group].some((value) => values.includes(value));
    });
    card.hidden = !matches;
    if (matches) visible += 1;
  });

  if (resultCount) resultCount.textContent = String(visible);
  if (emptyState) emptyState.hidden = visible !== 0;
}

applyCatalogueFilters();

filterInputs.forEach((input) => {
  input.addEventListener('change', () => {
    const checked = document.querySelectorAll('.filter-panel input:checked').length;
    if (filterCount) filterCount.textContent = String(checked);
    applyCatalogueFilters();
  });
});

document.querySelectorAll('.category-rail a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href')?.slice(1);
    const categoryMap = { clothing: 'clothing', sleep: 'sleep', walk: 'essentials', play: 'essentials', care: 'essentials' };
    if (!target || target === 'all') return;
    event.preventDefault();
    const checkbox = document.querySelector(`[data-filter="category"][value="${categoryMap[target]}"]`);
    document.querySelectorAll('[data-filter="category"]').forEach((input) => { input.checked = false; });
    if (checkbox) checkbox.checked = true;
    document.querySelectorAll('.category-rail a').forEach((item) => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
    if (filterCount) filterCount.textContent = checkbox ? '1' : '0';
    applyCatalogueFilters();
  });
});

document.querySelector('.empty-state .button')?.addEventListener('click', () => {
  filterInputs.forEach((input) => { input.checked = false; });
  if (filterCount) filterCount.textContent = '0';
  applyCatalogueFilters();
});

document.querySelectorAll('.cart-action, .dock-cart').forEach((button) => {
  button.addEventListener('click', () => {
    window.alert('Cart interaction is designed in a later sprint. No product has been added.');
  });
});

document.querySelectorAll('.play-button').forEach((button) => {
  button.addEventListener('click', () => {
    window.alert('The real Instagram reel will load here only after a visitor taps play.');
  });
});

