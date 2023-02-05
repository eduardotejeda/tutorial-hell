const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('YOU CLICK ME!');
    console.log('I HOPE IT WORKED!')
}

function scream() {
     console.log('AAAAAHHHH');
     console.log('Stop touching me');
}

btn.onmouseenter = scream;