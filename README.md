# El Faro de Prueba

Simulador estático de un medio digital. La portada lista seis notas inventadas. Cada una tiene título, autor, categoría y botones para compartir (X, Facebook, WhatsApp y copiar enlace). El contenedor de Google Tag Manager `GTM-PMRR2D75` está en todas las páginas.

Las estrategias de extracción no aparecen rotuladas en el sitio.

## Mapa de extracción

| Nota | Página | Cómo leerla |
| --- | --- | --- |
| Puerto Claro anuncia 42 kilómetros de ciclovías para 2027 | [noticias/ciclovias-puerto-claro.html](noticias/ciclovias-puerto-claro.html) | Metadata en `dataLayer` |
| Cafetal Alma cierra una ronda de 8 millones para tostar en origen | [noticias/ronda-cafe-altura.html](noticias/ronda-cafe-altura.html) | Metadata en `__NEXT_DATA__` y JSON-LD |
| La sub-20 vence a Andivia y sella el cupo al hexagonal | [noticias/sub20-clasifica.html](noticias/sub20-clasifica.html) | DOM con clases claras |
| El festival Cine de Barrio abre su convocatoria de cortos | [noticias/festival-cine-barrio.html](noticias/festival-cine-barrio.html) | DOM con otro vocabulario de clases claras |
| Los manglares de Bahía Mansa retienen más carbono de lo estimado | [noticias/manglares-carbono.html](noticias/manglares-carbono.html) | DOM con clases opacas |
| El metro de Valdenorte ensaya un apagón controlado el domingo | [noticias/apagon-metro.html](noticias/apagon-metro.html) | DOM con clases genéricas |

La portada repite el mismo patrón en cada tarjeta. `dataLayer` y `__NEXT_DATA__` de la portada incluyen solo las dos primeras notas.

### Metadata

La nota de ciclovías empuja esto a `dataLayer` antes del snippet de GTM, en la portada y en su ficha:

```js
{
  event: "article_view",
  article: {
    title: "Puerto Claro anuncia 42 kilómetros de ciclovías para 2027",
    author: "Marina Soler",
    category: "Ciudad",
    share: { x, facebook, whatsapp, copy }
  }
}
```

También publica `og:title`, `article:author` y `article:section`.

La nota de Cafetal Alma expone el mismo objeto en `props.pageProps.article` dentro de `<script id="__NEXT_DATA__" type="application/json">`. El JSON-LD `NewsArticle` repite el título en `headline`, el autor en `author.name` y la categoría en `articleSection`. Las URLs de compartir están solo en `__NEXT_DATA__`.

`share.copy` es la ruta desde la raíz del sitio (`noticias/....html`). `share.x`, `share.facebook` y `share.whatsapp` son las URLs de cada red.

### Clases claras

Sub-20:

- `.article-title`
- `.article-author`
- `.article-category`
- `.share-button.share-x`
- `.share-button.share-facebook`
- `.share-button.share-whatsapp`
- `.share-button.share-copy`

Cine de Barrio:

- `.news-headline`
- `.news-byline`
- `.news-section`
- `.social-share__x`
- `.social-share__facebook`
- `.social-share__whatsapp`
- `.social-share__copy`

Estas cuatro notas no tienen `dataLayer` de artículo, `__NEXT_DATA__`, JSON-LD, Open Graph ni `meta` de autor. El título sí figura en `<title>`.

### Clases opacas y genéricas

Manglares:

- `.ttl_91ab` título
- `.meta_04e` autor
- `.lbl_c21` categoría
- `.ico_a` X
- `.ico_b` Facebook
- `.ico_c` WhatsApp
- `.ico_d` copiar enlace

Metro de Valdenorte:

- `.t` título
- `.n` autor
- `.k` categoría
- `.i` los cuatro botones de compartir (se distinguen por el texto y por el `href`)

## GitHub Pages

El sitio no necesita build. Las rutas son relativas para funcionar en un project site (`https://USUARIO.github.io/la-silla-test/`).

1. Crea un repositorio y sube esta carpeta a la rama `main`.
2. En el repositorio, abre Settings, Pages.
3. En Build and deployment, elige Deploy from a branch.
4. Publica la rama `main` y la carpeta `/ (root)`.

Hay un archivo `.nojekyll` para que Pages sirva el sitio sin procesarlo con Jekyll.
