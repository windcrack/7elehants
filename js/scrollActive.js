"use strick"
let loaded = false;
const menuHead = $('#subMenu a'),
    subMenu = $('.subMenu');

function loadForAncor(classSelect) {
    classSelect.click(function (e) {
        let target = document.getElementById($(this).attr('href').split('#')[1]);
        console.log('STATIC Scroll target is valid and ajax already loaded. Calling doScrollAnimate()');
        doScrollAnimate(target);
        loaded = true;
    });
}
loadForAncor(menuHead);
loadForAncor(subMenu);

function doScrollAnimate($target) {
    console.log('Animate to ' + $target.id);
    $('body,html').animate({
        scrollTop: $target.offsetTop - 200 + "px"
    }, 1500);
}
if (!loaded && false) {
    if (window.location.hash) {
        let target = document.querySelector(window.location.hash);
    }
    if (target && (target.classList.contains('ajax') && target.classList.contains('group'))) {
        console.log('here');
        let animateTimer = setInterval(function () {
            if (target.classList.contains('loaded')) {
                //стопимся
                clearInterval(animateTimer);
                console.log('Scroll target is valid and ajax already loaded. Calling doScrollAnimate()');
                doScrollAnimate(target);
            } else {
                console.log('Waiting...');
            }
        }, 50);
    }
}

let i = 0;
down.addEventLister('click', () =>{
    divs[i].style.display = "none";
    i = (i < (divs.length - 1)) ? i + 1 : 0;
    divs[i].style.display = "block";
})
up.addEventLister('click', () =>{
    divs[i].style.display = "none";
    i = (i > 0) ? i - 1 : divs.length - 1;
    divs[i].style.display = "block";
})