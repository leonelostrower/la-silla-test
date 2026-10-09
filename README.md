# El Faro de Prueba

Simulador estático de un medio digital y de una tienda online, separados en tres ediciones según lo difícil que es extraer sus datos. El contenedor de Google Tag Manager `GTM-PMRR2D75` está en todas las páginas.

- Portada: https://leonelostrower.github.io/la-silla-test/
- Noticias: https://leonelostrower.github.io/la-silla-test/news/ (`easy/`, `medium/`, `hard/`)
- Tienda: https://leonelostrower.github.io/la-silla-test/tienda/ (`easy/`, `medium/`, `hard/`)

# Noticias (`/news/`)

Nueve notas inventadas. Cada nota tiene título, autor, categoría y botones para compartir (X, Facebook, WhatsApp y copiar enlace). Cada edición tiene su portada con tres tarjetas y una ficha por nota en la misma carpeta. Las tarjetas usan el mismo markup que su ficha.

## Fácil: metadata (`/news/easy/`)

Los datos están en la página como datos estructurados. El DOM usa las clases `.piece__title`, `.piece__author` y `.piece__cat`, pero no hace falta leerlo.

| Nota | Fuente |
| --- | --- |
| [Ciclovías de Puerto Claro](news/easy/ciclovias-puerto-claro.html) | `dataLayer`, con el push antes del snippet de GTM |
| [Cafetal Alma](news/easy/ronda-cafe-altura.html) | `<script id="__NEXT_DATA__">` en `props.pageProps.article`, y JSON-LD `NewsArticle` en la ficha |
| [Biblioteca nocturna](news/easy/biblioteca-nocturna.html) | `window.__INITIAL_STATE__.article` |

Las tres fuentes usan el mismo objeto:

```js
{
  title: "...",
  author: "...",
  category: "...",
  url: "https://leonelostrower.github.io/la-silla-test/news/easy/....html",
  share: { x, facebook, whatsapp, copy }
}
```

En `dataLayer` va dentro de `{ event: "article_view", article: {...} }`. Las fichas también publican `og:title`, `og:url`, `article:author` y `article:section`. La portada `/news/easy/` expone las tres notas: el `dataLayer` y el `__INITIAL_STATE__` en el `head`, y el `__NEXT_DATA__` al final del `body`.

## Medio: clases claras (`/news/medium/`)

Sin `dataLayer` de artículo, sin `__NEXT_DATA__`, sin `__INITIAL_STATE__`, sin JSON-LD, sin Open Graph y sin `meta` de autor. El título sí figura en `<title>`.

| Nota | Título | Autor | Categoría | Compartir |
| --- | --- | --- | --- | --- |
| [Sub-20](news/medium/sub20-clasifica.html) | `.article-title` | `.article-author` | `.article-category` | `.share-button.share-x`, `.share-facebook`, `.share-whatsapp`, `.share-copy` |
| [Cine de Barrio](news/medium/festival-cine-barrio.html) | `.news-headline` | `.news-byline` | `.news-section` | `.social-share__x`, `__facebook`, `__whatsapp`, `__copy` |
| [Mercado nocturno](news/medium/mercado-nocturno.html) | `.post-title` | `.post-author` | `.post-category` | `.share-link--x`, `--facebook`, `--whatsapp`, `--copy` |

## Difícil: clases sin significado (`/news/hard/`)

Las mismas restricciones que en Medio, pero los nombres de clase no dicen qué contiene cada elemento.

| Nota | Título | Autor | Categoría | Compartir |
| --- | --- | --- | --- | --- |
| [Manglares](news/hard/manglares-carbono.html) | `.ttl_91ab` | `.meta_04e` | `.lbl_c21` | `.ico_a` (X), `.ico_b` (Facebook), `.ico_c` (WhatsApp), `.ico_d` (copiar) |
| [Metro de Valdenorte](news/hard/apagon-metro.html) | `.t` | `.n` | `.k` | `.i` en los cuatro; se distinguen por el texto y el `href` |
| [Prótesis recicladas](news/hard/protesis-recicladas.html) | `.sc-dlfnbm.kFBaZQ` | `.sc-hKgILt.gTLZXx` | `.sc-gsTCUz.bhFNxE` | `.sc-jSgupP` con `.cRtYkL` (X), `.fGhVwQ` (Facebook), `.bNmPzT` (WhatsApp), `.dKsXoU` (copiar) |

La nota de prótesis imita el markup que genera styled-components.

# Tienda (`/tienda/`)

Cada edición tiene el mismo flujo de compra, con seis productos en pesos argentinos (`ARS`):

| Página | Archivo |
| --- | --- |
| Listado de productos (PLP) | `index.html` |
| Ficha de producto (PDP) | `producto.html`; todos los productos del listado llevan a esta misma ficha |
| Carrito | `carrito.html` |
| Datos de envío | `envio.html` |
| Pago | `pago.html` |
| Confirmación | `gracias.html` |

