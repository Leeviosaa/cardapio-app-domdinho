const menuData = {
    pizzas: [
        {
            name: "Alho",
            ingredients: "Mussarela e alho frito.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/alho.png"
        },
        {
            name: "Atum",
            ingredients: "Atum e cebola.",
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/atum.png"
        },
        {
            name: "Atum II",
            ingredients: "Atum, cebola e mussarela, ou catupiry original.",
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/atumii.png"
        },
        {
            name: "Bacon",
            ingredients: "Bacon e mussarela.",
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/bacon.png"
        },
        {
            name: "Baiacatu",
            ingredients: "Mussarela, calabresa, catupiry original e cebola.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/baiacatu.png"
        },
        {
            name: "Baiana",
            ingredients: "Calabresa moída, ovos, pimenta, cebola e mussarela.",
            price: "R$ 52,99 - R$ 41,99",
            image: "imagens/baiana.png"
        },
        {
            name: "Batata palha",
            ingredients: "Mussarela e batata palha.",
            price: "R$ 53,99 - R$ 33,99",
            image: "imagens/batatapalha.png"
        },
        {
            name: "Bauru",
            ingredients: "Presunto, mussarela e tomate.",
            price: "R$ 47,99 - R$ 36,99",
            image: "imagens/bauru.png"
        },
        {
            name: "Brócolis",
            ingredients: "Brócolis, mussarela e alho frito.",
            price: "R$ 53,99 - R$ 42,99",
            image: "imagens/brocolis.png"
        },
        {
            name: "Caipira",
            ingredients: "Frango, milho, mussarela, catupiry original e bacon.",
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/caipira.png"
        },
        {
            name: "Caiçara",
            ingredients: "Calabresa moída, frango, catupiry original, bacon e batata palha.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/caicara.png"
        },
        {
            name: "Calabresa",
            ingredients: "Calabresa e cebola.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/calabresa.png"
        },
        {
            name: "Calabresa Especial",
            ingredients: "Calabresa, mussarela, barbecue e pimenta biquinho.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/calabresaespecial.png"
        },
        {
            name: "Calacatu",
            ingredients: "Calabresa, catupiry original e cebola.",
            price: "R$ 53,99 - R$ 42,99",
            image: "imagens/calacatu.png"
        },
        {
            name: "Camarão",
            ingredients: "Camarão e mussarela.",
            price: "R$ 75,99 - R$ 64,99",
            image: "imagens/camarao.png"
        },
        {
            name: "Camarão Especial",
            ingredients: "Camarão, mussarela e catupiry original.",
            price: "R$ 79,99 - R$ 68,99",
            image: "imagens/camaraoespecial.png"
        },
        {
            name: "Carne Seca",
            ingredients: "Carne seca, mussarela e cebola.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/carneseca.png"
        },
        {
            name: "Carne Seca Especial",
            ingredients: "Carne seca, ovos, milho, ervilha, palmito, catupiry original e cebola.",
            price: "R$ 68,99 - R$ 57,99",
            image: "imagens/carnesecaespecial.png"
        },
        {
            name: "Delicia",
            ingredients: "Calabresa, bacon, mussarela e cheddar.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/delicia.png"
        },
        {
            name: "Doritos",
            ingredients: "Mussarela, cheddar, doritos e pimenta.",
            price: "R$ 61,99 - R$ 50,99",
            image: "imagens/doritos.png"
        },
        {
            name: "Francesa",
            ingredients: "Presunto, mussarela, catupiry original, cebola e bacon.",
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/francesa.png"
        },
        {
            name: "Frango",
            ingredients: "Frango e catupiry original.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/frango.png"
        },
        {
            name: "Frango Especial",
            ingredients: "Frango, milho, ervilha, palmito, cebola, mussarela e bacon.",
            price: "R$ 61,99 - R$ 45,99",
            image: "imagens/frangoespecial.png"
        },
        {
            name: "Itália",
            ingredients: "Frango, cebola, cream cheese, bacon e pimenta.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/italia.png"
        },
        {
            name: "Leopoldina",
            ingredients: "Peito de peru, cream cheese, mussarela, alho frito e tomate.",
            price: "R$ 61,99 - R$ 50,99",
            image: "imagens/leopoldina.png"
        },
        {
            name: "Lombo",
            ingredients: "Lombo, cebola, catupiry original, mussarela e bacon.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/lombo.png"
        },
        {
            name: "Marguerita",
            ingredients: "Mussarela, manjericão, tomate e parmesão.",
            price: "R$ 49,99 - R$ 38,99",
            image: "imagens/marguerita.png"
        },
        {
            name: "Milho",
            ingredients: "Mussarela e milho.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/milho.png"
        },
        {
            name: "Mussarela",
            ingredients: "Mussarela e tomate.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/mussarela.png"
        },
        {
            name: "Napolitana",
            ingredients: "Mussarela, tomate e parmesão.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/napolitana.png"
        },
        {
            name: "Palmito",
            ingredients: "Palmito, mussarela e bacon.",
            price: "R$ 55,99 - R$ 44,99",
            image: "imagens/palmito.png"
        },
        {
            name: "Peito de peru",
            ingredients: "Peito de peru, catupiry original e bacon.",
            price: "R$ 52,99 - R$ 41,99",
            image: "imagens/peitodeperu.png"
        },
        {
            name: "Pepperoni",
            ingredients: "Pepperoni e mussarela.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/pepperoni.png"
        },
        {
            name: "Pizza Costela",
            ingredients: "Costela desfiada, mussarela, pimenta biquinho e molho barbecue.",
            price: "R$ 68,99 - R$ 57,99",
            image: "imagens/costela.png"
        },
        {
            name: "Pizza Hot Holl",
            ingredients: "Atum em pedaço, mussarela, cream cheese, cebolinha, alho frito, pimenta biquinho e molho tarê.",
            price: "R$ 76,99 - R$ 65,99",
            image: "imagens/hotholl.png"
        },
        {
            name: "Pizza na brasa",
            ingredients: "Linguiça toscana na brasa, mussarela, vinagrete e pimenta biquinho.",
            price: "R$ 60,99 - R$ 49,99",
            image: "imagens/nabrasa.png"
        },
        {
            name: "Pizza Nobre Especial",
            ingredients: "Presunto, milho, cebola, bacon, mussarela, parmesão e palmito.",
            price: "R$ 59,99 - R$ 48,99",
            image: "imagens/nobreespecial.png"
        },
        {
            name: "Pizza Philadhelpia",
            ingredients: "Peito de peru, cream cheese, tomate seco, manjericão, oregano e azeitona.",
            price: "R$ 60,99 - R$ 49,99",
            image: "imagens/philadhelpia.png"
        },
        {
            name: "Pizza Temaki",
            ingredients: "Atum em pedaço, cream cheese, molho tarê e cebolinha.",
            price: "R$ 64,99 - R$ 53,99",
            image: "imagens/temaki.png"
        },
        {
            name: "Pizza Tomate Seco",
            ingredients: "Brócolis, ervilha, milho, mussarela e tomate seco.",
            price: "R$ 59,99 - R$ 48,99",
            image: "imagens/tomateseco.png"
        },
        {
            name: "Portuguêsa",
            ingredients: "Presunto, mussarela, ovos, palmito, ervilha e cebola.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/portuguesa.png"
        },
        {
            name: "Portuguêsa Especial",
            ingredients: "Lombo, milho, ervilha, ovos, palmito, champignon, cebola, mussarela e bacon.",
            price: "R$ 61,99 - R$ 49,99",
            image: "imagens/portuguesaespecial.png"
        },
        {
            name: "Provolone",
            ingredients: "Mussarela, provolone e bacon.",
            price: "R$ 61,99 - R$ 44,99",
            image: "imagens/provolone.png"
        },
        {
            name: "Quatro Queijos",
            ingredients: "Mussarela, provolone, parmesão e gorgonzola.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/quatroqueijo.png"
        },
        {
            name: "Toscana",
            ingredients: "Calabresa, cebola e mussarela.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/toscana.png"
        },
    ],
    bordas: [
        {
            name: "Catupiry Original",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/catupiry.png"
        },
        {
            name: "Cheddar",
            ingredients: "Recheio de borda.",
            price: "R$ 5,00",
            image: "imagens/cheddar.png"
        },
        {
            name: "Chocolate ao leite",
            ingredients: "Recheio de borda.",
            price: "R$ 8,00",
            image: "imagens/chocolateborda.png"
        },
        {
            name: "Chocolate branco",
            ingredients: "Recheio de borda.",
            price: "R$ 8,00",
            image: "imagens/chocolatebranco.png"
        },
        {
            name: "Cream Cheese",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/creamcheese.png"
        },
        {
            name: "Doce de leite",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/docedeleite.png"
        },
        {
            name: "Goiabada",
            ingredients: "Recheio de borda.",
            price: "R$ 8,00",
            image: "imagens/goiabada.png"
        },
        {
            name: "Pão de Alho",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/paodealho.png"
        },
        {
            name: "Requeijão",
            ingredients: "Recheio de borda.",
            price: "R$ 5,00",
            image: "imagens/requeijao.png"
        }
    ],
    doces: [
        { 
            name: "Abacaxi nevada", 
            ingredients: "Acabaxi, chocolate branco e canela.", 
            price: "R$ 55,99 - R$ 44,99",
            image: "imagens/abacaxinevada.png"
        },
        { 
            name: "Banana nevada", 
            ingredients: "Banana, chocolate branco e canela.", 
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/banananevada.png"
        },
        { 
            name: "Banana", 
            ingredients: "Banana, leite condensado e canela.", 
            price: "R$ 44,99 - R$ 33,88",
            image: "imagens/banana.png"
        },
        { 
            name: "Branca de neve", 
            ingredients: "Chocolate branco, coco ralado, leite condensado e morango.", 
            price: "R$ 49,99 - R$ 43,99",
            image: "imagens/brancadeneve.png"
        },
        { 
            name: "Branca de neve II", 
            ingredients: "Chocolate branco, leite condensado, morango e leite em pó.", 
            price: "R$ 54,99 - R$ 47,99",
            image: "imagens/brancadeneveii.png"
        },
        { 
            name: "Chocolate", 
            ingredients: "Chocolate ao leite e granulado", 
            price: "R$ 43,99 - R$ 32,99",
            image: "imagens/chocolate.png"
        },
        { 
            name: "M&Ms", 
            ingredients: "Chocolate ao leite, M&Ms e granulado.", 
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/mms.png"
        },
        { 
            name: "Morango", 
            ingredients: "Chocolate ao leite, chocolate branco e bolacha oreo.", 
            price: "R$ 53,99 - R$ 42,99",
            image: "imagens/morango.png"
        },
        { 
            name: "Oreo", 
            ingredients: "Chocolate ao leite, chocolate branco e bolacha oreo.", 
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/oreo.png"
        },
        { 
            name: "Romeo e Julieta", 
            ingredients: "Mussarela e goiabada.", 
            price: "R$ 47,99 - R$ 36,99",
            image: "imagens/romeoejulieta.png"
        },
    ],
    bebidas: [
        { 
            name: "Coca-Cola Lata 350ml", 
            ingredients: "Refrigerante 350ml.", 
            price: "R$ 6,00",
            image: "imagens/cocalata.png"
        },
        { 
            name: "Coca-Cola 2L", 
            ingredients: "Refrigerante 2 litros.", 
            price: "R$ 15,00",
            image: "imagens/coca2l.png"
        },
        { 
            name: "Coca-Cola Zero 2L", 
            ingredients: "Refrigerante 2 litros.", 
            price: "R$ 18,00",
            image: "imagens/cocazero2l.png"
        },
        { 
            name: "Fanta Laranja 2L", 
            ingredients: "Refrigerante de laranja 2 litros.", 
            price: "R$ 13,00",
            image: "imagens/fantalaranja2l.png"
        },
        { 
            name: "Fanta Uva 2L", 
            ingredients: "Refrigerante de uva 2 litros.", 
            price: "R$ 13,00",
            image: "imagens/fantauva2l.png"
        },
        { 
            name: "Guaraná Antarctica 2L", 
            ingredients: "Refrigerante de guaraná 2 litros.", 
            price: "R$ 13,00",
            image: "imagens/guarana2l.png"
        },
        { 
            name: "Guaraná Convenção 2L", 
            ingredients: "Refrigerante de guaraná 2 litros.", 
            price: "R$ 8,00",
            image: "imagens/guaranaconvencao2l.png"
        },
        { 
            name: "Suco Del Valle Uva", 
            ingredients: "Suco de uva.", 
            price: "R$ 10,00",
            image: "imagens/delvaleuva.png"
        },
        { 
            name: "Suco Del Valle Laranja", 
            ingredients: "Suco de laranja.", 
            price: "R$ 10,00",
            image: "imagens/delvalelaranja.png"
        },
        { 
            name: "Heineken 269ml", 
            ingredients: "Cerveja.", 
            price: "R$ 7,00",
            image: "imagens/heineken.png"
        },
        { 
            name: "Heineken long neck", 
            ingredients: "Cerveja.", 
            price: "R$ 10,00",
            image: "imagens/heinekenlongneck.png"
        },
        { 
            name: "Skol", 
            ingredients: "Cerveja.", 
            price: "R$ 5,00",
            image: "imagens/skol.png"
        },
        { 
            name: "Budweiser 269ml", 
            ingredients: "Cerveja.", 
            price: "R$ 5,00",
            image: "imagens/budweiser.png"
        },
        { 
            name: "Original 269ml", 
            ingredients: "Cerveja.", 
            price: "R$ 6,00",
            image: "imagens/original.png"
        },
        { 
            name: "Água", 
            ingredients: "Água.", 
            price: "R$ 3,00",
            image: "imagens/agua.png"
        },
        { 
            name: "Vinho Pérgola Suave 1L", 
            ingredients: "Vinho Suave.", 
            price: "R$ 30,00",
            image: "imagens/vinhopergola.png"
        },
    ]
};

