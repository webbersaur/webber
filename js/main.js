// Webbersaurus - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // Form validation (for contact page)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      const name = this.querySelector('[name="name"]');
      const email = this.querySelector('[name="email"]');
      const message = this.querySelector('[name="message"]');

      let isValid = true;

      if (name && !name.value.trim()) {
        isValid = false;
        name.style.borderColor = '#ef4444';
      } else if (name) {
        name.style.borderColor = '';
      }

      if (email && !isValidEmail(email.value)) {
        isValid = false;
        email.style.borderColor = '#ef4444';
      } else if (email) {
        email.style.borderColor = '';
      }

      if (message && !message.value.trim()) {
        isValid = false;
        message.style.borderColor = '#ef4444';
      } else if (message) {
        message.style.borderColor = '';
      }

      if (isValid) {
        // Show success message (in real implementation, would submit to server)
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
      }
    });
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Rotating Text Animation
  const rotatingText = document.getElementById('rotatingText');
  if (rotatingText) {
    const words = ['Work', 'Convert', 'Grow', 'Succeed'];
    let currentIndex = 0;

    function rotateWord() {
      rotatingText.classList.add('fade-out');

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingText.textContent = words[currentIndex];
        rotatingText.classList.remove('fade-out');
        rotatingText.classList.add('fade-in');

        setTimeout(() => {
          rotatingText.classList.remove('fade-in');
        }, 300);
      }, 300);
    }

    // Rotate every 2.5 seconds
    setInterval(rotateWord, 2500);
  }
});
