document.documentElement.classList.add('motion-ready');

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
filterInputs.forEach((input) => {
  input.addEventListener('change', () => {
    const checked = document.querySelectorAll('.filter-panel input:checked').length;
    if (filterCount) filterCount.textContent = String(checked);
  });
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

