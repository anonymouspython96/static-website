// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('nav ul');
const toggleIcon = mobileToggle.querySelector('i');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  if (navMenu.classList.contains('active')) {
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-times');
  } else {
    toggleIcon.classList.remove('fa-times');
    toggleIcon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    toggleIcon.classList.remove('fa-times');
    toggleIcon.classList.add('fa-bars');
  });
});

// Scroll Button
const scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }

  // Add background to nav on scroll
  if (window.scrollY > 100) {
    document.querySelector('nav').classList.add('scrolled');
  } else {
    document.querySelector('nav').classList.remove('scrolled');
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
const animateElements = document.querySelectorAll('.profile-container, .services-grid, .contact-container, .sartoria-image-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideIn 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

animateElements.forEach(el => {
  observer.observe(el);
});