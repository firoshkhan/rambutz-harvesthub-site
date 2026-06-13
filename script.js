const form = document.getElementById('enquiryForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'there';
    status.textContent = `Thank you, ${name}. Your bulk enquiry request has been received. Our team will contact you shortly.`;
    form.reset();
  });
}
