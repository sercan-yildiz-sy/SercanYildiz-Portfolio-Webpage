document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let current = 0;

    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
    }

    function goToSlide(idx) {
      current = (idx + slides.length) % slides.length;
      showSlide(current);
    }

    if (prevBtn && nextBtn && slides.length > 0) {
      prevBtn.addEventListener('click', () => goToSlide(current - 1));
      nextBtn.addEventListener('click', () => goToSlide(current + 1));
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goToSlide(i));
      });
      showSlide(current);
    }
  });

  const form = document.querySelector('form');
  const messageEl = document.getElementById('form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        messageEl.textContent = 'Thank you! Your message has been sent.';
        messageEl.classList.remove('error');
      } else {
        messageEl.textContent = 'Oops! Something went wrong. Please try again.';
        messageEl.classList.add('error');
      }
    } catch (error) {
      messageEl.textContent = 'Network error. Please try again later.';
      messageEl.classList.add('error');
    }
  });

