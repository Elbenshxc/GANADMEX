document.documentElement.classList.add("motion-ready");

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal-section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
    sections.forEach((section) => observer.observe(section));
  } else {
    sections.forEach((section) => section.classList.add("is-visible"));
  }

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
