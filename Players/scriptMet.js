// Массив песен
const songs = [
  
{
  name: "One",
  artist: "Metallica",
  file: "./music/02. One.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 085014.png",  
  },
{
  name: "Enter Sandman",
  artist: "Metallica",
  file: "./music/Metallica - Enter Sandman.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 085105.png",
  },
{
  name: "Ride the Lightning",
  artist: "Metallica",
  file: "./music/Metallica – Ride the Lightning.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 085653.png",
  },
{
  name: "The Unforgiven III",
  artist: "Metallica",
  file: "./music/Metallica – The Unforgiven III.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 085736.png",
  },
{
  name: "The Unforgiven",
  artist: "Metallica",
  file: "./music/metallica-the-unforgiven.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 085105.png",
  },


];  
let playedSongs = []; // Массив уже воспроизведенных песен
let currentSongIndex = null; // Индекс текущей песни
let audio = new Audio(); // Создаем объект аудио

// Элементы управления
const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const volumeControl = document.getElementById('volumeControl');
const trackImage = document.getElementById('trackImage');
const fullscreenImageContainer = document.getElementById('fullscreenImageContainer');
const fullscreenImage = document.getElementById('fullscreenImage');
const showPlayerButton = document.getElementById('showPlayerButton');
const musicPlayer = document.getElementById('musicPlayer');

// Кнопки переключения песен
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

// Функция для выбора случайной песни
function getRandomSongIndex() {
  if (playedSongs.length === songs.length) {
    playedSongs = [];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (playedSongs.includes(randomIndex));

  playedSongs.push(randomIndex);
  return randomIndex;
}

// Функция для обновления изображения в полноэкранном режиме
function updateFullscreenImage(newImageSrc) {
  if (!fullscreenImageContainer.classList.contains('hidden')) {
    fullscreenImage.src = newImageSrc; // Обновляем изображение, если режим активен
  }
}

// Функция для загрузки и воспроизведения песни
function loadSong(index) {
  const song = songs[index];
  currentSongIndex = index;
  progressBar.value = 0;
  audio.src = song.file;
  document.getElementById('trackName').textContent = song.name;
  document.getElementById('trackArtist').textContent = song.artist;
  trackImage.src = song.image;

  // Обновляем полноэкранное изображение, если нужно
  updateFullscreenImage(song.image);

  // Применение цвета к плееру
  applyPlayerColor(song.image);

  audio.load();

  playIcon.innerHTML = 
    `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h4v16H6zM14 4h4v16h-4z" />`;
}

// Функция для извлечения основного цвета изображения
function getDominantColor(imageSrc, callback) {
  const img = new Image();
  img.crossOrigin = "Anonymous"; // Чтобы избежать CORS
  img.src = imageSrc;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0, g = 0, b = 0, total = 0;

    // Итерация через пиксели
    for (let i = 0; i < data.length; i += 4) {
      r += data[i]; // Красный
      g += data[i + 1]; // Зеленый
      b += data[i + 2]; // Синий
      total++;
    }

    // Среднее значение цветов
    r = Math.floor(r / total);
    g = Math.floor(g / total);
    b = Math.floor(b / total);

    callback(`rgb(${r}, ${g}, ${b})`);
  };
}

// Функция для уменьшения яркости цвета
function decreaseBrightness(rgb, factor = 0.5) {
  const match = rgb.match(/\d+/g).map(Number); // Извлекаем R, G, B

  // Уменьшаем каждый канал
  const adjust = (value) => Math.min(255, Math.max(0, value * factor));

  const r = adjust(match[0]);
  const g = adjust(match[1]);
  const b = adjust(match[2]);

  return `rgb(${r}, ${g}, ${b})`;
}

// Функция для применения цвета к плееру (с уменьшенной яркостью)
function applyPlayerColor(imageSrc) {
  getDominantColor(imageSrc, (color) => {
    const lessBrightColor = decreaseBrightness(color); // Уменьшаем яркость

    const player = document.getElementById("musicPlayer");
    player.style.backgroundColor = lessBrightColor; // Устанавливаем уменьшенную яркость для фона
    player.style.boxShadow = `0 4px 8px ${lessBrightColor}`;

    // Кнопки и текст плеера оставляем без изменений
    const controls = player.querySelectorAll("button, #trackName, #trackArtist, input[type='range']");
    controls.forEach(control => {
      control.style.color = "#fff"; // Белый цвет для текста и кнопок
      control.style.borderColor = "#fff"; // Белая граница для кнопок
    });
  });
}

// Функция для воспроизведения следующей песни
function playNextSong() {
  const nextSongIndex = getRandomSongIndex();
  loadSong(nextSongIndex);
  audio.load();
  audio.play();
}

// Функция для воспроизведения предыдущей песни
function playPrevSong() {
  if (playedSongs.length > 1) {
    playedSongs.pop(); // Убираем текущую песню из истории
    const prevSongIndex = playedSongs[playedSongs.length - 1];
    loadSong(prevSongIndex);
    audio.load();
    audio.play();
  }
}

// События для кнопок переключения
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);

// Обновление времени и прогресс-бара
audio.addEventListener('timeupdate', () => {
  if (!isNaN(audio.duration)) {
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    const totalMinutes = Math.floor(audio.duration / 60);
    const totalSeconds = Math.floor(audio.duration % 60);
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

// Обновление общей длительности после загрузки метаданных
audio.addEventListener('loadedmetadata', () => {
  const totalMinutes = Math.floor(audio.duration / 60);
  const totalSeconds = Math.floor(audio.duration % 60);
  totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
});

// Обработчик завершения песни
audio.addEventListener('ended', () => {
  playNextSong();
});


// Показать или скрыть плеер при нажатии на картинку
showPlayerButton.addEventListener('click', () => {
  if (musicPlayer.classList.contains('hidden')) {
    musicPlayer.classList.remove('hidden');
    musicPlayer.classList.add('show');
  } else {
    musicPlayer.classList.add('hidden');
    musicPlayer.classList.remove('show');
  }
  audio.pause();
  playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-6.291 3.745a1 1 0 01-1.461-.878V9.965a1 1 0 011.461-.878l6.291 3.745a1 1 0 010 1.756z" />`;
});

// Воспроизведение/пауза
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h4v16H6zM14 4h4v16h-4z" />`;
  } else {
    audio.pause();
    playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-6.291 3.745a1 1 0 01-1.461-.878V9.965a1 1 0 011.461-.878l6.291 3.745a1 1 0 010 1.756z" />`;
  }
});

// Обновление прогресс-бара
progressBar.addEventListener('input', (e) => {
  audio.currentTime = (e.target.value / 100) * audio.duration;
});

// Управление громкостью
volumeControl.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

// Обработчик для кнопки закрытия полноэкранного изображения
const closeFullscreenImageButton = document.getElementById('closeFullscreenImage');
closeFullscreenImageButton.addEventListener('click', () => {
  fullscreenImageContainer.classList.add('hidden');  // Скрываем контейнер
  document.body.classList.remove('no-scroll');  // Разрешаем прокрутку страницы
});

// Увеличение изображения при клике
trackImage.addEventListener('click', () => {
  fullscreenImageContainer.classList.remove('hidden');
  fullscreenImage.src = trackImage.src;
  document.body.classList.add('no-scroll');  // Блокируем прокрутку страницы
});

// Инициализация плеера при загрузке
if (songs.length > 0) {
  loadSong(getRandomSongIndex());
}


