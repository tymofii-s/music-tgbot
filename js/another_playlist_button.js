// Функція для завантаження іншого плейлиста
function loadAnotherPlaylist() {
    const newPassword = prompt("Введіть новий пароль для іншого плейлиста:");
    if (newPassword) {
        document.getElementById('password').value = newPassword; // Встановлюємо новий пароль у поле
        checkPassword(); // Перевіряємо новий пароль
    }
}