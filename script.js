const form = document.getElementById('enquiryForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'there';
    const company = data.get('company') || 'N/A';
    const phone = data.get('phone') || 'N/A';
    const email = data.get('email') || 'N/A';
    const details = data.get('details') || 'No additional details provided.';
    const subject = encodeURIComponent(`Bulk enquiry from ${name} - Rambutz HarvestHub`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Enquiry Details:\n${details}`
    );

    window.location.href = `mailto:rambutzharvesthub@gmail.com?cc=firoshkhan@gmail.com&subject=${subject}&body=${body}`;
    status.textContent = `Thank you, ${name}. Your email client should open with the enquiry details ready to send.`;
    form.reset();
  });
}