let cart = [];

const menu = document.getElementById('menu');
const cartContainer = document.createElement('div');
cartContainer.id = 'cart';
document.body.appendChild(cartContainer);

function showCategory(category) {
    menu.innerHTML = '';

    const items = menuData[category];
    if (!items) return;

    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'pizza-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
                <h2>${item.name}</h2>
                <span>${item.price}</span>
                <p class="ingredients" id="ingredients-${category}-${index}">Ingredientes: ${item.ingredients}</p>
                <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
        `;

        itemDiv.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                const ingredients = document.getElementById(`ingredients-${category}-${index}`);
                ingredients.classList.toggle('show');
            }
        });

        itemDiv.querySelector('.add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            handleAddToCart(category, index);
        });

        menu.appendChild(itemDiv);
    });

    updateCart();
}

function handleAddToCart(category, index) {
    const item = menuData[category][index];

    if (category === 'pizzas' || category === 'doces') {
        showSizeModal(item);
    } else {
        const price = parseFloat(item.price.replace('R$', '').replace(',', '.').trim());
        addToCart(item, price);
    }
}

// === ESCOLHA DO TAMANHO ===
function showSizeModal(item) {
    const modal = createModal(`
        <h2>Escolha o tamanho</h2>
        <button onclick="selectSize('${item.name}', '${item.ingredients}', '${item.image}', 'Grande', '${item.price}')">Grande</button>
        <button onclick="selectSize('${item.name}', '${item.ingredients}', '${item.image}', 'Broto', '${item.price}')">Broto</button>
    `);
    document.body.appendChild(modal);
}

function selectSize(name, ingredients, image, size, priceRange) {
    document.querySelector('.modal-overlay').remove();
    const [grande, broto] = priceRange.replace(/R\$ /g, '').split(' - ').map(p => parseFloat(p.replace(',', '.')));
    const price = size === 'Grande' ? grande : broto;
    showBorderModal({ name, ingredients, image, size, price });
}

// === ESCOLHA DA BORDA ===
function showBorderModal(pizza) {
    const borders = menuData.bordas;

    // cria os botões com espaçamento uniforme
    let borderButtons = borders.map((b, i) =>
        `<button class="border-option" onclick="selectBorder('${pizza.name}', '${pizza.ingredients}', '${pizza.image}', '${pizza.size}', ${pizza.price}, ${i})">${b.name} - ${b.price}</button>`
    ).join('');

    const modal = createModal(`
        <h2>Escolha uma borda</h2>
        <div class="borders-container">
            ${borderButtons}
            <button class="border-option" onclick="selectBorder('${pizza.name}', '${pizza.ingredients}', '${pizza.image}', '${pizza.size}', ${pizza.price}, null)">Sem borda</button>
        </div>
    `);

    document.body.appendChild(modal);
}


function selectBorder(name, ingredients, image, size, price, borderIndex) {
    document.querySelector('.modal-overlay').remove();

    let item = { name: `${name} (${size})`, ingredients, image, price };
    if (borderIndex !== null) {
        const border = menuData.bordas[borderIndex];
        const borderPrice = parseFloat(border.price.replace('R$', '').replace(',', '.'));
        item.name += ` + Borda ${border.name}`;
        item.price = price + borderPrice;
    }

    addToCart(item, item.price);
}

// === CARRINHO ===
function addToCart(item, price) {
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1, price: parseFloat(price) });
    }
    updateCart();
}

function updateCart() {
    cartContainer.innerHTML = '<h3>🛒 Carrinho</h3>';
    if (cart.length === 0) {
        cartContainer.innerHTML += '<p>Seu carrinho está vazio.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <div class="cart-controls">
                <button onclick="changeQuantity(${index}, -1)">-</button>
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });

    const total = getCartTotal();
    cartContainer.innerHTML += `<div class="cart-total">Total: R$ ${total.toFixed(2).replace('.', ',')}</div>`;
    cartContainer.innerHTML += `<div class="cart-buttons"><button id="checkoutBtn" onclick="openCheckout()">Finalizar Pedido</button></div>`;
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateCart();
}

// === CHECKOUT (ENTREGA E PAGAMENTO) ===
function openCheckout() {
    const modal = createModal(`
        <h2>Finalizar Pedido</h2>
        <input type="text" id="clientName" placeholder="Nome completo" required>
        <input type="text" id="phone" placeholder="Telefone (WhatsApp)" required>
        <input type="text" id="street" placeholder="Rua" required>
        <input type="text" id="number" placeholder="Número" required>
        <input type="text" id="complement" placeholder="Complemento (Exemplo: Casa, Apartamento 123)" required>
        <input type="text" id="district" placeholder="Bairro" required>
        <input type="text" id="city" placeholder="Cidade" required>
        <input type="text" id="cep" placeholder="CEP" required>
        <button onclick="calculateFreight()">Calcular Frete</button>
    `);
    document.body.appendChild(modal);
}


let deliveryData = {};

function calculateFreight() {
    // Salva os dados de entrega antes de trocar o conteúdo do modal
    deliveryData = {
        name: document.getElementById('clientName')?.value.trim() || 'Cliente',
        phone: document.getElementById('phone')?.value.trim(),
        street: document.getElementById('street')?.value.trim(),
        number: document.getElementById('number')?.value.trim(),
        complement: document.getElementById('complement')?.value.trim(),
        district: document.getElementById('district')?.value.trim(),
        city: document.getElementById('city')?.value.trim(),
        cep: document.getElementById('cep')?.value.trim()
};

    if (!deliveryData.name || !deliveryData.phone || !deliveryData.street || !deliveryData.number || !deliveryData.district || !deliveryData.city || !deliveryData.cep) {
        alert("Por favor, preencha todos os campos corretamente, incluindo o telefone.");
        return;
    }


    const city = deliveryData.city.toLowerCase();
    let freight = 10;
    if (city === 'São Bernardo do Campo' || city === 'Sao Bernardo do Campo') freight = 5;

    const modalContent = `
        <h2>Forma de Pagamento</h2>
        <div style="text-align:left; margin-top:10px;">
            <label for="paymentMethod" style="font-weight:bold;">Selecione uma opção:</label>
            <select id="paymentMethod" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ccc; margin-top:8px; font-size:1em;">
                <option value="" disabled selected>💳 Escolher forma de pagamento</option>
                <option value="Dinheiro">💵 Dinheiro</option>
                <option value="Cartão de Crédito/Débito">💳 Cartão de Crédito/Débito</option>
            </select>
        </div>


        <div id="orderSummary" style="margin-top:15px; text-align:left;">
            <p><strong>Frete:</strong> R$ ${freight.toFixed(2).replace('.', ',')}</p>
            <p><strong>Total Itens:</strong> R$ ${getCartTotal().toFixed(2).replace('.', ',')}</p>
            <p><strong>Total Geral:</strong> R$ ${(getCartTotal() + freight).toFixed(2).replace('.', ',')}</p>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:20px;">
            <button onclick="goBackToAddress()" style="background-color:#ccc; color:#000;">Voltar</button>
            <button onclick="confirmLocalOrder(${freight})" style="background-color:#ffb006;">Confirmar Pedido</button>
        </div>
    `;

    document.querySelector('.modal').innerHTML = modalContent;
}

function goBackToAddress() {
    // recria o formulário de endereço com os dados preenchidos anteriormente
    const modalContent = `
        <h2>Finalizar Pedido</h2>
        <input type="text" id="clientName" placeholder="Nome completo" value="${deliveryData.name || ''}" required>
        <input type="text" id="phone" placeholder="Telefone (WhatsApp)" value="${deliveryData.phone || ''}" required>
        <input type="text" id="street" placeholder="Rua" value="${deliveryData.street || ''}" required>
        <input type="text" id="number" placeholder="Número" value="${deliveryData.number || ''}" required>
        <input type="text" id="complement" placeholder="Complemento (Exemplo: Casa, Apartamento 123)" value="${deliveryData.complement || ''}" required>
        <input type="text" id="district" placeholder="Bairro" value="${deliveryData.district || ''}" required>
        <input type="text" id="city" placeholder="Cidade" value="${deliveryData.city || ''}" required>
        <input type="text" id="cep" placeholder="CEP" value="${deliveryData.cep || ''}" required>
        <div style="display:flex; justify-content:space-between; margin-top:20px;">
            <button onclick="closeConfirmation()" style="background-color:#ccc; color:#000;">Cancelar</button>
            <button onclick="calculateFreight()" style="background-color:#ffb006;">Calcular Frete</button>
        </div>
    `;
    document.querySelector('.modal').innerHTML = modalContent;
}

function confirmLocalOrder(freight) {
    const payment = document.getElementById('paymentMethod')?.value;

    if (!deliveryData.name || !deliveryData.phone || !deliveryData.street || !deliveryData.number || !deliveryData.district || !deliveryData.city || !deliveryData.cep) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (!payment) {
        alert("Por favor, selecione uma forma de pagamento.");
        return;
    }

    const total = getCartTotal() + freight;

    document.querySelector('.modal-overlay').remove();

    const confirmationModal = createModal(`
        <h2>✅ Pedido Confirmado com Sucesso!</h2>
        <p>Obrigado, <strong>${deliveryData.name}</strong>!</p>
        <p><strong>Telefone:</strong> ${deliveryData.phone}</p>
        <p>Seu pedido será entregue em:</p>
        <p>${deliveryData.street}, ${deliveryData.number}, ${deliveryData.complement} - ${deliveryData.district}, ${deliveryData.city} (${deliveryData.cep})</p>
        <p>Forma de pagamento: <strong>${payment}</strong></p>
        <p><strong>Total com frete:</strong> R$ ${total.toFixed(2).replace('.', ',')}</p>
        <p style="margin-top:15px;">🧡 Agradecemos pela preferência!</p>
        <button onclick="closeConfirmation()" style="margin-top:10px;">Fechar</button>
    `);

    document.body.appendChild(confirmationModal);

    cart = [];
    updateCart();
}


// === UTILITÁRIOS ===
function closeConfirmation() {
    document.querySelector('.modal-overlay').remove();
}

function createModal(content) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal">${content}</div>`;
    return overlay;
}