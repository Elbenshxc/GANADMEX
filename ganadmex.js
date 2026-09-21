document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [
        "Hola, quiero solicitar una cotización con Grupo Ganadmex.",
        `Nombre: ${data.get("nombre") || ""}`,
        `Empresa: ${data.get("empresa") || "No indicada"}`,
        `Teléfono: ${data.get("telefono") || ""}`,
        `Producto: ${data.get("producto") || ""}`,
        `Cantidad aproximada: ${data.get("cantidad") || ""}`,
        `Mensaje: ${data.get("mensaje") || "Sin mensaje adicional"}`
      ];
      window.location.href = `https://wa.me/524491071839?text=${encodeURIComponent(lines.join("\n"))}`;
    });
  }
});
