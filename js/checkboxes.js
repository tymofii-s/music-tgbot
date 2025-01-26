const audio = document.querySelector('audio');
const repeatCheckbox = document.getElementById('repeatSong');

repeatCheckbox.addEventListener('change', function() {
    audio.loop = this.checked; // Set the audio loop property based on checkbox state
});

// Додаємо обробник події для закінчення пісні
player.onended = () => {
    if (repeatCheckbox.checked) {
        playSong(currentIndex); // Повторюємо пісню, якщо галочка активна
    } else if (autoQueue) {
        playNext();
    }
};

// Функції для фільтрів
function toggleAutoQueue() {
    autoQueue = document.getElementById('autoQueue').checked;
}

function toggleReverseOrder() {
    reverseOrder = document.getElementById('reverseOrder').checked;
}

function toggleStopAtEnd() {
    stopAtEnd = document.getElementById('stopAtEnd').checked;
}
