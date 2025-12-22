
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('navbar');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

