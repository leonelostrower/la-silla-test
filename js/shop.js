(function () {
  var PRODUCTS = {
    "FAR-101": { sku: "FAR-101", name: "Linterna recargable Faro 300", category: "Aire libre", price: 34500, color: "#c8a46a" },
    "FAR-105": { sku: "FAR-105", name: "Botella térmica 750 ml", category: "Aire libre", price: 22400, color: "#6f8a9c" },
    "FAR-107": { sku: "FAR-107", name: "Hamaca de lona y madera", category: "Aire libre", price: 41200, color: "#8c6b4a" },
    "FAR-108": { sku: "FAR-108", name: "Silla plegable de campaña", category: "Aire libre", price: 18900, color: "#4e6b52" },
    "FAR-109": { sku: "FAR-109", name: "Mochila de lona 30 L", category: "Aire libre", price: 27600, color: "#3d4a3a" },
    "FAR-110": { sku: "FAR-110", name: "Brújula de latón", category: "Aire libre", price: 8700, color: "#c4a35a" },
    "FAR-111": { sku: "FAR-111", name: "Esterilla de corcho", category: "Aire libre", price: 19800, color: "#c9a27a" },
    "FAR-112": { sku: "FAR-112", name: "Cantimplora de acero 1 L", category: "Aire libre", price: 14300, color: "#7a8b8e" },
    "FAR-113": { sku: "FAR-113", name: "Sombrero de ala ancha", category: "Aire libre", price: 16500, color: "#d4b483" },
    "FAR-114": { sku: "FAR-114", name: "Navaja de campamento", category: "Aire libre", price: 11200, color: "#5c5346" },
    "FAR-115": { sku: "FAR-115", name: "Bolsa estanca 10 L", category: "Aire libre", price: 9600, color: "#2f4a5c" },
    "FAR-116": { sku: "FAR-116", name: "Bastón de senderismo", category: "Aire libre", price: 21400, color: "#6b5344" },
    "FAR-102": { sku: "FAR-102", name: "Taza de gres esmaltada", category: "Cocina", price: 12900, color: "#9fb3a6" },
    "FAR-117": { sku: "FAR-117", name: "Cuchillo de chef 20 cm", category: "Cocina", price: 38900, color: "#8a8d90" },
    "FAR-118": { sku: "FAR-118", name: "Tabla de quebracho", category: "Cocina", price: 24600, color: "#a67c52" },
    "FAR-119": { sku: "FAR-119", name: "Olla de hierro 3 L", category: "Cocina", price: 45200, color: "#3e3a36" },
    "FAR-120": { sku: "FAR-120", name: "Delantal de lino", category: "Cocina", price: 13400, color: "#e6d5c3" },
    "FAR-121": { sku: "FAR-121", name: "Molinillo de café manual", category: "Cocina", price: 19800, color: "#6d5844" },
    "FAR-122": { sku: "FAR-122", name: "Set de tres bowls de gres", category: "Cocina", price: 22100, color: "#b7c4b1" },
    "FAR-123": { sku: "FAR-123", name: "Cucharón de madera de lenga", category: "Cocina", price: 6400, color: "#c4956a" },
    "FAR-124": { sku: "FAR-124", name: "Hervidor de acero 1,2 L", category: "Cocina", price: 28700, color: "#9aa3a8" },
    "FAR-125": { sku: "FAR-125", name: "Mantel de lino 160×220", category: "Cocina", price: 31200, color: "#efe6d6" },
    "FAR-126": { sku: "FAR-126", name: "Rallador de cuatro caras", category: "Cocina", price: 7900, color: "#b0b4b8" },
    "FAR-127": { sku: "FAR-127", name: "Fuente de horno ovalada", category: "Cocina", price: 16800, color: "#d8c3a5" },
    "FAR-103": { sku: "FAR-103", name: "Manta de lana merino", category: "Hogar", price: 58000, color: "#b5815f" },
    "FAR-128": { sku: "FAR-128", name: "Almohadón de lino 45×45", category: "Hogar", price: 14200, color: "#cfc6b8" },
    "FAR-129": { sku: "FAR-129", name: "Vela de cera de soja", category: "Hogar", price: 8200, color: "#f3ead7" },
    "FAR-130": { sku: "FAR-130", name: "Lámpara de mesa de cerámica", category: "Hogar", price: 33600, color: "#8e6e5a" },
    "FAR-131": { sku: "FAR-131", name: "Jarrón de gres alto", category: "Hogar", price: 18900, color: "#7d8f86" },
    "FAR-132": { sku: "FAR-132", name: "Toallón de algodón peinado", category: "Hogar", price: 21400, color: "#e8e2d6" },
    "FAR-133": { sku: "FAR-133", name: "Espejo redondo de ratán", category: "Hogar", price: 27600, color: "#c4a882" },
    "FAR-134": { sku: "FAR-134", name: "Cesto de junco", category: "Hogar", price: 11800, color: "#d2b48c" },
    "FAR-135": { sku: "FAR-135", name: "Funda de edredón queen", category: "Hogar", price: 62400, color: "#a9b4ae" },
    "FAR-136": { sku: "FAR-136", name: "Difusor de ambiente", category: "Hogar", price: 9600, color: "#b7a08a" },
    "FAR-137": { sku: "FAR-137", name: "Perchero de pie de roble", category: "Hogar", price: 34800, color: "#8b6914" },
    "FAR-138": { sku: "FAR-138", name: "Alfombra de yute 120×180", category: "Hogar", price: 45900, color: "#c2a878" },
    "FAR-104": { sku: "FAR-104", name: "Cuaderno cosido a mano", category: "Papelería", price: 9800, color: "#d9cdb4" },
    "FAR-139": { sku: "FAR-139", name: "Set de tres lápices de grafito", category: "Papelería", price: 4200, color: "#4a4a4a" },
    "FAR-140": { sku: "FAR-140", name: "Tinta negra 30 ml", category: "Papelería", price: 5600, color: "#1c1c1c" },
    "FAR-141": { sku: "FAR-141", name: "Pluma estilográfica", category: "Papelería", price: 24800, color: "#2c3e50" },
    "FAR-142": { sku: "FAR-142", name: "Agenda semanal 2027", category: "Papelería", price: 13400, color: "#e8dcc8" },
    "FAR-143": { sku: "FAR-143", name: "Sobre kraft pack ×10", category: "Papelería", price: 3100, color: "#c4a574" },
    "FAR-144": { sku: "FAR-144", name: "Carpeta de tela A4", category: "Papelería", price: 8700, color: "#5f6f64" },
    "FAR-145": { sku: "FAR-145", name: "Marcadores de página de latón", category: "Papelería", price: 4500, color: "#b08d57" },
    "FAR-146": { sku: "FAR-146", name: "Block de acuarela A5", category: "Papelería", price: 11200, color: "#f4f0e6" },
    "FAR-147": { sku: "FAR-147", name: "Sello de goma personalizable", category: "Papelería", price: 6900, color: "#8b4513" },
    "FAR-148": { sku: "FAR-148", name: "Regla de bronce 30 cm", category: "Papelería", price: 7800, color: "#cd7f32" },
    "FAR-149": { sku: "FAR-149", name: "Portaminas de aluminio", category: "Papelería", price: 5300, color: "#a8a9ad" },
    "FAR-106": { sku: "FAR-106", name: "Café de Alto Limo 500 g", category: "Almacén", price: 15600, color: "#5b4636" },
    "FAR-150": { sku: "FAR-150", name: "Miel de monte 450 g", category: "Almacén", price: 8900, color: "#e0a84a" },
    "FAR-151": { sku: "FAR-151", name: "Yerba mate suave 1 kg", category: "Almacén", price: 6200, color: "#6b7c3a" },
    "FAR-152": { sku: "FAR-152", name: "Aceite de oliva 500 ml", category: "Almacén", price: 18400, color: "#c5b358" },
    "FAR-153": { sku: "FAR-153", name: "Dulce de membrillo 400 g", category: "Almacén", price: 5400, color: "#c45c26" },
    "FAR-154": { sku: "FAR-154", name: "Té de hierbas del valle 80 g", category: "Almacén", price: 4800, color: "#7a9a6a" },
    "FAR-155": { sku: "FAR-155", name: "Harina integral 1 kg", category: "Almacén", price: 3900, color: "#d4c4a8" },
    "FAR-156": { sku: "FAR-156", name: "Sal marina en escamas 250 g", category: "Almacén", price: 4500, color: "#f2efe8" },
    "FAR-157": { sku: "FAR-157", name: "Mermelada de frutos rojos 320 g", category: "Almacén", price: 6700, color: "#8b3a4a" },
    "FAR-158": { sku: "FAR-158", name: "Nueces peladas 300 g", category: "Almacén", price: 9800, color: "#8b6914" },
    "FAR-159": { sku: "FAR-159", name: "Vinagre de manzana 500 ml", category: "Almacén", price: 5600, color: "#d4a017" },
    "FAR-160": { sku: "FAR-160", name: "Chocolate 70% cacao 100 g", category: "Almacén", price: 7200, color: "#3d2314" }
  };

  var SHIPPING = {
    estandar: { label: "Envío estándar (3 a 5 días hábiles)", price: 3500 },
    express: { label: "Envío express (24 horas)", price: 7900 },
    retiro: { label: "Retiro en el local", price: 0 }
  };

  var PAYMENT = {
    tarjeta: "Tarjeta de crédito o débito",
    transferencia: "Transferencia bancaria",
    efectivo: "Efectivo al recibir"
  };

  var VERTICALS = {
    easy: {
      attr: "data-sku",
      c: {
        count: "cart-link__count", toast: "notice",
        add: "item__add", qty: "item__qty",
        list: "cart__list", empty: "cart__empty", content: "cart__content",
        row: "line", name: "line__name", sku: "line__sku", unit: "line__price",
        quantity: "line__qty", dec: "line__dec", inc: "line__inc", total: "line__total", remove: "line__remove",
        subtotal: "totals__subtotal", shipping: "totals__shipping", grand: "totals__total",
        shipForm: "checkout__form--shipping", payForm: "checkout__form--payment",
        orderId: "order__id", address: "order__address", payment: "order__payment"
      },
      fields: {
        shipping: { name: "nombre", email: "email", phone: "telefono", address: "direccion", city: "ciudad", postal: "codigo_postal", method: "envio" },
        payment: { method: "pago", cardNumber: "tarjeta_numero", cardName: "tarjeta_nombre", cardExpiry: "tarjeta_vencimiento", cardCvv: "tarjeta_codigo" }
      },
      shippingValues: { estandar: "estandar", express: "express", retiro: "retiro" },
      paymentValues: { tarjeta: "tarjeta", transferencia: "transferencia", efectivo: "efectivo" }
    },
    medium: {
      attr: "data-product-id",
      c: {
        count: "cart-count", toast: "cart-notification",
        add: "add-to-cart", qty: "quantity-input",
        list: "cart-items", empty: "cart-empty", content: "cart-content",
        row: "cart-item", name: "cart-item__name", sku: "cart-item__sku", unit: "cart-item__price",
        quantity: "cart-item__quantity", dec: "cart-item__decrease", inc: "cart-item__increase", total: "cart-item__total", remove: "cart-item__remove",
        subtotal: "cart-subtotal", shipping: "cart-shipping", grand: "cart-total",
        shipForm: "shipping-form", payForm: "payment-form",
        orderId: "order-number", address: "shipping-address", payment: "payment-method"
      },
      fields: {
        shipping: { name: "full_name", email: "email", phone: "phone", address: "street_address", city: "city", postal: "postal_code", method: "shipping_method" },
        payment: { method: "payment_method", cardNumber: "card_number", cardName: "card_holder", cardExpiry: "card_expiry", cardCvv: "card_cvv" }
      },
      shippingValues: { estandar: "estandar", express: "express", retiro: "retiro" },
      paymentValues: { tarjeta: "tarjeta", transferencia: "transferencia", efectivo: "efectivo" }
    },
    hard: {
      attr: "data-v",
      c: {
        count: "c_6", toast: "sc-gTRrQi",
        add: "sc-bdVaJa", qty: "n_4",
        list: "u_19", empty: "e_0", content: "w_2",
        row: "r_5e", name: "t_a2", sku: "m_0d", unit: "v8_k",
        quantity: "q_b", dec: "bt_1", inc: "bt_2", total: "v8_z", remove: "bt_9",
        subtotal: "s_01", shipping: "s_02", grand: "s_03",
        shipForm: "f_a", payForm: "f_b",
        orderId: "o_n1", address: "ad_3", payment: "pm_2"
      },
      fields: {
        shipping: { name: "a1", email: "a2", phone: "a3", address: "a4", city: "a5", postal: "a6", method: "a7" },
        payment: { method: "b1", cardNumber: "b2", cardName: "b3", cardExpiry: "b4", cardCvv: "b5" }
      },
      shippingValues: { s1: "estandar", s2: "express", s3: "retiro" },
      paymentValues: { p1: "tarjeta", p2: "transferencia", p3: "efectivo" }
    }
  };

  var match = window.location.pathname.match(/\/tienda\/(easy|medium|hard)\//);
  if (!match) {
    return;
  }

  var vertical = match[1];
  var V = VERTICALS[vertical];
  var c = V.c;
  var page = (window.location.pathname.match(/([a-z]+)\.html$/) || [null, "index"])[1];
  var storageKey = "faro-tienda-" + vertical + "-";

  function load(name, fallback) {
    try {
      var raw = window.localStorage.getItem(storageKey + name);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function save(name, value) {
    try {
      window.localStorage.setItem(storageKey + name, JSON.stringify(value));
    } catch (error) {}
  }

  function money(value) {
    return "$ " + value.toLocaleString("es-AR");
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function cartLines() {
    return load("cart", []).filter(function (line) {
      return PRODUCTS[line.sku];
    }).map(function (line) {
      var product = PRODUCTS[line.sku];
      return {
        sku: product.sku,
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: line.quantity,
        total: product.price * line.quantity
      };
    });
  }

  function sumLines(lines) {
    return lines.reduce(function (sum, line) {
      return sum + line.total;
    }, 0);
  }

  function updateCart(sku, update) {
    var cart = load("cart", []);
    var line = cart.filter(function (item) {
      return item.sku === sku;
    })[0];
    if (!line) {
      line = { sku: sku, quantity: 0 };
      cart.push(line);
    }
    line.quantity = update(line.quantity);
    save("cart", cart.filter(function (item) {
      return item.quantity > 0;
    }));
  }

  function shippingMethod() {
    var form = document.querySelector("." + c.shipForm);
    if (form) {
      var checked = form.querySelector('input[name="' + V.fields.shipping.method + '"]:checked');
      if (checked) {
        return V.shippingValues[checked.value] || "estandar";
      }
    }
    var checkout = load("checkout", {});
    return (checkout.shipping && checkout.shipping.method) || "estandar";
  }

  function publishState() {
    if (vertical !== "easy") {
      return;
    }
    var state = window.__INITIAL_STATE__ = window.__INITIAL_STATE__ || {};
    var lines = cartLines();
    state.cart = {
      currency: "ARS",
      items: lines,
      itemCount: lines.reduce(function (sum, line) {
        return sum + line.quantity;
      }, 0),
      subtotal: sumLines(lines)
    };
    if (page === "envio" || page === "pago") {
      var checkout = load("checkout", {});
      var method = (checkout.shipping && checkout.shipping.method) || "estandar";
      state.checkout = {
        shipping: checkout.shipping || null,
        shippingMethod: method,
        shippingCost: SHIPPING[method].price,
        total: state.cart.subtotal + SHIPPING[method].price
      };
    }
    if (page === "gracias") {
      state.order = load("order", null);
    }
  }

  function setText(name, value) {
    var elements = document.querySelectorAll("." + c[name]);
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = value;
    }
  }

  function rowHTML(line, editable) {
    var color = PRODUCTS[line.sku] ? PRODUCTS[line.sku].color : "#ccc";
    var quantity = editable
      ? '<span class="stepper">' +
          '<button type="button" class="' + c.dec + '" aria-label="Restar uno">−</button>' +
          '<span class="' + c.quantity + '">' + line.quantity + "</span>" +
          '<button type="button" class="' + c.inc + '" aria-label="Sumar uno">+</button>' +
        "</span>"
      : '<span class="stepper stepper--static">Cant. <span class="' + c.quantity + '">' + line.quantity + "</span></span>";
    return '<li class="' + c.row + '" ' + V.attr + '="' + line.sku + '">' +
      '<span class="swatch swatch--small" style="--swatch: ' + color + '"></span>' +
      '<span class="line-body">' +
        '<span class="' + c.name + '">' + escapeHTML(line.name) + "</span>" +
        '<span class="' + c.sku + '">' + line.sku + "</span>" +
        '<span class="' + c.unit + '">' + money(line.price) + "</span>" +
      "</span>" +
      quantity +
      '<span class="' + c.total + '">' + money(line.total) + "</span>" +
      (editable ? '<button type="button" class="' + c.remove + '">Quitar</button>' : "") +
    "</li>";
  }

  function renderLines(lines, editable) {
    var list = document.querySelector("." + c.list);
    if (list) {
      list.innerHTML = lines.map(function (line) {
        return rowHTML(line, editable);
      }).join("");
    }
    var empty = document.querySelector("." + c.empty);
    if (empty) {
      empty.hidden = lines.length > 0;
    }
    var content = document.querySelector("." + c.content);
    if (content) {
      content.hidden = lines.length === 0;
    }
  }

  function renderTotals(subtotal, shippingCost) {
    setText("subtotal", money(subtotal));
    if (shippingCost === null) {
      setText("shipping", "A calcular");
    } else {
      setText("shipping", shippingCost === 0 ? "Sin cargo" : money(shippingCost));
    }
    setText("grand", money(subtotal + (shippingCost || 0)));
  }

  function renderAddress(shipping) {
    var element = document.querySelector("." + c.address);
    if (!element || !shipping) {
      return;
    }
    var parts = [
      shipping.name,
      shipping.address,
      [shipping.city, shipping.postal].filter(Boolean).join(" "),
      shipping.email,
      shipping.phone,
      SHIPPING[shipping.method] ? SHIPPING[shipping.method].label : ""
    ].filter(Boolean);
    element.innerHTML = parts.map(escapeHTML).join("<br>");
  }

  function render() {
    var lines = cartLines();
    setText("count", String(lines.reduce(function (sum, line) {
      return sum + line.quantity;
    }, 0)));

    if (page === "carrito") {
      renderLines(lines, true);
      renderTotals(sumLines(lines), null);
    } else if (page === "envio" || page === "pago") {
      renderLines(lines, false);
      renderTotals(sumLines(lines), SHIPPING[shippingMethod()].price);
      renderAddress(load("checkout", {}).shipping);
    } else if (page === "gracias") {
      var order = load("order", null);
      if (!order) {
        renderLines([], false);
        return;
      }
      renderLines(order.items, false);
      renderTotals(order.subtotal, order.shippingCost);
      setText("orderId", order.id);
      setText("payment", order.payment.label + (order.payment.cardLast4 ? " terminada en " + order.payment.cardLast4 : ""));
      renderAddress(order.shipping);
    }
  }

  function notify(text) {
    var toast = document.querySelector("." + c.toast);
    if (!toast) {
      toast = document.createElement("div");
      toast.className = c.toast;
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add("is-visible");
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  function readForm(form, fields) {
    var data = {};
    Object.keys(fields).forEach(function (key) {
      var field = form.elements[fields[key]];
      data[key] = field ? String(field.value || "").trim() : "";
    });
    return data;
  }

  function fillForm(form, fields, values, rawValues) {
    if (!values) {
      return;
    }
    Object.keys(fields).forEach(function (key) {
      var field = form.elements[fields[key]];
      if (!field || !values[key]) {
        return;
      }
      if (key === "method") {
        var raw = Object.keys(rawValues).filter(function (code) {
          return rawValues[code] === values[key];
        })[0];
        if (raw) {
          field.value = raw;
        }
      } else {
        field.value = values[key];
      }
    });
  }

  function refresh() {
    publishState();
    render();
  }

  publishState();

  document.addEventListener("DOMContentLoaded", function () {
    var checkout = load("checkout", {});
    var shipForm = document.querySelector("." + c.shipForm);
    if (shipForm) {
      fillForm(shipForm, V.fields.shipping, checkout.shipping, V.shippingValues);
    }
    var payForm = document.querySelector("." + c.payForm);
    if (payForm) {
      fillForm(payForm, V.fields.payment, checkout.payment, V.paymentValues);
    }
    render();
  });

  document.addEventListener("click", function (event) {
    var add = event.target.closest("." + c.add);
    if (add) {
      var sku = add.getAttribute(V.attr);
      if (!PRODUCTS[sku]) {
        return;
      }
      var scope = add.closest("article");
      var input = scope && scope.querySelector("." + c.qty);
      var amount = input ? Math.max(1, parseInt(input.value, 10) || 1) : 1;
      updateCart(sku, function (quantity) {
        return quantity + amount;
      });
      refresh();
      notify("Agregado al carrito: " + PRODUCTS[sku].name + (amount > 1 ? " (" + amount + ")" : ""));
      return;
    }

    var row = event.target.closest("." + c.row);
    if (!row || page !== "carrito") {
      return;
    }
    var rowSku = row.getAttribute(V.attr);
    if (event.target.closest("." + c.inc)) {
      updateCart(rowSku, function (quantity) {
        return quantity + 1;
      });
    } else if (event.target.closest("." + c.dec)) {
      updateCart(rowSku, function (quantity) {
        return Math.max(1, quantity - 1);
      });
    } else if (event.target.closest("." + c.remove)) {
      updateCart(rowSku, function () {
        return 0;
      });
    } else {
      return;
    }
    refresh();
  });

  document.addEventListener("change", function (event) {
    if (event.target.closest("." + c.shipForm)) {
      render();
    }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    var checkout = load("checkout", {});

    if (form.classList.contains(c.shipForm)) {
      event.preventDefault();
      var shipping = readForm(form, V.fields.shipping);
      shipping.method = V.shippingValues[shipping.method] || "estandar";
      checkout.shipping = shipping;
      save("checkout", checkout);
      window.location.href = form.getAttribute("action");
      return;
    }

    if (form.classList.contains(c.payForm)) {
      event.preventDefault();
      var payment = readForm(form, V.fields.payment);
      payment.method = V.paymentValues[payment.method] || "tarjeta";
      checkout.payment = { method: payment.method, cardName: payment.cardName, cardExpiry: payment.cardExpiry };
      save("checkout", checkout);

      var lines = cartLines();
      var shippingInfo = checkout.shipping || { method: "estandar" };
      var shippingCost = SHIPPING[shippingInfo.method].price;
      var subtotal = sumLines(lines);
      save("order", {
        id: "FP-" + String(Date.now()).slice(-6),
        date: new Date().toISOString(),
        currency: "ARS",
        items: lines,
        subtotal: subtotal,
        shippingCost: shippingCost,
        total: subtotal + shippingCost,
        shipping: shippingInfo,
        payment: {
          method: payment.method,
          label: PAYMENT[payment.method],
          cardLast4: payment.method === "tarjeta" ? payment.cardNumber.replace(/\D/g, "").slice(-4) : ""
        }
      });
      save("cart", []);
      window.location.href = form.getAttribute("action");
    }
  });
})();
