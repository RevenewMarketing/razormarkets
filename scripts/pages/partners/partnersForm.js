// // Initialize EmailJS with your User ID
// (function(){
//     emailjs.init("uCvjqraOrgf0DN-9e"); // Replace with your EmailJS user ID
// })();

// // Form submission event listener
// document.getElementById('partnersForm').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent default form submission

//     // Collect form data
//     const formData = {
//         firstName: document.getElementById('firstName').value,
//         surname: document.getElementById('surname').value,
//         phone: document.getElementById('phone').value,
//         email: document.getElementById('email').value,
//         country: document.getElementById('country').value,
//         clients: document.getElementById('clients').value,
//         socialMedia: document.getElementById('socialMedia').value,
//         experience: document.getElementById('experience').value
//     };

//     // Send the form data using EmailJS (Mailgun service)
//     emailjs.send("service_dn2hb4c", "partner_form_template", formData)
//         .then(function(response) {
//             alert('Form submitted successfully!');
//             document.getElementById('partnersForm').reset(); // Reset form after successful submission
//         }, function(error) {
//             alert('There was an error: ' + error.text);
//         });
// });

function sendMail() {
    let parms = {
        firstName: document.getElementById('firstName').value,
        surname: document.getElementById('surname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        country: document.getElementById('country').value,
        clients: document.getElementById('clients').value,
        socialMedia: document.getElementById('socialMedia').value,
        experience: document.getElementById('experience').value
    }
    emailjs.send("service_hpg1l34", "partner_form_template", parms)
        .then(alert('Form submitted successfully!'), function(error) {
            alert('There was an error: ' + error.text);
        });
}