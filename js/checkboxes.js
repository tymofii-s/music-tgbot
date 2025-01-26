// Додаємо обробник події для закінчення пісні
player.onended = () => {
    if (autoQueue) playNext();
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
