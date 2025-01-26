// Додаємо обробники подій для кнопок навігації
document.getElementById('next-button').onclick = playNext;
document.getElementById('prev-button').onclick = () => {
    currentIndex = reverseOrder ? currentIndex + 1 : currentIndex - 1;
    if (currentIndex < 0) currentIndex = songs.length - 1;
    if (currentIndex >= songs.length) currentIndex = 0;
    playSong(currentIndex);
};