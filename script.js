document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const modelViewer = document.querySelector('.3d-model');
    const audio = document.getElementById('click');

    function openPopup() {
        popup.style.display = 'block';
        modelViewer.style.display = 'none';
        audio.currentTime = 0; // Reset the audio to the beginning
        audio.play().catch(error => console.error('Audio play error:', error));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closePopup() {
        popup.style.display = 'none';
        modelViewer.style.display = 'block';
    }

    document.querySelector('.click').addEventListener('click', openPopup);
    document.querySelector('.title-bar-controls [aria-label="Close"]').addEventListener('click', closePopup);
});
