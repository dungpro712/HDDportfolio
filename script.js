// Basic tab behavior and simple contact form handling
document.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
      // Update focus for accessibility
      target.querySelector('h2')?.focus?.();
    });
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const mailtoBtn = document.getElementById('mailto-btn');

  mailtoBtn.addEventListener('click', () => {
    const name = encodeURIComponent(document.getElementById('name').value || '');
    const email = encodeURIComponent(document.getElementById('email').value || '');
    const message = encodeURIComponent(document.getElementById('message').value || '');
    const subject = encodeURIComponent('Contact from portfolio site');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = '#ffb4b4';
      return;
    }
    // Simulate send — replace with a real backend or a service (Formspree, Formsubmit, etc.)
    status.textContent = 'Thanks! Your message was received (demo).';
    status.style.color = '#bff7d5';
    form.reset();
  });

  // Download resume placeholder: hook can be updated to an actual file
  document.getElementById('download-resume').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Replace this alert with a link to your resume PDF or upload resume.pdf to the site root.');
  });
});
