document.addEventListener("DOMContentLoaded", function () {

  // disable complaints form  submit button
  const submitButton = document.getElementById("complaints-form-button")
  submitButton.title = 'This form is currently disabled';
  submitButton.disabled = true;

  // Common function to handle form submission
  function handleFormSubmit(formId, templateId, serviceId) {
    const form = document.getElementById(formId);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const toEmail = this.to_email.value;
      const descriptionField = this.querySelector('[name="formDescription"]');

      if (toEmail === 'partners@razormarkets.co.za') {
        descriptionField.value = `
Hello,

We have received a new partner from submission.

Name: ${this.name.value}
Email: ${this.email.value}
Phone: ${this.phone.value}
Country: ${this.country.value}
Number of clients: ${this.numberOfClients.value}
Social Media handle or website: ${this.social.value}
Years of experience: ${this.yearsOfXp.value}

Please review the details and get back to them as soon as possible.

Best regards,

Razor Markets
              `.trim();
      }

      if (toEmail === 'support@razormarkets.co.za') {
        descriptionField.value = `
Hello,

We have received a new client support form submission.

First Name: ${this.name.value}
Surname: ${this.surname.value}
Email: ${this.email.value}
Phone: ${this.phone.value}
Description: ${this.description.value}

Please review the details and get back to them as soon as possible.

Best regards,

Razor Markets
                `.trim();
      }

      if (toEmail === 'complaints@razormarkets.co.za') {
        descriptionField.value = `
Hello,

We have received a new complaint form submission.

First Name: ${this.name.value}
Surname: ${this.surname.value}
Email: ${this.email.value}
Phone: ${this.phone.value}
Description: ${this.description.value}

Please review the details and get back to them as soon as possible.

Best regards,

Razor Markets
                `.trim();
      }

      emailjs.sendForm(serviceId, templateId, this)
        .then(function (response) {
          alert('Your message has been sent successfully!');
        }, function (error) {
          console.log(error);
        });
    });
  }


  // Client Support Form
  handleFormSubmit("client-support", "template_adzahza", "default_service");

  // Partners Form
  handleFormSubmit("partners", "template_adzahza", "default_service");

  // Complaints Form
  handleFormSubmit("complaints", "template_adzahza", "default_service");

  // Other Form
  handleFormSubmit("other", "template_adzahza", "default_service");
});