const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-principal');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = 'Obrigado pela mensagem! Este é apenas um exemplo: nenhum dado foi enviado ou armazenado.';
  contactForm.reset();
});
