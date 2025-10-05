/* ===============================
   Vet4Pet — функционал сайта
================================= */

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

window.addEventListener('DOMContentLoaded', () => {
  const accepted = localStorage.getItem('cookiesAccepted');
  if (!accepted) {
    document.querySelector('.cookie-bar').style.display = 'flex';
  }
});

/* === 3. ОТПРАВКА В TELEGRAM === */
function openTelegramChat(event) {
  event.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const comment = document.getElementById('comment')?.value.trim();

  if (!name || !phone) {
    alert('Пожалуйста, заполните имя и телефон.');
    return;
  }

  const message =
    `🐾 *Новая заявка с сайта Vet4Pet* 🐾\n\n` +
    `👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Комментарий: ${comment || '—'}`;

  const botToken = 'ТВОЙ_ТОКЕН_БОТА';
  const chatId = 'ТВОЙ_CHAT_ID';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' }),
  })
    .then((res) => {
      if (res.ok) {
        alert('Заявка отправлена! Мы свяжемся с вами.');
        document.querySelector('form').reset();
      } else {
        alert('Ошибка при отправке. Попробуйте позже.');
      }
    })
    .catch(() => {
      alert('Ошибка соединения. Попробуйте позже.');
    });
}

/* === 4. ПЛАВНАЯ ПРОКРУТКА ПО ЯКОРЯМ === */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
/* === активный пункт меню при скролле === */
const navLinks = Array.from(document.querySelectorAll('nav .menu a'));
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120; // небольшой отступ от шапки
  let current = null;
  sections.forEach(sec => {
    if (y >= sec.offsetTop) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);
