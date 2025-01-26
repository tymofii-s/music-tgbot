function checkPassword() {
    const inputPassword = document.getElementById('password').value;

    if (playlists[inputPassword]) {
        loginSection.classList.add('hidden');
        mediaSection.classList.remove('hidden');
        filters.classList.remove('hidden');
        songs = playlists[inputPassword]; // Оновлюємо масив пісень
        createSongElements(); // Створюємо елементи пісень
    } else {
        alert('Неправильний пароль. Спробуйте ще раз.');
    }
}