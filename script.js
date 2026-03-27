const demoBtn = document.getElementById("demoBtn");
const contactForm = document.getElementById("contactForm");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");
const faqQuestions = document.querySelectorAll(".faq-question");

if (demoBtn) {
  demoBtn.addEventListener("click", () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
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

    alert("Gracias por contactarte con Fast Digital Core. Pronto podremos conectar este formulario con correo o WhatsApp.");
    contactForm.reset();
  });
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const isActive = question.classList.contains("active");

    faqQuestions.forEach((item) => {
      item.classList.remove("active");
      const answer = item.nextElementSibling;
      if (answer) answer.classList.remove("open");
    });

    if (!isActive) {
      question.classList.add("active");
      const answer = question.nextElementSibling;
      if (answer) answer.classList.add("open");
    }
  });
});
