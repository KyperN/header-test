document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const headerContent = document.querySelector('.header-elements');
  burger.addEventListener('click', () => {
    headerContent.style.display === 'none'
      ? (headerContent.style.display = 'flex')
      : (headerContent.style.display = 'none');
  });
});
