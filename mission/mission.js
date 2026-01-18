
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let main = document.querySelector('main');
let h2 = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.style.backgroundColor = '#333';
        body.style.color = 'white';
        logo.setAttribute('src', 'images/byui-logo-dark.png');
        main.style.borderColor = 'white'
        h2.style.color = '#71b5d3'
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
        main.style.borderColor = 'black'
        h2.style.color = '#0165a3'
    }
}           
                    