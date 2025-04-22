// Initialize EmailJS with your public key
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual EmailJS public key

  // Get all forms you want to hook EmailJS into
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      // Optional: Show loading or disable button
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Send form using EmailJS
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
        .then(function () {
          alert('Message sent successfully!');
          form.reset();
        }, function (error) {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        })
        .finally(() => {
          // Restore button state
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit';
        });
    });
  });
});
