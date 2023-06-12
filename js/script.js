function showPopup() {
    var popup = document.getElementById('popup');
    if(popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
        popup.classList.add('visible');
    }
}

function hidePopup() {
    var popup = document.getElementById('popup');
    if(popup.classList.contains('visible')) {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
    }
}
