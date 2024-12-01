// Показать кнопку при достижении нижней части страницы
window.addEventListener('scroll', function() {
    const scrollBtn = document.querySelector('.scroll-to-top');
  
    // Параметр, который определяет, на каком расстоянии от низа страницы появляется кнопка (в пикселях)
    const distanceFromBottom = 600; // Измените это значение по вашему желанию
  
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - distanceFromBottom) {
      scrollBtn.classList.add('show');
      scrollBtn.classList.remove('hide');
    } else {
      scrollBtn.classList.add('hide');
      scrollBtn.classList.remove('show');
    }
  });
  
  // Плавная прокрутка наверх при клике на кнопку
  document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  