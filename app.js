VANTA.WAVES({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  shininess: 82.00,
  waveHeight: 40.00,
  waveSpeed: 0.35,
  zoom: 0.65
});

// Тексты для слайдов
const texts = [
    "Добро пожаловать на сайт Tune.Haven",
    "Это сайт о музыке",
    "Здесь есть всё для меломанов",
    "Заходи на сайт!",
];

let currentIndex = 0;

const textDisplay = document.getElementById("text-display");

// Функция обновления текста с анимацией
function updateText(index) {
    textDisplay.style.opacity = 0; // Скрываем текст
    setTimeout(() => {
        textDisplay.textContent = texts[index]; // Меняем текст
        textDisplay.style.transform = "translate(-50%, -50%) scale(1.1)"; // Легкий масштаб
        textDisplay.style.opacity = 1; // Показываем текст
    }, 500);

    setTimeout(() => {
        textDisplay.style.transform = "translate(-50%, -50%) scale(1)"; // Возвращаем размер
    }, 1000);
}

// Переменные для отслеживания жеста
let startTouchY = 0;
let endTouchY = 0;

// Обработчик для начала жеста
window.addEventListener("touchstart", (event) => {
    startTouchX = event.touches[0].clientX; // Получаем начальную позицию пальца
});


// Обработчик для завершения жеста или нажатия
window.addEventListener("touchend", (event) => {
    // Если разница в положении пальца значительна (свайп)
    if (Math.abs(startTouchX - endTouchX) > 50) {
        if (startTouchX - endTouchX > 0) { // Свайп влево
            if (currentIndex < texts.length - 1) {
                currentIndex++;
                updateText(currentIndex);
            }
        } else if (startTouchX - endTouchX < 0) { // Свайп вправо
            if (currentIndex > 0) {
                currentIndex--;
                updateText(currentIndex);
            }
        }
    } else {
        // Если свайпа не было, переключаем влево и вправо по очереди
        if (currentIndex < texts.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возвращаемся к первому тексту
        }
        updateText(currentIndex);
    }

    // Сбрасываем позиции для следующего события
    startTouchX = 0;
    endTouchX = 0;
});

// Обработчик для движения пальца
window.addEventListener("touchmove", (event) => {
    endTouchX = event.touches[0].clientX; // Обновляем конечную позицию пальца
});

// Обработчик события прокрутки колесика мыши
window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) { // Прокрутка вниз
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            updateText(currentIndex);
        }
    } else { // Прокрутка вверх
        if (currentIndex > 0) {
            currentIndex--;
            updateText(currentIndex);
        }
    }
});

    let editableDiv = document.getElementById("text-display");
    let buttona = document.getElementById('nigga')
    let textMain = document.getElementById("text-display")



    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "characterData" || mutation.type === "childList") {
            if(textMain.textContent === 'Заходи на сайт!')   
                {
                    buttona.style.opacity = '1';
                    buttona.style.visibility = 'visible';
                }
                else
                {
                    buttona.style.opacity = '0';
                    buttona.style.visibility = 'hidden';
                }
          }
        }
      });
    
      // Настраиваем параметры наблюдения
      observer.observe(editableDiv, {
        characterData: true, // Для отслеживания изменений текста узлов
        childList: true,    // Для отслеживания добавления/удаления дочерних узлов
        subtree: true       // Для отслеживания изменений в дочерних элементах
    });
    

    


    
   
           
    




