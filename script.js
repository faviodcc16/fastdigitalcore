lucide.createIcons();

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".app-section");
const contactForm = document.getElementById("contactForm");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });
}

function closeMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add("translate-x-full");
  }
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeMenu);
}

function activateRevealInSection(section) {
  const revealElements = section.querySelectorAll(".reveal");

  revealElements.forEach((el, index) => {
    el.classList.remove("active");

    setTimeout(() => {
      el.classList.add("active");
    }, 80 * index);
  });
}

function showSection(targetId) {
  sections.forEach((section) => {
    section.classList.remove("active-section");
  });

  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.classList.add("active-section");
    targetSection.scrollTop = 0;
    activateRevealInSection(targetSection);
  }

  navLinks.forEach((link) => {
    link.classList.remove("nav-link-active");

    if (link.dataset.target === targetId) {
      link.classList.add("nav-link-active");
    }
  });

  closeMenu();
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.target;

    if (target) {
      showSection(target);
    }
  });
});

showSection("inicio");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const subject = encodeURIComponent("Consulta desde Fast Digital Core");
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );

    window.location.href = `mailto:contacto@fastdigitalcore.com?subject=${subject}&body=${body}`;
  });
}
