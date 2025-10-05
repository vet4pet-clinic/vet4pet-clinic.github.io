/* =============================
   Vet4Pet — функционал сайта
   ============================= */

/* === 1. ЭФФЕКТ ЗАТЕМНЕНИЯ ПРИ ПРОКРУТКЕ === */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

/* === 2. COOKIE-БАННЕР === */
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.querySelector('.cookie-bar').style.display = 'none';
}

// Показать баннер, если пользователь ещё не принял cookies
window.addEventListener('DOMContentLoaded', () => {
  const accepted = localStorage.getItem('cookiesAccepted');
  if (!accepted) {
    document.querySelector('.cookie-bar').style.display = 'flex';
  }
});

/* === 3. ОТПРАВКА В TELEGRAM === */
function openTelegramChat(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (!name || !phone) {
    alert("Пожалуйста, заполните имя и телефон 😊");
    return;
  }

  const message = `🩺 Заявка с сайта Vet4Pet%0AИмя: ${encodeURIComponent(name)}%0AТелефон: ${encodeURIComponent(phone)}%0AКомментарий: ${encodeURIComponent(comment)}`;
  const telegramLink = `https://t.me/vet4pet_minsk?text=${message}`;

  window.open(telegramLink, '_blank');
}

/* === 4. ПЛАВНАЯ ПРОКРУТКА ПО МЕНЮ === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});
