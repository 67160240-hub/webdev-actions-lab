const helloBtn = document.querySelector('#helloBtn');
const themeBtn = document.querySelector('#themeBtn');
const status = document.querySelector('#status');
helloBtn.addEventListener('click', () => { status.textContent = 'Hello from GitHub Pages!'; });
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.setAttribute('aria-pressed', String(isDark));
  themeBtn.textContent = isDark ? 'Light Theme' : 'Toggle Theme';
});