Hay "Agregar al carrito" en el listado (una unidad) y en la ficha (con cantidad). Los formularios no validan nada: se pueden enviar vacíos. El carrito, los datos del checkout y el último pedido se guardan en `localStorage` con las claves `faro-tienda-<edición>-cart`, `-checkout` y `-order`, así que cada edición tiene su propio carrito. Al confirmar el pago se genera un número de pedido `FP-xxxxxx` y el carrito se vacía.

La tienda no hace ningún push al `dataLayer`: ahí solo aparecen los eventos propios de GTM (`gtm.js`, `gtm.dom`, `gtm.load`). Toda la lógica está en `js/shop.js`.

## Fácil: metadata (`/tienda/easy/`)

| Página | Fuente |
| --- | --- |
| PLP | JSON-LD `ItemList` con un `Product` y su `Offer` por ítem, y `window.__INITIAL_STATE__.products` |
| PDP | JSON-LD `Product`, `og:*` y `product:price:*`, `window.__INITIAL_STATE__.product` y `<script id="__NEXT_DATA__">` en `props.pageProps.product` |
| Carrito, envío y pago | `window.__INITIAL_STATE__.cart` con `items`, `itemCount` y `subtotal`; en envío y pago también `checkout` con método, costo de envío y total |
| Confirmación | `window.__INITIAL_STATE__.order` con `id`, `items`, `subtotal`, `shippingCost`, `total`, `shipping` y `payment` |

`__INITIAL_STATE__` también tiene `page` (`plp`, `pdp`, `cart`, `shipping`, `payment`, `thank_you`). `js/shop.js` carga en el `head`, antes que GTM, así que el carrito y el pedido ya están cuando GTM arranca, y se actualizan al agregar o cambiar cantidades.

Cada producto se describe así:

```js
{ sku: "FAR-101", name: "...", category: "...", price: 34500, currency: "ARS", url: "https://leonelostrower.github.io/la-silla-test/tienda/easy/producto.html" }
```

## Medio: clases claras (`/tienda/medium/`)

Sin metadata de ningún tipo.

| Elemento | Selector |
| --- | --- |
| Tarjeta del PLP | `.product-card[data-product-id]` con `.product-category`, `.product-name`, `.product-sku`, `.product-price` |
| PDP | `.product-detail[data-product-id]` con los mismos campos, `.product-description` y `.quantity-input` |
| Agregar al carrito | `.add-to-cart[data-product-id]` |
| Contador del carrito | `.cart-count` |
| Línea del carrito | `.cart-item[data-product-id]` con `.cart-item__name`, `__sku`, `__price`, `__quantity`, `__total`, `__increase`, `__decrease`, `__remove` |
| Totales | `.cart-subtotal`, `.cart-shipping`, `.cart-total` |
| Botones de avance | `.checkout-button`, `.continue-to-payment`, `.place-order` |
| Formularios | `.shipping-form` (`full_name`, `email`, `phone`, `street_address`, `city`, `postal_code`, `shipping_method`) y `.payment-form` (`payment_method`, `card_number`, `card_holder`, `card_expiry`, `card_cvv`) |
| Confirmación | `.order-number`, `.shipping-address`, `.payment-method` |

## Difícil: clases sin significado (`/tienda/hard/`)

Las mismas restricciones que en Medio, con clases, atributos y nombres de campos que no dicen qué contienen.

| Elemento | Selector |
| --- | --- |
| Tarjeta del PLP | `.x9f2.sc-AxjAm` con `.l_3a` (categoría), `.h_77c` (nombre), `.m_0d` (SKU), `.v8_k` (precio, con el `$` en un `span` aparte) |
| PDP | `.sc-kpOJdX.hTqWzr` con los mismos campos, `.p_x1` (descripción) y `.n_4` (cantidad) |
| Agregar al carrito | `.sc-bdVaJa.fKpQrS[data-v]`, con el SKU en `data-v` |
| Contador del carrito | `.c_6` |
| Línea del carrito | `.r_5e[data-v]` con `.t_a2` (nombre), `.m_0d` (SKU), `.v8_k` (precio unitario), `.q_b` (cantidad), `.v8_z` (total), `.bt_2` (sumar), `.bt_1` (restar), `.bt_9` (quitar) |
| Totales | `.s_01` (subtotal), `.s_02` (envío), `.s_03` (total) |
| Botones de avance | `.go_7` (carrito y envío), `.go_8` (confirmar pago) |
| Formularios | `.f_a` con campos `a1` a `a7` y envío `s1`/`s2`/`s3`; `.f_b` con campos `b1` a `b5` y pago `p1`/`p2`/`p3` |
| Confirmación | `.o_n1` (pedido), `.ad_3` (dirección), `.pm_2` (pago) |

## GitHub Pages

El sitio no necesita build. Pages publica la rama `main` desde la carpeta raíz, y cada push a `main` actualiza el deploy. Hay un archivo `.nojekyll` para que Pages sirva los archivos sin procesarlos con Jekyll.
