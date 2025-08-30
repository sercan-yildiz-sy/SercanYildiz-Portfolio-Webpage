document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let current = 0;
function showSlide(idx) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
  }

  function goToSlide(idx) {
    if (!slides.length) return;
    current = (idx + slides.length) % slides.length;
    showSlide(current);
  }

  if (slides.length) showSlide(0);

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(current + 1));


});

  const form = document.querySelector('form');
  const messageEl = document.getElementById('form-message');
  const emailInput = form.querySelector("input[name='email']");
  const emailError = form.querySelector(".email-error");
  const messageSent = form.querySelector(".form-message");
  
  emailInput.addEventListener("blur", function () {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(emailInput.value) && emailInput.value.trim() !== "") {
    emailError.style.display = "block";
  } 
  else {
    emailError.style.display = "none";
  }
  });

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
        messageSent.style.display = "flex"; 
        form.reset();
        
      } else {
        messageEl.textContent = 'Oops! Something went wrong. Please try again.';
        messageEl.classList.add('error');
      }
    } catch (error) {
      messageEl.textContent = 'Network error. Please try again later.';
      messageEl.classList.add('error');
    }
  });

