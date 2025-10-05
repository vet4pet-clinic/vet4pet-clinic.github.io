
// =========================
//  Cookie уведомление
// =========================
const COOKIE_KEY = "vet4pet_cookie_consent_v1";

function showCookieBar() {
  const consent = localStorage.getItem(COOKIE_KEY);
  if (!consent) {
    const bar = document.querySelector(".cookie-bar");
    if (bar) bar.style.display = "flex";
  }
}

function acceptCookies() {
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: true, date: Date.now() }));
  const bar = document.querySelector(".cookie-bar");
  if (bar) bar.style.display = "none";
}

document.addEventListener("DOMContentLoaded", showCookieBar);

// =========================
//  Отправка формы в Telegram
// =========================
function openTelegramChat(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (!name || !phone) {
    alert("Пожалуйста, введите имя и телефон");
    return;
  }

  const message = `🐾 Новая заявка Vet4Pet:%0AИмя: ${name}%0AТелефон: ${phone}%0AКомментарий: ${comment}`;
  const link = `https://t.me/vet4pet_minsk?text=${message}`;
  window.open(link, "_blank");
}