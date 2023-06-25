    document.addEventListener('DOMContentLoaded', function() {
  const toggleOpen = document.querySelector('.toggle-open');
  const toggleClose = document.querySelector('.toggle-close');
  const menuMobile = document.querySelector('.menu-mobile');

  toggleOpen.addEventListener('click', function() {
    menuMobile.style.display = 'block';
    toggleClose.style.display = 'block';
    toggleOpen.style.display = 'none';
});

toggleClose.addEventListener('click', function() {
    menuMobile.style.display = 'none';
    toggleClose.style.display = 'none';
    toggleOpen.style.display = 'block';
  });
});

  