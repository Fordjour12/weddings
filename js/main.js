const button = document.querySelector('button');
const body = document.querySelector('body');


function bg() {
    document.body.classList.toggle('dark-mode');
    button.style.backgroundColor = 'white';
    button.style.borderRadius = '100px';
}

button.addEventListener('click', bg);


