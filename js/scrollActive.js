"use strick"
let loaded = false;
const menuHead = $('#subMenu a');
function loadForAncor(classSelect){
    classSelect.click(function (e) {
        let target = document.getElementById($(this).attr('href').split('#')[1]);
        console.log('STATIC Scroll target is valid and ajax already loaded. Calling doScrollAnimate()');
        doScrollAnimate(target);
        loaded = true;
    });
}
loadForAncor(menuHead);

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