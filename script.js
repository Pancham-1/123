document.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showPopup();
    }
});

function showPopup() {
    var popup = document.getElementById('popup');
    var sound = document.getElementById('popupSound');
    popup.style.display = 'block';
    sound.play();
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
