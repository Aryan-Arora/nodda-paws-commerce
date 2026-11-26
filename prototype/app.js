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

const searchInput = searchDialog?.querySelector('input[type="search"]');
const searchResults = document.createElement('div');
searchResults.className = 'search-results';
searchResults.setAttribute('aria-live', 'polite');
searchDialog?.append(searchResults);

function getSearchableProducts() {
  return [...document.querySelectorAll('.catalogue-card, .product-card')].map((card) => ({
    card,
    name: card.querySelector('h3')?.textContent.trim() || 'Nodda Paws favourite',
    category: card.querySelector('.product-kicker')?.textContent.trim() || 'Shop favourite'
  }));
}

function renderSearchResults(query = '') {
  const normalized = query.trim().toLowerCase();
  const products = getSearchableProducts().filter((product) => !normalized || `${product.name} ${product.category}`.toLowerCase().includes(normalized));
  searchResults.replaceChildren();

  const heading = document.createElement('p');
  heading.className = 'search-summary';
  heading.textContent = normalized ? `${products.length} matching shop previews` : 'Shop previews ready to search';
  searchResults.append(heading);

  products.slice(0, 6).forEach((product) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'search-result';
    item.innerHTML = `<span>${product.category}</span><strong>${product.name}</strong>`;
    item.addEventListener('click', () => {
      searchDialog?.close();
      product.card.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    });
    searchResults.append(item);
  });

  if (!products.length) {
    const empty = document.createElement('p');
    empty.className = 'search-empty';
    empty.textContent = 'No preview matches that search yet. Try clothing, sleep, walk or care.';
    searchResults.append(empty);
  }
}

searchInput?.addEventListener('input', () => renderSearchResults(searchInput.value));
document.querySelectorAll('.search-trigger').forEach((button) => button.addEventListener('click', () => renderSearchResults(searchInput?.value || '')));

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

const cartDialog = document.createElement('dialog');
cartDialog.className = 'cart-drawer';
cartDialog.setAttribute('aria-labelledby', 'cart-title');
cartDialog.innerHTML = `
  <div class="cart-drawer-head">
    <div><p class="eyebrow">Your basket</p><h2 id="cart-title">Noddy’s picks</h2></div>
    <button class="close-button" type="button" data-close-cart>Close</button>
  </div>
  <div class="cart-lines" data-cart-lines></div>
  <div class="cart-drawer-foot">
    <p><span>Subtotal</span><strong>Calculated after catalogue import</strong></p>
    <button class="button button-ink" type="button" disabled>Checkout connects with live commerce</button>
    <small>No order or payment is created in this frontend prototype.</small>
  </div>`;
document.body.append(cartDialog);

let cart = JSON.parse(sessionStorage.getItem('nodda-preview-cart') || '[]');

function saveCart() {
  sessionStorage.setItem('nodda-preview-cart', JSON.stringify(cart));
}

function renderCart() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((count) => {
    count.textContent = String(total);
    count.setAttribute('aria-label', `${total} items`);
  });

  const lines = cartDialog.querySelector('[data-cart-lines]');
  lines.replaceChildren();
  if (!cart.length) {
    lines.innerHTML = '<div class="cart-empty"><span aria-hidden="true">♡</span><h3>Your basket is waiting.</h3><p>Add a shop preview to test the cart experience.</p></div>';
    return;
  }

  cart.forEach((item) => {
    const line = document.createElement('article');
    line.className = 'cart-line';
    line.innerHTML = `<div class="cart-thumb" aria-hidden="true">NP</div><div><p>${item.category}</p><h3>${item.name}</h3><div class="quantity-control"><button type="button" aria-label="Decrease ${item.name}">−</button><span>${item.quantity}</span><button type="button" aria-label="Increase ${item.name}">+</button></div></div><button class="cart-remove" type="button">Remove</button>`;
    const [decrease, increase] = line.querySelectorAll('.quantity-control button');
    decrease.addEventListener('click', () => updateCart(item.name, -1));
    increase.addEventListener('click', () => updateCart(item.name, 1));
    line.querySelector('.cart-remove').addEventListener('click', () => removeFromCart(item.name));
    lines.append(line);
  });
}

function updateCart(name, change) {
  const item = cart.find((entry) => entry.name === name);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.name !== name);
  saveCart();
  renderCart();
}

function removeFromCart(name) {
  cart = cart.filter((entry) => entry.name !== name);
  saveCart();
  renderCart();
}

function addToCart(name, category) {
  const existing = cart.find((entry) => entry.name === name);
  if (existing) existing.quantity += 1;
  else cart.push({ name, category, quantity: 1 });
  saveCart();
  renderCart();
  cartDialog.showModal();
}

getSearchableProducts().forEach((product) => {
  if (product.card.classList.contains('sold-out-card')) return;
  const info = product.card.querySelector('.catalogue-card-info, .product-info');
  if (!info) return;
  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.className = 'quick-add';
  addButton.textContent = 'Quick add preview';
  addButton.addEventListener('click', () => addToCart(product.name, product.category));
  info.append(addButton);
});

document.querySelectorAll('.cart-action, .dock-cart').forEach((button) => button.addEventListener('click', () => cartDialog.showModal()));
cartDialog.querySelector('[data-close-cart]').addEventListener('click', () => cartDialog.close());
renderCart();

document.querySelectorAll('.play-button').forEach((button) => {
  button.addEventListener('click', () => {
    window.alert('The real Instagram reel will load here only after a visitor taps play.');
  });
});

