
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