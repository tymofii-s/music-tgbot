function playSong(index) {
    currentIndex = index;
    audioSource.src = `./files/${document.getElementById('password').value}/${songs[currentIndex]}`; // Формуємо шлях до файлу
    player.load();
    player.play();
    audioPlayer.classList.remove('hidden'); // Показуємо плеєр
}

function playNext() {
    if (reverseOrder) {
        currentIndex--;
    } else {
        currentIndex++;
    }

    if (stopAtEnd) {
        if (currentIndex < 0 || currentIndex >= songs.length) {
            return; // Не переходити за межі
        }
    } else {
        currentIndex = (currentIndex + songs.length) % songs.length; // Циклічний перехід
    }

    playSong(currentIndex);
}