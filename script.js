// Dados do catálogo: centralizam produtos, preços e imagens para manter consistência
const catalog = [
  {
    id: 'aurora-espresso',
    nome: 'Aurora Espresso',
    name: 'Aurora Espresso',
    categoria: 'quente',
    category: 'quente',
    section: 'coffee',
    descricao: 'Espresso intenso, com crema dourada e aroma marcante.',
    description: 'Espresso intenso, com crema dourada e aroma marcante.',
    preco: 8,
    price: 8,
    imagem: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    alt: 'Aurora Espresso — espresso servido em xícara pequena com crema dourada e aroma intenso.',
    badge: 'Mais pedido',
    feature: true
  },
  {
    id: 'latte-dourado',
    nome: 'Latte Dourado',
    name: 'Latte Dourado',
    categoria: 'quente',
    category: 'quente',
    section: 'coffee',
    descricao: 'Espresso equilibrado com leite vaporizado e espuma cremosa.',
    description: 'Espresso equilibrado com leite vaporizado e espuma cremosa.',
    preco: 13,
    price: 13,
    imagem: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    alt: 'Latte Dourado — bebida cremosa em xícara com leite vaporizado e espuma dourada.',
    badge: 'Favorito',
    feature: true
  },
  {
    id: 'cappuccino-cremoso',
    nome: 'Cappuccino Cremoso',
    name: 'Cappuccino Cremoso',
    categoria: 'quente',
    category: 'quente',
    section: 'coffee',
    descricao: 'Café, leite e espuma em uma combinação clássica.',
    description: 'Café, leite e espuma em uma combinação clássica.',
    preco: 12,
    price: 12,
    imagem: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    alt: 'Cappuccino Cremoso — café com leite e espuma cremosa em xícara clássica.',
    badge: 'Clássico'
  },
  {
    id: 'mocha-cosmico',
    nome: 'Mocha Cósmico',
    name: 'Mocha Cósmico',
    categoria: 'quente',
    category: 'quente',
    section: 'coffee',
    descricao: 'Espresso com chocolate e leite cremoso.',
    description: 'Espresso com chocolate e leite cremoso.',
    preco: 15,
    price: 15,
    imagem: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
    alt: 'Mocha Cósmico — café com chocolate e leite cremoso em bebida quente.',
    badge: 'Novo nível'
  },
  {
    id: 'macchiato-eclipse',
    nome: 'Macchiato Eclipse',
    name: 'Macchiato Eclipse',
    categoria: 'quente',
    category: 'quente',
    section: 'coffee',
    descricao: 'Espresso intenso com uma delicada camada de espuma.',
    description: 'Espresso intenso com uma delicada camada de espuma.',
    preco: 11,
    price: 11,
    imagem: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    alt: 'Macchiato Eclipse — espresso curto com espuma delicada e aroma intenso.',
    badge: 'Intenso'
  },
  {
    id: 'aurora-iced-latte',
    nome: 'Aurora Iced Latte',
    name: 'Aurora Iced Latte',
    categoria: 'gelado',
    category: 'gelado',
    section: 'coffee',
    descricao: 'Café, leite gelado e gelo em uma bebida refrescante.',
    description: 'Café, leite gelado e gelo em uma bebida refrescante.',
    preco: 14,
    price: 14,
    imagem: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    alt: 'Aurora Iced Latte — café gelado com leite, gelo e aparência refrescante.',
    badge: 'Gelado'
  },
  {
    id: 'mocha-ice-galaxy',
    nome: 'Mocha Ice Galaxy',
    name: 'Mocha Ice Galaxy',
    categoria: 'gelado',
    category: 'gelado',
    section: 'coffee',
    descricao: 'Café gelado com chocolate, leite e cobertura cremosa.',
    description: 'Café gelado com chocolate, leite e cobertura cremosa.',
    preco: 17,
    price: 17,
    imagem: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80',
    alt: 'Mocha Ice Galaxy — café gelado com chocolate, leite e cobertura cremosa.',
    badge: 'Queridinho',
    feature: true
  },
  {
    id: 'caramelo-ice',
    nome: 'Caramelo Ice',
    name: 'Caramelo Ice',
    categoria: 'gelado',
    category: 'gelado',
    section: 'coffee',
    descricao: 'Café gelado com leite e calda de caramelo.',
    description: 'Café gelado com leite e calda de caramelo.',
    preco: 16,
    price: 16,
    imagem: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    alt: 'Caramelo Ice — café gelado com calda de caramelo e gelo em copo longo.',
    badge: 'Adorado'
  },
  {
    id: 'cold-brew-solar',
    nome: 'Cold Brew Solar',
    name: 'Cold Brew Solar',
    categoria: 'gelado',
    category: 'gelado',
    section: 'coffee',
    descricao: 'Café extraído a frio, com sabor suave e refrescante.',
    description: 'Café extraído a frio, com sabor suave e refrescante.',
    preco: 15,
    price: 15,
    imagem: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    alt: 'Cold Brew Solar — café extraído a frio com sabor suave e refrescante.',
    badge: 'Suave'
  },
  {
    id: 'frappe-universo',
    nome: 'Frappé Universo',
    name: 'Frappé Universo',
    categoria: 'gelado',
    category: 'gelado',
    section: 'coffee',
    descricao: 'Bebida cremosa batida com café, gelo e cobertura.',
    description: 'Bebida cremosa batida com café, gelo e cobertura.',
    preco: 18,
    price: 18,
    imagem: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80',
    alt: 'Frappé Universo — bebida cremosa batida com café, gelo e cobertura.',
    badge: 'Queridinho',
    feature: true
  },
  {
    id: 'churros-classico',
    nome: 'Churros Clássico',
    name: 'Churros Clássico',
    categoria: 'churro',
    category: 'churro',
    section: 'churro',
    descricao: 'Churros dourados com açúcar e canela.',
    description: 'Churros dourados com açúcar e canela.',
    preco: 9,
    price: 9,
    imagem: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    alt: 'Churros Clássico — churros dourados com açúcar e canela.',
    badge: 'Clássico'
  },
  {
    id: 'churros-recheado',
    nome: 'Churros Recheado',
    name: 'Churros Recheado',
    categoria: 'churro',
    category: 'churro',
    section: 'churro',
    descricao: 'Churros recheados com doce de leite.',
    description: 'Churros recheados com doce de leite.',
    preco: 12,
    price: 12,
    imagem: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
    alt: 'Churros Recheado — churros com recheio de doce de leite e massa crocante.',
    badge: 'Recheado'
  },
  {
    id: 'churros-choco-power',
    nome: 'Churros Choco Power',
    name: 'Churros Choco Power',
    categoria: 'churro',
    category: 'churro',
    section: 'churro',
    descricao: 'Churros com recheio de chocolate e cobertura generosa.',
    description: 'Churros com recheio de chocolate e cobertura generosa.',
    preco: 14,
    price: 14,
    imagem: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    alt: 'Churros Choco Power — churros com recheio de chocolate e cobertura generosa.',
    badge: 'Chocolate'
  },
  {
    id: 'churros-galaxy',
    nome: 'Churros Galaxy',
    name: 'Churros Galaxy',
    categoria: 'churro',
    category: 'churro',
    section: 'churro',
    descricao: 'Churros com recheio de chocolate, doce de leite e finalização especial.',
    description: 'Churros com recheio de chocolate, doce de leite e finalização especial.',
    preco: 16,
    price: 16,
    imagem: 'https://images.unsplash.com/photo-1631466635184-7990f0b8d42f?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1631466635184-7990f0b8d42f?auto=format&fit=crop&w=900&q=80',
    alt: 'Churros Galaxy — churros premium com recheio de chocolate e doce de leite.',
    badge: 'Item raro'
  },
  {
    id: 'mini-churros-solar',
    nome: 'Mini Churros Solar',
    name: 'Mini Churros Solar',
    categoria: 'churro',
    category: 'churro',
    section: 'churro',
    descricao: 'Porção de mini churros para compartilhar.',
    description: 'Porção de mini churros para compartilhar.',
    preco: 10,
    price: 10,
    imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    alt: 'Mini Churros Solar — porção de mini churros dourados, prontos para compartilhar.',
    badge: 'Compartilhar'
  }
];

