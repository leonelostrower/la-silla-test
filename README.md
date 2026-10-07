# El Faro de Prueba

Simulador estático de un medio digital con nueve notas inventadas, separadas en tres ediciones según lo difícil que es extraer sus datos. Cada nota tiene título, autor, categoría y botones para compartir (X, Facebook, WhatsApp y copiar enlace). El contenedor de Google Tag Manager `GTM-PMRR2D75` está en todas las páginas.

- Portada: https://leonelostrower.github.io/la-silla-test/
- Fácil: https://leonelostrower.github.io/la-silla-test/easy/
- Medio: https://leonelostrower.github.io/la-silla-test/medium/
- Difícil: https://leonelostrower.github.io/la-silla-test/hard/

Cada edición tiene su portada con tres tarjetas y una ficha por nota en la misma carpeta. Las tarjetas usan el mismo markup que su ficha.

## Fácil: metadata (`/easy/`)

Los datos están en la página como datos estructurados. El DOM usa las clases `.piece__title`, `.piece__author` y `.piece__cat`, pero no hace falta leerlo.

| Nota | Fuente |
| --- | --- |
| [Ciclovías de Puerto Claro](easy/ciclovias-puerto-claro.html) | `dataLayer`, con el push antes del snippet de GTM |
| [Cafetal Alma](easy/ronda-cafe-altura.html) | `<script id="__NEXT_DATA__">` en `props.pageProps.article`, y JSON-LD `NewsArticle` en la ficha |
| [Biblioteca nocturna](easy/biblioteca-nocturna.html) | `window.__INITIAL_STATE__.article` |

Las tres fuentes usan el mismo objeto:

```js
{
  title: "...",
  author: "...",
  category: "...",
  url: "https://leonelostrower.github.io/la-silla-test/easy/....html",
  share: { x, facebook, whatsapp, copy }
}
```

En `dataLayer` va dentro de `{ event: "article_view", article: {...} }`. Las fichas también publican `og:title`, `og:url`, `article:author` y `article:section`. La portada `/easy/` expone las tres notas: el `dataLayer` y el `__INITIAL_STATE__` en el `head`, y el `__NEXT_DATA__` al final del `body`.

## Medio: clases claras (`/medium/`)

Sin `dataLayer` de artículo, sin `__NEXT_DATA__`, sin `__INITIAL_STATE__`, sin JSON-LD, sin Open Graph y sin `meta` de autor. El título sí figura en `<title>`.

| Nota | Título | Autor | Categoría | Compartir |
| --- | --- | --- | --- | --- |
| [Sub-20](medium/sub20-clasifica.html) | `.article-title` | `.article-author` | `.article-category` | `.share-button.share-x`, `.share-facebook`, `.share-whatsapp`, `.share-copy` |
| [Cine de Barrio](medium/festival-cine-barrio.html) | `.news-headline` | `.news-byline` | `.news-section` | `.social-share__x`, `__facebook`, `__whatsapp`, `__copy` |
| [Mercado nocturno](medium/mercado-nocturno.html) | `.post-title` | `.post-author` | `.post-category` | `.share-link--x`, `--facebook`, `--whatsapp`, `--copy` |

## Difícil: clases sin significado (`/hard/`)

Las mismas restricciones que en Medio, pero los nombres de clase no dicen qué contiene cada elemento.

| Nota | Título | Autor | Categoría | Compartir |
| --- | --- | --- | --- | --- |
| [Manglares](hard/manglares-carbono.html) | `.ttl_91ab` | `.meta_04e` | `.lbl_c21` | `.ico_a` (X), `.ico_b` (Facebook), `.ico_c` (WhatsApp), `.ico_d` (copiar) |
| [Metro de Valdenorte](hard/apagon-metro.html) | `.t` | `.n` | `.k` | `.i` en los cuatro; se distinguen por el texto y el `href` |
| [Prótesis recicladas](hard/protesis-recicladas.html) | `.sc-dlfnbm.kFBaZQ` | `.sc-hKgILt.gTLZXx` | `.sc-gsTCUz.bhFNxE` | `.sc-jSgupP` con `.cRtYkL` (X), `.fGhVwQ` (Facebook), `.bNmPzT` (WhatsApp), `.dKsXoU` (copiar) |

La nota de prótesis imita el markup que genera styled-components.

## GitHub Pages

El sitio no necesita build. Pages publica la rama `main` desde la carpeta raíz, y cada push a `main` actualiza el deploy. Hay un archivo `.nojekyll` para que Pages sirva los archivos sin procesarlos con Jekyll.
