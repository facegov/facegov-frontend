// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const highlights = document.querySelectorAll('.highlight');
    const infoBox = document.getElementById('infoBox');
    const infoContent = document.getElementById('infoContent');
    const closeInfo = document.getElementById('closeInfo');

    highlights.forEach(highlight => {
        highlight.addEventListener('click', () => {
            infoContent.textContent = highlight.dataset.info;
            infoBox.style.display = 'block';
        });
    });

    closeInfo.addEventListener('click', () => {
        infoBox.style.display = 'none';
    });
});
