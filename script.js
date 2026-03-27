// Initialize Lucide Icons
lucide.createIcons();

// Navbar interaction
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/80', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10');
        nav.classList.remove('py-6');
    } else {
        nav.classList.remove('bg-black/80', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10');
        nav.classList.add('py-6');
    }
});

// Mobile Menu Logic
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

const closeMenu = () => {
    mobileMenu.classList.add('translate-x-full');
};

closeBtn.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Reveal Animations on Scroll
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Form Handling
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.classList.add('opacity-50', 'pointer-events-none');

    setTimeout(() => {
        contactForm.reset();
        contactForm.classList.add('hidden');
        successMsg.classList.remove('hidden');
    }, 1500);
});
