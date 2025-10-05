/* ===== Vet4Pet — функционал (без гамбургера) ===== */

/* затемнение при прокрутке */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) document.body.classList.add('scrolled');
  else document.body.classList.remove('scrolled');
});

/* cookie-баннер */
function acceptCookies(){
  localStorage.setItem('vet4pet_cookie_consent','true');
  const bar=document.querySelector('.cookie-bar');
  if(bar) bar.style.display='none';
}
window.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem('vet4pet_cookie_consent')){
    const bar=document.querySelector('.cookie-bar');
    if(bar) bar.style.display='flex';
  }
});

/* плавная прокрутка по меню */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      const target=document.querySelector(id);
      if(target){
        window.scrollTo({top: target.offsetTop - 70, behavior:'smooth'});
      }
    }
  });
});

/* форма → Telegram */
function openTelegramChat(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const comment=document.getElementById('comment').value.trim();
  if(!name || !phone){ alert('Пожалуйста, введите имя и телефон'); return; }
  const msg = `🩺 Заявка Vet4Pet%0AИмя: ${encodeURIComponent(name)}%0AТелефон: ${encodeURIComponent(phone)}%0AКомментарий: ${encodeURIComponent(comment)}`;
  window.open(`https://t.me/vet4pet_minsk?text=${msg}`,'_blank');
}

/* плавное появление секций */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting) en.target.classList.add('visible');
  });
},{threshold:0.2});
document.querySelectorAll('section').forEach(s=>observer.observe(s));
