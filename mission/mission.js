
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        logo.setAttribute('src', 'images/byui-logo-dark.png');
        document.getElementById('content').style.borderColor = 'white'
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
        document.getElementById('content').style.borderColor = 'black'
    }
}           
                    