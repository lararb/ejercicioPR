'use strict';

const wink = document.querySelector('.face');
const face = document.querySelector('.head');

function change (){
    wink.innerHTML = ';)';
}

face.addEventListener('click', change);