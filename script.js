const langSwitch = document.getElementById('langSwitch');
let currentLang = 'en';
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

function setLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('fa', lang === 'fa');
  document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en][data-fa]').forEach((el) => {
    el.innerHTML = lang === 'fa' ? el.dataset.fa : el.dataset.en;
  });
  langSwitch.textContent = lang === 'fa' ? 'English' : 'دری';
}
langSwitch.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'fa' : 'en'));


// Demo form intentionally does not submit or persist any data.
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('formMessage');
    message.textContent = currentLang === 'fa'
      ? 'این فقط پیش‌نمایش است؛ اطلاعات ارسال یا ذخیره نشد.'
      : 'Preview only — nothing was submitted or saved.';
  });
}
