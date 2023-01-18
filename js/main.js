'use strict'

window.addEventListener('DOMContentLoaded', function() {

const menuBtn = document.querySelectorAll('.menu__btn');

function btnClick() {

    menuBtn.forEach(function(toggleButton) {
        toggleButton.addEventListener('click', function ({target}) {
            target.parentNode.parentNode.querySelector('.dropdown__list').classList.toggle('active');  
            target.textContent = target.textContent === '+' ? '-' : '+';
        });
    });

}

btnClick();

});