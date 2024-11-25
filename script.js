// Массив песен
const songs = [
  {
    name: "Walk",
    artist: "Pantera",
    file: "./music/03 - Walk.mp3",
    image: "./Photo/Снимок экрана 2024-11-18 210154.png",
  },
  {
    name: "Cowboys From Hell",
    artist: "Pantera",
    file: "./music/Cowboys From Hell (2010 remaster)   Pantera.mp3",
    image: "./Photo/Снимок экрана 2024-11-20 084448.png",
  },
  {
    name: "Mouth For War",
    artist: "Pantera",
    file: "./music/Pantera - Vulgar Display Of Power - 01 - Mouth For War.mp3",
    image: "./Photo/Снимок экрана 2024-11-18 210154.png",
  },
  {
    name: "5 Minutes Alone",
    artist: "Pantera",
    file: "./music/Pantera - 5 Minutes Alone (2014 Remaster).mp3",
    image: "./Photo/Снимок экрана 2024-11-20 084540.png",
  },
  {
    name: "Hollow",
    artist: "Pantera",
    file: "./music/Pantera – Hollow.mp3",
    image: "./Photo/Снимок экрана 2024-11-18 210154.png",
  },
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
{
  name: "Los",
  artist: "Rammstein",
  file: "./music/Rammstein – Los.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 090619.png",
  },
{
  name: "Sonne",
  artist: "Rammstein",
  file: "./music/Rammstein - Sonne.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 090709.png",
  },
{
  name: "Links 2 3 4",
  artist: "Rammstein",
  file: "./music/02 Links 2 3 4.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 090709.png",
  },
{
  name: "Amerika",
  artist: "Rammstein",
  file: "./music/06 America.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 090619.png",
  },
{
  name: "Du Hast",
  artist: "Rammstein",
  file: "./music/Du Hast   Rammstein.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 090824.png",
  },
{
  name: "Alien Nation",
  artist: "Scorpions",
  file: "./music/04-Scorpions-Alien Nation.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 091212.png",
  },
{
  name: "Still Loving You",
  artist: "Scorpions",
  file: "./music/AUDIO-2018-07-25-00-24-31.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 091321.png",
  },
{
  name: "Wind of Change",
  artist: "Scorpions",
  file: "./music/Scorpions - Wind of Change.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 091351.png",
  },
{
  name: "No One Like You",
  artist: "Scorpions",
  file: "./music/Scorpions_-_No_One_Like_You_56423876.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 091424.png",
  },
{
  name: "Peacemaker",
  artist: "Scorpions",
  file: "./music/Scorpions_-_Peacemaker_(musmore.com).mp3",
  image: "./Photo/Снимок экрана 2024-11-20 091510.png",
  },
{
  name: "Sometimes",
  artist: "Skillet",
  file: "./music/10_-Sometimes-Skillet.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 094251.png",
  },
{
  name: "Hero",
  artist: "Skillet",
  file: "./music/01_-Hero-Skillet.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 094251.png",
  },
{
  name: "Sick of It",
  artist: "Skillet",
  file: "./music/Sick-of-It-Skillet-2013.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 094709.png",
  },
{
  name: "The Resistance",
  artist: "Skillet",
  file: "./music/The-Resistance-Skillet-2016.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 094429.png",
  },
{
  name: "Whispers in the Dark",
  artist: "Skillet",
  file: "./music/Whispers-in-the-Dark-Skillet-_FLAC_.mp3",
  image: "./Photo/Снимок экрана 2024-11-20 094525.png",
  },
{
  name: "Money Money Money",
  artist: "ABBA",
  file: "./music/1-09-Money_-Money_-Money.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 081419.png",
  },
{
  name: "The Winner Takes It All",
  artist: "ABBA",
  file: "./music/The-Winner-Takes-It-All-ABBA.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 081911.png",
  },
{
  name: "Gimme! Gimme! Gimme!",
  artist: "ABBA",
  file: "./music/Abba_Gimme!_Gimme!_Gimme!_A_Man_After_Midnight.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 082239.png",
  },
{
  name: "Mamma Mia",
  artist: "ABBA",
  file: "./music/ABBA-Mamma-Mia.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 082449.png",
  },
{
  name: "Lay All Your Love On Me",
  artist: "ABBA",
  file: "./music/05.-Lay-All-Your-Love-On-Me.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 081911.png",
  },
{
  name: "21 Guns",
  artist: "Green Day",
  file: "./music/1-16-21 Guns-SMR..mp3",
  image: "./Photo/Снимок экрана 2024-11-21 084720.png",
  },
{
  name: "Basket Case",
  artist: "Green Day",
  file: "./music/Dookie CD 1 TRACK 7 (FLAC).mp3",
  image: "./Photo/Снимок экрана 2024-11-21 084548.png",
  },
{
  name: "Boulevard Of Broken Dreams",
  artist: "Green Day",
  file: "./music/12 Boulevard Of Broken Dreams - Green Day.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 084629.png",
  },
{
  name: "American Idiot",
  artist: "Green Day",
  file: "./music/American Idiot (Deluxe) CD 1 TRACK 1 (FLAC).mp3",
  image: "./Photo/Снимок экрана 2024-11-21 084629.png",
  },
{
  name: "Brain Stew",
  artist: "Green Day",
  file: "./music/07 Brain Stew.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 091633.png",
  },
{
  name: "Beat It",
  artist: "Michael Jackson",
  file: "./music/Michael Jackson - Beat It.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 095432.png",
  },
{
  name: "Come Together",
  artist: "Michael Jackson",
  file: "./music/4_6030343007973149436.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 095533.png",
  },
{
  name: "Smooth Criminal",
  artist: "Michael Jackson",
  file: "./music/Michael Jackson - Smooth Criminal (2012 Remaster).mp3",
  image: "./Photo/Снимок экрана 2024-11-21 095026.png",
  },
{
  name: "Bad",
  artist: "Michael Jackson",
  file: "./music/Michael Jackson - Bad (2012 Remaster).mp3",
  image: "./Photo/Снимок экрана 2024-11-21 095026.png",
  },
{
  name: "Billie Jean",
  artist: "Michael Jackson",
  file: "./music/1-08 - Michael Jackson - Billie Jean.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 095432.png",
  },
{
  name: "Some Say",
  artist: "Sum 41",
  file: "./music/Sum 41 – Some Say.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 212555.png",
  },
{
  name: "Underclass Hero",
  artist: "Sum 41",
  file: "./music/Underclass Hero - Sum 41--online-audio-convert.com.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 212729.png",
  },
{
  name: "Pieces ",
  artist: "Sum 41",
  file: "./music/Pieces   Sum 41.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 212555.png",
  },
{
  name: "In Too Deep",
  artist: "Sum 41",
  file: "./music/In Too Deep   Sum 41.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 212616.png",
  },
{
  name: "Still Waiting ",
  artist: "Sum 41",
  file: "./music/audio.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 212527.png",
  },
{
  name: "18 мне уже",
  artist: "Руки Вверх",
  file: "./music/18 мне уже   Руки Вверх!.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 215522.png",
  },
{
  name: "Ая-яй-яй",
  artist: "Руки Вверх",
  file: "./music/Ая-яй-яй (2000)   Руки вверх.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 215732.png",
  },
{
  name: "Думала",
  artist: "Руки Вверх",
  file: "./music/Думала   Руки Вверх.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 215522.png",
  },
{
  name: " Он тебя целует",
  artist: "Руки Вверх",
  file: "./music/Руки Вверх - Он тебя целует.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 215557.png",
  },

{
  name: "Ну где же вы, девчонки?",
  artist: "Руки Вверх",
  file: "./music/Руки_Вверх #33.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 215732.png",
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
  audio.play();
}

// Функция для воспроизведения предыдущей песни
function playPrevSong() {
  if (playedSongs.length > 1) {
    playedSongs.pop(); // Убираем текущую песню из истории
    const prevSongIndex = playedSongs[playedSongs.length - 1];
    loadSong(prevSongIndex);
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

// Показать плеер при нажатии на картинку
showPlayerButton.addEventListener('click', () => {
  showPlayerButton.classList.add('clicked');
  setTimeout(() => {
    musicPlayer.classList.add('show');
  }, 300);
  setTimeout(() => {
    showPlayerButton.classList.remove('clicked');
  }, 500);
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

// Увеличение изображения на весь экран
trackImage.addEventListener('click', () => {
  fullscreenImage.src = trackImage.src;
  fullscreenImageContainer.classList.remove('hidden');
  document.body.classList.add('no-scroll');
});

// Загружаем первую песню
const firstSongIndex = getRandomSongIndex();
loadSong(firstSongIndex);
