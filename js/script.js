// ========== Mobile Nav Toggle ==========
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ========== Active Link Highlight on Scroll ==========
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active-link');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ========== Typing Effect for Hero Subtitle ==========
const typingEl = document.querySelector('.typing-text');
const roles = ['Frontend Developer', 'MERN Stack Developer', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1500; // pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

if (typingEl) {
  typeEffect();
}

// ========== Contact Form Handling ==========
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // No backend yet — opens default mail client with prefilled message.
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
  window.location.href = `mailto:gohelnayan264@gmail.com?subject=${subject}&body=${body}`;

  contactForm.reset();
});
