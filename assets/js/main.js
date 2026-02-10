(() => {
  const year = document.getElementById('ano');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const key = 'pref-theme';
    const apply = (d) => document.documentElement.dataset.theme = d;
    const saved = localStorage.getItem(key);
    if (saved) apply(saved);
    toggle.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(current); localStorage.setItem(key, current);
      toggle.setAttribute('aria-pressed', current === 'dark');
    });
  }
  // Menu móvel
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuBtn && nav) {
    const mq = window.matchMedia('(max-width: 980px)');
    const sync = () => { if (mq.matches){menuBtn.style.display='inline-flex';nav.hidden=true;menuBtn.setAttribute('aria-expanded','false');} else {menuBtn.style.display='none';nav.hidden=false;} };
    sync(); mq.addEventListener('change', sync);
    menuBtn.addEventListener('click', () => { const expanded = menuBtn.getAttribute('aria-expanded')==='true'; menuBtn.setAttribute('aria-expanded', String(!expanded)); nav.hidden = expanded; });
  }
})();
