'use strict';

document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;
    if(targetItem.closest(".icon-menu")){
        document.documentElement.classList.toggle('open-menu');
        document.querySelector('html').classList.toggle('scroll-off');
    }
}

