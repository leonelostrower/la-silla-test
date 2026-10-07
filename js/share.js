(function () {
  function labelOf(link) {
    return (link.textContent || "").replace(/\s+/g, " ").trim();
  }

  function copyWithInput(value) {
    var input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    var copied = document.execCommand("copy");
    input.remove();
    return copied;
  }

  function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value).catch(function () {
        if (copyWithInput(value)) {
          return;
        }
        throw new Error("copy");
      });
    }

    return new Promise(function (resolve, reject) {
      if (copyWithInput(value)) {
        resolve();
      } else {
        reject();
      }
    });
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link) {
      return;
    }

    var label = labelOf(link);
    if (!/^copiar\b/i.test(label)) {
      return;
    }

    var href = link.getAttribute("href");
    if (!href) {
      return;
    }

    event.preventDefault();
    var absolute = new URL(href, window.location.href).href;

    copyText(absolute).then(function () {
      link.textContent = "Copiado";
      window.setTimeout(function () {
        link.textContent = label;
      }, 1600);
    }).catch(function () {});
  });
})();
