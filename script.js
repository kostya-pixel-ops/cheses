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
  file: "./music/Ну_где_же_вы,_девчонки_Руки_Вверх!.m4a--online-audio-convert.com.mp3",
  image: "./Photo/Снимок экрана 2024-11-21 215732.png",
  },
{
  name: "My Name Is",
  artist: "Eminem",
  file: "./music/02. My Name Is.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 154503.png",
  },
{
  name: "Brand New Dance",
  artist: "Eminem",
  file: "./music/04. Brand New Dance.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 154908.png",
  },
{
  name: "Houdini",
  artist: "Eminem",
  file: "./music/11. Houdini.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 160340.png",
  },
{
  name: "Rap God",
  artist: "Eminem",
  file: "./music/09. Rap God.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 160509.png",
  },
{
  name: "Square Dance",
  artist: "Eminem",
  file: "./music/05 Square Dance.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 160822.png",
  },
{
  name: "Who Shot Ya",
  artist: "The Notorious B.I.G.",
  file: "./music/The Notorious B.I.G. - Who Shot Ya.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 162134.png",
  },
{
  name: "Ready to Die",
  artist: "The Notorious B.I.G.",
  file: "./music/The Notorious B.I.G. - Ready to Die.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 162230.png",
  },
{
  name: "Just Playing (Dreams)",
  artist: "The Notorious B.I.G.",
  file: "./music/The Notorious B.I.G. - Just Playing (Dreams).mp3",
  image: "./Photo/Снимок экрана 2024-11-25 162230.png",
  },
{
  name: "Big Poppa",
  artist: "The Notorious B.I.G.",
  file: "./music/The Notorious B.I.G. - Big Poppa.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 162230.png",
  },
{
  name: "Gimme The loot",
  artist: "The Notorious B.I.G.",
  file: "./music/Gimme The loot.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 162230.png",
  },
{
  name: "Still D.R.E",
  artist: "Dr.Dre, Snoop Dogg",
  file: "./music/Dr. Dre feat. Snoop Dogg - Still D.R.E.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 163618.png",
  },
{
  name: "Murder Ink",
  artist: "Dr.Dre, Hittman, Ms.Roq",
  file: "./music/Dr. Dre feat. Hittman, Ms. Roq - Murder Ink.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 163618.png",
  },
{
  name: "What's The Difference",
  artist: "Dr.Dre, Eminem, Xzibit",
  file: "./music/Dr. Dre feat. Eminem, Xzibit - What's The Difference.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 163618.png",
  },
{
  name: "The Watcher",
  artist: "Dr.Dre, Eminem, Knoc 'Turn 'Al",
  file: "./music/Dr._Dre_feat._Eminem,_Knoc_Turn_Al-The_Watcher.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 163618.png",
  },
{
  name: "Forgot About Dre",
  artist: "Dr.Dre, Eminem",
  file: "./music/Dr. Dre feat. Eminem - Forgot About Dre.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 163618.png",
  },
{
  name: "Can't C Me",
  artist: "2Рас",
  file: "./music/2Рас - Cant C Me.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 165321.png",
  },
{
  name: "Hit'Em Up",
  artist: "2Pac, The Outlawz",
  file: "./music/2Pac feat. The Outlawz - Hit 'Em Up.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 165351.png",
  },
{
  name: "2 Of Amerikaz Most Wanted",
  artist: "2Pac, Snoop Dogg",
  file: "./music/2Pac feat. Snoop Doggy Dogg - 2 Of Amerikaz Most Wanted.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 165351.png",
  },
{
  name: "California Love",
  artist: "2Pac, Roger Troutman, Dr. Dre",
  file: "./music/2Pac feat. Roger Troutman, Dr. Dre - California Love.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 165438.png",
  },
{
  name: " All Eyez On Me",
  artist: "2Pac, Big Syke",
  file: "./music/2Pac feat. Big Syke - All Eyez On Me.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 165321.png",
  },
{
  name: "TV Off",
  artist: "Kendrick Lamar",
  file: "./music/Kendrick Lamar - TV Off.mp3",
  image: "./Photo/Kendrick-Lamar-GNX-cover.jpg",
  },
{
  name: "Not Like Us",
  artist: "Kendrick Lamar",
  file: "./music/Kendrick Lamar - Not Like Us.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 171410.png",
  },
{
  name: "HUMBLE",
  artist: "Kendrick Lamar",
  file: "./music/Kendrick Lamar - HUMBLE.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 171449.png",
  },
{
  name: "DNA",
  artist: "Kendrick Lamar",
  file: "./music/Kendrick Lamar - DNA.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 171529.png",
  },
{
  name: "Backseat Freestyle",
  artist: "Kendrick Lamar",
  file: "./music/Kendrick Lamar - Backseat Freestyle.mp3",
  image: "./Photo/Снимок экрана 2024-11-25 171609.png",
  },
{
  name: "Another One Bites The Dust",
  artist: "Queen",
  file: "./Rock/Rock.Music/Queen - Greatest Hits - 02 - Another One Bites The Dust.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 185430.png",
  },
{
  name: "Fat Bottomed Girls",
  artist: "Queen",
  file: "./Rock/Rock.Music/FAT BOTTOMED GIRLS.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 185605.png",
  },
{
  name: "Don't Stop Me Now",
  artist: "Queen",
  file: "./Rock/Rock.Music/Queen   Don t Stop Me Now.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 185605.png",
  },
{
  name: "The Show Must Go On",
  artist: "Queen",
  file: "./Rock/Rock.Music/(12) [Queen] The Show Must Go On.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 185726.png",
  },
{
  name: "Tear It Up",
  artist: "Queen",
  file: "./Rock/Rock.Music/04. Queen - Tear It Up.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 190028.png",
  },
{
  name: "Sail Away",
  artist: "Deep Purple",
  file: "./Rock/Rock.Music/Burn (5).flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 190113.png",
  },
{
  name: "Soldier Of Fortune",
  artist: "Deep Purple",
  file: "./Rock/Rock.Music/(09) [Deep Purple] Soldier Of Fortune.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 192931.png",
  },
{
  name: "Maybe I'm a Leo",
  artist: "Deep Purple",
  file: "./Rock/Rock.Music/(02) [Deep Purple] Maybe I'm A Leo.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 192931.png",
  },
{
  name: "Strange Kind Of Woman",
  artist: "Deep Purple",
  file: "./Rock/Rock.Music/(03) [Deep Purple] Strange Kind of Woman.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193025.png",
  },
{
  name: "Smoke On The Water",
  artist: "Deep Purple",
  file: "./Rock/Rock.Music/Smoke On The Water.flac--online-audio-convert.com.flac--online-audio-convert.com.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 192957.png",
  },
{
  name: "Another Brick In The Wall, Pt.2",
  artist: "Pink Floyd",
  file: "./Rock/Rock.Music/05 Another Brick In The Wall, Part 2.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193213.png",
  },
{
  name: "Money",
  artist: "Pink Floyd",
  file: "./Rock/Rock.Music/Money - Pink Floyd.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193236.png",
  },
{
  name: "Time",
  artist: "Pink Floyd",
  file: "./Rock/Rock.Music/Time - Pink Floyd.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193236.png",
  },
{
  name: "Have A Cigar",
  artist: "Pink Floyd",
  file: "./Rock/Rock.Music/077. Pink Floyd - Have a Cigar.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193300.png",
  },
{
  name: "Hey You",
  artist: "Pink Floyd",
  file: "./Rock/Rock.Music/14. hey you.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193332.png",
  },
{
  name: "Girl",
  artist: "The Beatles",
  file: "./Rock/Rock.Music/14  Girl.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 193821.png",
  },
{
  name: "Bad Boy",
  artist: "The Beatles",
  file: "./Rock/Rock.Music/16 - Bad Boy.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194147.png",
  },
{
  name: "Lucy In The Sky With Diamonds",
  artist: "The Beatles",
  file: "./Rock/Rock.Music/14  Lucy In The Sky With Diamonds.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194224.png",
  },
{
  name: "Yesterday",
  artist: "The Beatles",
  file: "./Rock/Rock.Music/13 - Yesterday.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194250.png",
  },
{
  name: "Come Together",
  artist: "The Beatles",
  file: "./Rock/Rock.Music/01.-Come Together.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194317.png",
  },
{
  name: "My Wild Love",
  artist: "The Doors",
  file: "./Rock/Rock.Music/08. My Wild Love (Remastered).flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194456.png",
  },
{
  name: "Spanish Caravan",
  artist: "The Doors",
  file: "./Rock/Rock.Music/07. Spanish Caravan (Remastered).flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194456.png",
  },
{
  name: "People Are Strange",
  artist: "The Doors",
  file: "./Rock/Rock.Music/07 People Are Strange.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194820.png",
  },
{
  name: "Soul Kitchen",
  artist: "The Doors",
  file: "./Rock/Rock.Music/02 Soul Kitchen.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194851.png",
  },
{
  name: "Riders on the Storm",
  artist: "The Doors",
  file: "./Rock/Rock.Music/10 - Riders On The Storm.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 194914.png",
  },
{
  name: "N.I.B",
  artist: "Black Sabbat",
  file: "./Rock/Rock.Music/10. N.I.B..flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 195408.png",
  },
{
  name: "Children Of The Grave",
  artist: "Black Sabbat",
  file: "./Rock/Rock.Music/Black Sabbath – Children of the Grave.mp3--online-audio-convert.com.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 195432.png",
  },
{
  name: "Hand of doom",
  artist: "Black Sabbat",
  file: "./Rock/Rock.Music/06-Hand of Doom.mp3--online-audio-convert.com.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 195455.png",
  },
{
  name: "Paranoid",
  artist: "Black Sabbat",
  file: "./Rock/Rock.Music/02. Paranoid (2012 - Remaster).flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 195432.png",
  },
{
  name: "Iron Man",
  artist: "Black Sabbat",
  file: "./Rock/Rock.Music/01 - Black Sabbath - Iron Man.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 195455.png",
  },
{
  name: "Stairway to Heaven",
  artist: "Led Zeppelin",
  file: "./Rock/Rock.Music/Stairway To Heaven.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 203539.png",
  },
{
  name: "Travelling Riverside Blues",
  artist: "Led Zeppelin",
  file: "./Rock/Rock.Music/08_Led_Zeppelin_Travelling_Riverside_Blues_29669_Top_Gear;Remaster.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 203606.png",
  },
{
  name: "Immigrant Song",
  artist: "Led Zeppelin",
  file: "./Rock/Rock.Music/01 - Immigrant Song.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 203638.png",
  },
{
  name: "Misty Mountain Hop",
  artist: "Led Zeppelin",
  file: "./Rock/Rock.Music/05. Misty Mountain Hop.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 203744.png",
  },
{
  name: "Whole Lotta Love",
  artist: "Led Zeppelin",
  file: "./Rock/Rock.Music/1 - whole lotta love  - led zeppelin - 1969.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 203832.png",
  },
{
  name: "Highway to Hell",
  artist: "AC/DC",
  file: "./Rock/Rock.Music/01. Highway To Hell.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 204102.png",
  },
{
  name: "Hells Bells",
  artist: "AC/DC",
  file: "./Rock/Rock.Music/DC.flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 204158.png",
  },
{
  name: "T.N.T",
  artist: "AC/DC",
  file: "./Rock/Rock.Music/09 T.N.T..flac.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 204223.png",
  },
{
  name: "Big Gun",
  artist: "AC/DC",
  file: "./Rock/Rock.Music/ACDC - Big Gun.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 204317.png",
  },
{
  name: "Heave a Drink on me",
  artist: "AC/DC",
  file: "./Rock/Rock.Music/DC.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 204435.png",
  },
{
  name: "Ace of spades",
  artist: "Motorhead",
  file: "./Rock/Rock.Music/Motorhead - Ace Of Spades.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205108.png",
  },
{
  name: "God Was Never On your Side",
  artist: "Motorhead",
  file: "./Rock/Rock.Music/Motrhead-God-Was-Never-on-Your-Side.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205140.png",
  },
{
  name: "Smiling Like a Killer",
  artist: "Motorhead",
  file: "./Rock/Rock.Music/Motorhead – Smiling Like A Killer.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205214.png",
  },
{
  name: "Till The End",
  artist: "Motorhead",
  file: "./Rock/Rock.Music/Motorhead – Till The End--online-audio-convert.com.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205301.png",
  },
{
  name: "Rock Out",
  artist: "Motorhead",
  file: "./Rock/Rock.Music/Motorhead - Rock Out.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205328.png",
  },
{
  name: "Don't Cry",
  artist: "Guns'N Roses",
  file: "./Rock/Rock.Music/Don't Cry.MP3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205822.png",
  },
{
  name: "Welcome to the Jungle",
  artist: "Guns'N Roses",
  file: "./Rock/Rock.Music/Guns_n_Roses_Welcome_to_the_Jungle_Studio_Version_High_QualityMP3--online-audio-convert.com.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205858.png",
  },
{
  name: "Sweet Child O' Mine ",
  artist: "Guns'N Roses",
  file: "./Rock/Rock.Music/Guns _n Roses-  Sweet Child o_  Mine - Lyrics 50eVxQGkiok.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205925.png",
  },
{
  name: "Paradise City",
  artist: "Guns'N Roses",
  file: "./Rock/Rock.Music/Guns N' Roses - Paradise City.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 205925.png",
  },
{
  name: "Civil War",
  artist: "Guns'N Roses",
  file: "./Rock/Rock.Music/Civil War.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 210045.png",
  },
{
  name: "Траса Е-95",
  artist: "Алиса",
  file: "./Rock/Rock.Music/Траса E-95   Алиса.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 210650.png",
  },
{
  name: "Веретено",
  artist: "Алиса",
  file: "./Rock/Rock.Music/Веретено   Алиса.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 210716.png",
  },
{
  name: "Мама",
  artist: "Алиса",
  file: "./Rock/Rock.Music/Мама (Дурень 1997)   АлисА.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 210650.png",
  },
{
  name: "Всё это рок-н-рол",
  artist: "Алиса",
  file: "./Rock/Rock.Music/Всё это рок-н-ролл - Алиса.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 210751.png",
  },
{
  name: "Моё поколение",
  artist: "Алиса",
  file: "./Rock/Rock.Music/Моё поколение - Алиса.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 210829.png",
  },
{
  name: "Беспечный Ангел",
  artist: "Ария",
  file: "./Rock/Rock.Music/Ария   Беспечный ангел.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 211230.png",
  },
{
  name: "Штиль",
  artist: "Ария",
  file: "./Rock/Rock.Music/Штиль - Ария.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 211251.png",
  },
{
  name: "Осколок льда",
  artist: "Ария",
  file: "./Rock/Rock.Music/Осколок Льда - Ария.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 211251.png",
  },
{
  name: "Потерянный рай",
  artist: "Ария",
  file: "./Rock/Rock.Music/Ария - Потерянный рай.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 211322.png",
  },
{
  name: "Там высоко",
  artist: "Ария",
  file: "./Rock/Rock.Music/Там Высоко - Ария.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 211402.png",
  },
{
  name: "Полковнику никто не пишет",
  artist: "Би-2",
  file: "./Rock/Rock.Music/Би-2 - Полковнику никто не пишет (2000).mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212206.png",
  },
{
  name: "Варвара",
  artist: "Би-2",
  file: "./Rock/Rock.Music/Варвара - Би-2.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212206.png",
  },
{
  name: "Её глаза",
  artist: "Би-2",
  file: "./Rock/Rock.Music/Её глаза - Би-2.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212303.png",
  },
{
  name: "Серебро",
  artist: "Би-2",
  file: "./Rock/Rock.Music/Серебро   Би-2.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212330.png",
  },
{
  name: "Блюз 16+",
  artist: "Би-2",
  file: "./Rock/Rock.Music/Блюз 16+   Би-2.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212352.png",
  },
{
  name: "Звезда по имени солнце",
  artist: "Кино",
  file: "./Rock/Rock.Music/Кино – Звезда по имени Солнце.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212551.png",
  },
{
  name: "Спокойная ночь",
  artist: "Кино",
  file: "./Rock/Rock.Music/Спокойная ночь.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212620.png",
  },
{
  name: "Кукушка",
  artist: "Кино",
  file: "./Rock/Rock.Music/Кукушка .m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212644.png",
  },
{
  name: "Последний Герой",
  artist: "Кино",
  file: "./Rock/Rock.Music/Кино_-_Последний_Герой.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 212644.png",
  },
{
  name: "Троллейбус",
  artist: "Кино",
  file: "./Rock/Rock.Music/Виктор_Цой_и_группа_Кино_–_Троллейб.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 213347.png",
  },
{
  name: "Moscow Colling",
  artist: "Park Gorky",
  file: "./Rock/Rock.Music/Moscow colling – Gorky Park.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 213703.png",
  },
{
  name: "Bang",
  artist: "Park Gorky",
  file: "./Rock/Rock.Music/Bang   Gorky Park.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 213743.png",
  },
{
  name: "Stranger Park",
  artist: "Park Gorky",
  file: "./Rock/Rock.Music/Gorky Park - Stranger.Mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 213703.png",
  },
{
  name: "Two Candles",
  artist: "Park Gorky",
  file: "./Rock/Rock.Music/Gorky park – Two candles.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 213703.png",
  },
{
  name: "Ocean",
  artist: "Park Gorky",
  file: "./Rock/Rock.Music/Gorky Park – Ocean.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 213847.png",
  },
{
  name: "Numb",
  artist: "Linkin Park",
  file: "./Rock/Rock.Music/4_108723768498585614.m4a.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214052.png",
  },
{
  name: "In The End",
  artist: "Linkin Park",
  file: "./Rock/Rock.Music/08 - In The End.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214117.png",
  },
{
  name: "Faint",
  artist: "Linkin Park",
  file: "./Rock/Rock.Music/Faint   Linkin Park.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214052.png",
  },
{
  name: "What I've Done",
  artist: "Linkin Park",
  file: "./Rock/Rock.Music/Linkin Park – What Ive Done.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214154.png",
  },
{
  name: "The Emptiness Machine",
  artist: "Linkin Park",
  file: "./Rock/Rock.Music/The Emptiness Machine.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214239.png",
  },
{
  name: "Toxicity",
  artist: "System of Down",
  file: "./Rock/Rock.Music/System Of A Down - Toxicity - Track12 - Toxicity.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214707.png",
  },
{
  name: "lonely Day",
  artist: "System of Down",
  file: "./Rock/Rock.Music/Lonely Day   System of a Down.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214502.png",
  },
{
  name: "B.Y.O.B.",
  artist: "System of Down",
  file: "./Rock/Rock.Music/System Of A Down – BYOB.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214609.png",
  },
{
  name: "Sugar",
  artist: "System of Down",
  file: "./Rock/Rock.Music/Sugar   System Of Down.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214628.png",
  },
{
  name: "Chop Suey!",
  artist: "System of Down",
  file: "./Rock/Rock.Music/06 Chop Suey!.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-03 214707.png",
  },
{
  name: "Behind Blue Eyes",
  artist: "Limp Bizkit",
  file: "./Rock/Rock.Music/Behind Blue Eyes - Limp Bizkit.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 074921.png",
  },
{
  name: "Take a Look Around",
  artist: "Limp Bizkit",
  file: "./Rock/Rock.Music/Take a look around   Limp Bizkit.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075010.png",
  },
{
  name: "Rollin' (Air Raid Vehicle)",
  artist: "Limp Bizkit",
  file: "./Rock/Rock.Music/Rollin  (Air Raid Vehicle).mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075010.png",
  },
{
  name: "My Generation",
  artist: "Limp Bizkit",
  file: "./Rock/Rock.Music/HHMNN.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075010.png",
  },
{
  name: "My Way",
  artist: "Limp Bizkit",
  file: "./Rock/Rock.Music/audio.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075010.png",
  },
{
  name: "(Sic)",
  artist: "Slipknot",
  file: "./Rock/Rock.Music/(sic)   Slipknot.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075639.png",
  },
{
  name: "Before I Forget",
  artist: "Slipknot",
  file: "./Rock/Rock.Music/Slipknot –  Before I Forget.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075721.png",
  },
{
  name: "Psychosocial",
  artist: "Slipknot",
  file: "./Rock/Rock.Music/Slipknot - Psychosocial.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075721.png",
  },
{
  name: "People = Shit",
  artist: "Slipknot",
  file: "./Rock/Rock.Music/Slipknot –  People = Shit.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075721.png",
  },
{
  name: "Duality",
  artist: "Slipknot",
  file: "./Rock/Rock.Music/_Slipknot_Duality_OFFICIAL_VIDEO__6fVE8kSM43I_100--online-audio-convert.com.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 075755.png",
  },
{
  name: "Dissident Aggressor",
  artist: "Slayer",
  file: "./Rock/Rock.Music/Slayer_Dissident_Aggressor_Judas_Priest_cover_Lyrics_on_screen.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080410.png",
  },
{
  name: "South of Heaven",
  artist: "Slayer",
  file: "./Rock/Rock.Music/South Of Heaven   Slayer.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080410.png",
  },
{
  name: "Skeletons of Society",
  artist: "Slayer",
  file: "./Rock/Rock.Music/Slayer – Skeletons Of Society.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080231.png",
  },
{
  name: "The Antichrist",
  artist: "Slayer",
  file: "./Rock/Rock.Music/Slayer – The Antichrist.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080254.png",
  },
{
  name: "Raining Blood",
  artist: "Slayer",
  file: "./Rock/Rock.Music/Slayer – Raining Blood.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080341.png",
  },
{
  name: "Лесник",
  artist: "Король и Шут",
  file: "./Rock/Rock.Music/Лесник.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080640.png",
  },
{
  name: "Прыгнуть со сколы",
  artist: "Король и Шут",
  file: "./Rock/Rock.Music/Прыгну со сколы   Король И Шут.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080701.png",
  },
{
  name: "Ром",
  artist: "Король и Шут",
  file: "./Rock/Rock.Music/korol_i_shut_-_rom_(zaycev.net).mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080736.png",
  },
{
  name: "Мёртвый анархист",
  artist: "Король и Шут",
  file: "./Rock/Rock.Music/КИШ - Мёртвый Анархист.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080835.png",
  },
{
  name: "Фред",
  artist: "Король и Шут",
  file: "./Rock/Rock.Music/Фред   Король и Шут.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 080902.png",
  },
{
  name: "Just",
  artist: "Radiohead",
  file: "./Rock/Rock.Music/Radiohead - Just.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081023.png",
  },
{
  name: "My Iron Lung",
  artist: "Radiohead",
  file: "./Rock/Rock.Music/Radiohead – My Iron Lung.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081023.png",
  },
{
  name: "The Bends",
  artist: "Radiohead",
  file: "./Rock/Rock.Music/radiohead - the bends.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081023.png",
  },
{
  name: "no surprises",
  artist: "Radiohead",
  file: "./Rock/Rock.Music/radiohead - no surprises.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081115.png",
  },
{
  name: "Karma Police",
  artist: "Radiohead",
  file: "./Rock/Rock.Music/Karma Police   Radiohead.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081115.png",
  },
{
  name: "Island In The Sun",
  artist: "Weezer",
  file: "./Rock/Rock.Music/Island In The Sun   Weezer.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081339.png",
  },
{
  name: "Pork And Beans",
  artist: "Weezer",
  file: "./Rock/Rock.Music/Pork and Beans   Weezer.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081339.png",
  },
{
  name: "Undone - The Sweater Song",
  artist: "Weezer",
  file: "./Rock/Rock.Music/Weezer – Undone - The Sweater Song.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081422.png",
  },
{
  name: "Say It Ain't So",
  artist: "Weezer",
  file: "./Rock/Rock.Music/6061d09a5be4c.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081422.png",
  },
{
  name: "El Scorcho",
  artist: "Weezer",
  file: "./Rock/Rock.Music/Weezer – El Scorcho.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081459.png",
  },
{
  name: "Peace Sells",
  artist: "Negadeth",
  file: "./Rock/Rock.Music/Megadeth – Peace Sells.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081751.png",
  },
{
  name: "A Tout Le Monde",
  artist: "Megadeth",
  file: "./Rock/Rock.Music/04-Megadeth - A Tout le Monde.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081838.png",
  },
{
  name: "Tornado Of Souls",
  artist: "Megadeth",
  file: "./Rock/Rock.Music/Tornado Of Souls   Megadeth.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081857.png",
  },
{
  name: "Angry Again",
  artist: "Megadeth",
  file: "./Rock/Rock.Music/Megadeth – Angry Again.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081919.png",
  },
{
  name: "She-Wolf",
  artist: "Megadeth",
  file: "./Rock/Rock.Music/Megadeth – She-Wolf.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 081952.png",
  },
{
  name: "Dream On",
  artist: "Aerosmith",
  file: "./Rock/Rock.Music/172 - Aerosmith - Dream On.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 082126.png",
  },
{
  name: "Walk This Way",
  artist: "Aerosmith",
  file: "./Rock/Rock.Music/RUN DMC featuring Aerosmith - Walk This Way.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 082431.png",
  },
{
  name: "What It Takes",
  artist: "Aerosmith",
  file: "./Rock/Rock.Music/Aerosmith - What It Takes.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 082458.png",
  },
{
  name: "I Don't Want to Miss a Thing",
  artist: "Aerosmith",
  file: "./Rock/Rock.Music/Aerosmith_I-Don-t-Want-to-Miss-a-Thing.mp3.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 082519.png",
  },
{
  name: "Pink",
  artist: "Aerosmith",
  file: "./Rock/Rock.Music/Pink   Aerosmith.mp3",
  image: "./Rock/Rock.Photo/Снимок экрана 2024-12-04 082711.png",
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


