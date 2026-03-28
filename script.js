// Inicializar iconos
lucide.createIcons();

// Elementos base
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".app-section");
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

// Menú móvil
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

// Navegación entre "páginas" dentro del mismo index
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
  sections.forEach(section => {
    section.classList.remove("active-section");
  });

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add("active-section");
    targetSection.scrollTop = 0;
    activateRevealInSection(targetSection);
  }

  navLinks.forEach(link => {
    link.classList.remove("nav-link-active");
    if (link.dataset.target === targetId) {
      link.classList.add("nav-link-active");
    }
  });

  closeMenu();
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.dataset.target;
    if (target) {
      showSection(target);
    }
  });
});

// Activar sección inicial
showSection("inicio");

// Formulario
if (contactForm && successMsg) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    contactForm.classList.add("opacity-50", "pointer-events-none");

    setTimeout(() => {
      contactForm.reset();
      contactForm.classList.add("hidden");
      successMsg.classList.remove("hidden");
    }, 1200);
  });
}
