// JavaScript source code
const body = document.body;
const switchButton = document.getElementById('switchButton');

switchButton.addEventListener('click', () => {
    if (body.classList.contains('bg-light')) {
        body.classList.toggle('bg-light');
        body.classList.toggle('bg-dark');
    } else {
        body.classList.toggle('bg-dark');
        body.classList.toggle('bg-light');
    }
});