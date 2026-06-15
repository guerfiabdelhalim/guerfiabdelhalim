function setLang(lang){
  document.querySelectorAll('[data-ar]').forEach(el=>{
    el.innerHTML = el.dataset[lang];
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.lang')[lang === 'ar' ? 0 : 1].classList.add('active');
  localStorage.setItem('lang', lang);
}
setLang(localStorage.getItem('lang') || 'ar');
