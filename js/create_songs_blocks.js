const loginSection = document.getElementById('login-section');
const mediaSection = document.getElementById('media-section');
const fileList = document.getElementById('file-list');
const audioPlayer = document.getElementById('audio-player');
const player = document.getElementById('player');
const audioSource = document.getElementById('audio-source');
const filters = document.getElementById('filters');

const playlists = {
    "lts123": [
        "Chess Type Beat.m4a",
        "What About Me.m4a"
    ],
    "l1234": [
        "Dandadan.m4a",
        "Шмата.mp3"
    ],
    // Додайте інші паролі та плейлисти за потреби
};

let currentIndex = 0;
let autoQueue = true;
let reverseOrder = false;
let stopAtEnd = false;
let songs = []; // Масив для пісень

function createSongElements() {
    fileList.innerHTML = ''; // Очищуємо список пісень перед додаванням нових
    songs.forEach((song, index) => {
        const songDiv = document.createElement('div');
        songDiv.className = 'file';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'file-title';
        titleDiv.textContent = song.split('.').slice(0, -1).join('.');

        const playButton = document.createElement('button');
        playButton.textContent = 'Play';
        playButton.onclick = () => playSong(index); // Відтворюємо пісню при натисканні

        songDiv.appendChild(titleDiv);
        songDiv.appendChild(playButton);
        fileList.appendChild(songDiv);
    });
}