const demoBtn = document.getElementById("demoBtn");
const contactForm = document.getElementById("contactForm");

if (demoBtn) {
  demoBtn.addEventListener("click", () => {
    const contacto = document.getElementById("contacto");
    contacto.scrollIntoView({ behavior: "smooth" });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const negocio = document.getElementById("negocio").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !negocio || !correo || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }

    alert("Gracias por contactarte con Fast Digital Core. Pronto podrán adaptar este formulario a correo o WhatsApp.");
    contactForm.reset();
  });
}