const productMap = Object.fromEntries(catalog.map((item) => [item.id, item]));

const promoCombos = [
  {
    id: 'combo-despertar-solar',
    nome: 'Combo Despertar Solar',
    name: 'Combo Despertar Solar',
    price: 19.9,
    originalPrice: 17,
    items: [
      { id: 'aurora-espresso', quantity: 1 },
      { id: 'churros-classico', quantity: 1 }
    ],
    imagem: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Combo Despertar Solar — Aurora Espresso com Churros Clássico em mesa de café acolhedora.'
  },
  {
    id: 'combo-pausa-cosmica',
    nome: 'Combo Pausa Cósmica',
    name: 'Combo Pausa Cósmica',
    price: 27.9,
    originalPrice: 25,
    items: [
      { id: 'latte-dourado', quantity: 1 },
      { id: 'churros-recheado', quantity: 1 }
    ],
    imagem: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80',
    alt: 'Combo Pausa Cósmica — Latte Dourado com Churros Recheado em composição premium.'
  },
  {
    id: 'combo-eclipse-gelado',
    nome: 'Combo Eclipse Gelado',
    name: 'Combo Eclipse Gelado',
    price: 29.9,
    originalPrice: 24,
    items: [
      { id: 'aurora-iced-latte', quantity: 1 },
      { id: 'mini-churros-solar', quantity: 1 }
    ],
    imagem: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
    alt: 'Combo Eclipse Gelado — Aurora Iced Latte com Mini Churros Solar em apresentação refrescante.'
  },
  {
    id: 'combo-energia-maxima',
    nome: 'Combo Energia Máxima',
    name: 'Combo Energia Máxima',
    price: 34.9,
    originalPrice: 32,
    items: [
      { id: 'frappe-universo', quantity: 1 },
      { id: 'churros-choco-power', quantity: 1 }
    ],
    imagem: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Combo Energia Máxima — Frappé Universo com Churros Choco Power em cenário de café premium.'
  }
];

