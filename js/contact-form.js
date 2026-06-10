/**
 * contact-form.js - Form validation and submission
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const toast = document.querySelector('.toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.contact-form__submit');
      const originalBtnText = submitBtn.innerHTML;

      // Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span>
        กำลังส่ง...
      `;

      // Simulate API call
      setTimeout(() => {
        // Show Toast
        if (toast) {
          toast.classList.add('toast--visible');
          
          // Hide Toast after 5 seconds
          setTimeout(() => {
            toast.classList.remove('toast--visible');
          }, 5000);
        }

        // Reset Form
        contactForm.reset();

        // Restore Button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

      }, 1500);
    });
  }
});

// Add spin animation to base.css if needed, or inline
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
