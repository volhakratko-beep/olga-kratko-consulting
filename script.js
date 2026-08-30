document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const contactForm = document.querySelector('.contact-form__form');
  const contactStatus = document.querySelector('[data-form-status]');
  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      contactStatus.textContent = 'Sending...';
      contactStatus.removeAttribute('data-state');
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });
        if (response.ok) {
          contactStatus.textContent = "Thank you! Your request has been sent — I'll get back to you soon.";
          contactStatus.setAttribute('data-state', 'success');
          contactForm.reset();
        } else {
          contactStatus.textContent = 'Something went wrong. Please email kratskoolga@gmail.com directly.';
          contactStatus.setAttribute('data-state', 'error');
        }
      } catch (error) {
        contactStatus.textContent = 'Something went wrong. Please email kratskoolga@gmail.com directly.';
        contactStatus.setAttribute('data-state', 'error');
      } finally {
        submitButton.disabled = false;
      }
    });
  }
});