const menuGrid = document.querySelector('#menu-grid');
const churroGrid = document.querySelector('#churro-grid');
const favoritesGrid = document.querySelector('#favorites-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const coffeeSelector = document.querySelector('#coffee-selector');
const dessertSelector = document.querySelector('#dessert-selector');
const promoList = document.querySelector('#promo-list');
const itemCounter = document.querySelector('#item-counter');
const comboItems = document.querySelector('#combo-items');
const subtotalValue = document.querySelector('#subtotal-value');
const totalValue = document.querySelector('#total-value');
const checkoutOutput = document.querySelector('#checkout-output');

let selectedFilter = 'all';
let combo = [];

const money = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(value);

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getProductName(item) {
  return item.nome || item.name || 'Produto';
}

function getProductPrice(item) {
  return item.preco ?? item.price ?? 0;
}

function getProductDescription(item) {
  return item.descricao || item.description || '';
}

function getProductImage(item) {
  return item.imagem || item.image || '';
}

function getProductAlt(item) {
  return item.alt || `${getProductName(item)} — ${getProductDescription(item)}`;
}

function renderMenu() {
  const items = catalog.filter((item) => item.section === 'coffee' && (selectedFilter === 'all' || item.category === selectedFilter));

  menuGrid.innerHTML = items.map((item) => `
    <article class="product-card ${item.feature ? 'featured' : ''}">
      <div class="product-visual">
        <span class="product-badge">${item.badge}</span>
        <img src="${getProductImage(item)}" alt="${getProductAlt(item)}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80';" />
      </div>
      <div class="product-body">
        <div class="product-header">
          <h3>${getProductName(item)}</h3>
          <span class="price-tag">${money(getProductPrice(item))}</span>
        </div>
        <div class="product-meta">${getProductDescription(item)}</div>
        <div class="tag-row">
          <span class="item-tag">${capitalize(item.category)}</span>
          <button class="add-btn" type="button" data-add-item="${item.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderChurros() {
  const items = catalog.filter((item) => item.section === 'churro');

  churroGrid.innerHTML = items.map((item) => `
    <article class="churro-card">
      <div class="churro-visual">
        <span class="churro-badge">${item.badge}</span>
        <img src="${getProductImage(item)}" alt="${getProductAlt(item)}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80';" />
      </div>
      <div class="churro-body">
        <div class="churro-header">
          <h3>${getProductName(item)}</h3>
          <span class="price-tag">${money(getProductPrice(item))}</span>
        </div>
        <div class="churro-meta">${getProductDescription(item)}</div>
        <div class="tag-row">
          <span class="item-tag">${capitalize(item.category)}</span>
          <button class="add-btn" type="button" data-add-item="${item.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderFavorites() {
  const ids = ['mocha-ice-galaxy', 'frappe-universo', 'churros-galaxy', 'latte-dourado'];
  const items = ids.map((id) => productMap[id]);

  favoritesGrid.innerHTML = items.map((item) => `
    <article class="favorite-card">
      <div class="favorite-visual">
        <span class="favorite-badge">Queridinho da semana</span>
        <img src="${getProductImage(item)}" alt="${getProductAlt(item)}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80';" />
      </div>
      <div class="favorite-body">
        <div class="favorite-header">
          <h3>${getProductName(item)}</h3>
          <span class="price-tag">${money(getProductPrice(item))}</span>
        </div>
        <div class="favorite-meta">${getProductDescription(item)}</div>
        <div class="tag-row">
          <span class="item-tag">Especial</span>
          <button class="add-btn" type="button" data-add-item="${item.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCoffeeSelector() {
  const items = catalog.filter((item) => item.section === 'coffee');

  coffeeSelector.innerHTML = items.map((item) => `
    <div class="select-card">
      <div>
        <strong>${getProductName(item)}</strong>
        <span>${money(getProductPrice(item))}</span>
      </div>
      <button type="button" aria-label="Adicionar ${getProductName(item)} ao combo" data-add-item="${item.id}">+</button>
    </div>
  `).join('');
}

function renderDessertSelector() {
  const items = catalog.filter((item) => item.section === 'churro');

  dessertSelector.innerHTML = items.map((item) => `
    <div class="select-card">
      <div>
        <strong>${getProductName(item)}</strong>
        <span>${money(getProductPrice(item))}</span>
      </div>
      <button type="button" aria-label="Adicionar ${getProductName(item)} ao combo" data-add-item="${item.id}">+</button>
    </div>
  `).join('');
}

function renderPromoCombos() {
  promoList.innerHTML = promoCombos.map((comboOption) => {
    const original = comboOption.originalPrice ?? comboOption.price;
    const discount = original - comboOption.price;

    return `
      <div class="promo-card">
        <div class="promo-visual">
          <img src="${comboOption.imagem}" alt="${comboOption.alt}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80';" />
        </div>
        <div class="promo-info">
          <strong>${comboOption.name}</strong>
          <small>${comboOption.items.map((entry) => `${productMap[entry.id].name} x${entry.quantity}`).join(' · ')}</small>
        </div>
        <div class="promo-price">
          <strong>${money(comboOption.price)}</strong>
          <small>${discount > 0 ? `Economia ${money(discount)}` : 'Preço promocional'}</small>
        </div>
        <button class="add-btn" type="button" data-add-promo="${comboOption.id}">Add</button>
      </div>
    `;
  }).join('');
}

function getComboTotal() {
  return combo.reduce((sum, item) => {
    if (item.isPromo) {
      return sum + (item.price * item.quantity);
    }

    return sum + (productMap[item.id].price * item.quantity);
  }, 0);
}

function renderComboSummary() {
  if (!combo.length) {
    comboItems.innerHTML = '<div class="empty-combo">Seu combo está vazio. Adicione cafés, churros ou um combo promocional para visualizar o resumo.</div>';
    subtotalValue.textContent = money(0);
    totalValue.textContent = money(0);
    itemCounter.textContent = '0 itens';
    checkoutOutput.innerHTML = '<strong>Pedido demonstrativo:</strong> selecione pelo menos um item para ver o resumo final.';
    return;
  }

  const total = getComboTotal();
  const totalItems = combo.reduce((sum, item) => sum + item.quantity, 0);

  comboItems.innerHTML = combo.map((entry) => {
    const displayName = entry.isPromo ? entry.name : productMap[entry.id].name;
    const unitPrice = entry.isPromo ? entry.price : productMap[entry.id].price;
    const lineTotal = unitPrice * entry.quantity;

    return `
      <div class="combo-row">
        <div>
          <h4>${displayName}</h4>
          <small>${money(unitPrice)} cada</small>
        </div>
        <div class="qty-controls">
          <button type="button" data-adjust-qty="${entry.id}" data-adjust="-1" aria-label="Diminuir quantidade de ${displayName}">-</button>
          <span>${entry.quantity}</span>
          <button type="button" data-adjust-qty="${entry.id}" data-adjust="1" aria-label="Aumentar quantidade de ${displayName}">+</button>
        </div>
        <div>
          <div class="line-price">${money(lineTotal)}</div>
          <button class="remove-item" type="button" data-remove-item="${entry.id}">Remover</button>
        </div>
      </div>
    `;
  }).join('');

  itemCounter.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
  subtotalValue.textContent = money(total);
  totalValue.textContent = money(total);
  checkoutOutput.innerHTML = '<strong>Pedido demonstrativo:</strong> ainda não será enviado para nenhum backend ou cafeteria real.';
}

function addToCombo(productId, quantity = 1) {
  const existing = combo.find((entry) => entry.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    combo.push({ id: productId, quantity, isPromo: false, name: productMap[productId].name, price: productMap[productId].price });
  }

  renderComboSummary();
}

function adjustQty(productId, delta) {
  const item = combo.find((entry) => entry.id === productId);

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    combo = combo.filter((entry) => entry.id !== productId);
  }

  renderComboSummary();
}

function removeItem(productId) {
  combo = combo.filter((entry) => entry.id !== productId);
  renderComboSummary();
}

function resetCombo() {
  combo = [];
  renderComboSummary();
}

function addPromoCombo(promoId) {
  const promo = promoCombos.find((entry) => entry.id === promoId);

  if (!promo) return;

  const existing = combo.find((entry) => entry.id === promoId);

  if (existing) {
    existing.quantity += 1;
  } else {
    combo.push({
      id: promoId,
      name: promo.name,
      price: promo.price,
      quantity: 1,
      isPromo: true,
      originalPrice: promo.originalPrice
    });
  }

  renderComboSummary();
}

function finalizeOrder() {
  if (!combo.length) {
    checkoutOutput.innerHTML = '<strong>Selecione ao menos um item</strong> antes de finalizar a demonstração do pedido.';
    return;
  }

  const total = getComboTotal();
  const lines = combo.map((entry) => {
    const label = entry.isPromo ? `${entry.name}` : `${productMap[entry.id].name}`;
    const amount = entry.isPromo ? entry.price * entry.quantity : productMap[entry.id].price * entry.quantity;
    return `- ${label} x${entry.quantity}: ${money(amount)}`;
  }).join('<br>');

  checkoutOutput.innerHTML = `
    <strong>Resumo demonstrativo do pedido</strong><br>
    ${lines}<br><br>
    <strong>Total: ${money(total)}</strong><br>
    Este é um exemplo visual e não representa um pedido enviado para uma cafeteria real.
  `;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderMenu();
  });
});

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add-item]');
  const promoButton = event.target.closest('[data-add-promo]');
  const qtyButton = event.target.closest('[data-adjust-qty]');
  const removeButton = event.target.closest('[data-remove-item]');

  if (addButton) {
    addToCombo(addButton.dataset.addItem);
  }

  if (promoButton) {
    addPromoCombo(promoButton.dataset.addPromo);
  }

  if (qtyButton) {
    adjustQty(qtyButton.dataset.adjustQty, Number(qtyButton.dataset.adjust));
  }

  if (removeButton) {
    removeItem(removeButton.dataset.removeItem);
  }
});

document.querySelector('#clear-combo').addEventListener('click', resetCombo);
document.querySelector('#finish-order').addEventListener('click', finalizeOrder);

const contactForm = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    feedback.textContent = 'Preencha todos os campos antes de enviar a mensagem demonstrativa.';
    return;
  }

  feedback.textContent = 'Esta é uma demonstração: nenhum dado foi enviado para um servidor real.';
  contactForm.reset();
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-principal');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

renderMenu();
renderChurros();
renderFavorites();
renderCoffeeSelector();
renderDessertSelector();
renderPromoCombos();
renderComboSummary();
