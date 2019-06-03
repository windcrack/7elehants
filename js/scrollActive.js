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

const subCategory = document.querySelectorAll('.SubChanger'),
    leftArrow = document.querySelector('.fa-caret-right'),
    arrowClickRight = document.querySelector('.subArrowRight'),
    arrowClickLeft = document.querySelector('.subArrowLeft'),
    changerList = document.querySelector('.changeList'),
    innerGloabal = document.querySelector('.nameMenuSub')
up = document.querySelector('.fa-caret-left');
let cat = 0;

console.log(changerList)
// console.log(arrowClick)

function clickMenu(param1, param2, param3) {
    param1.addEventLister('click', () => {
        param2.forEach(item => {
            if (item.style.display === 'none') {
                item.style.display === 'flex'
            } else {
                item.style.display === 'none'
            }
        })
    })
}

function clickrRight() {
    arrowClickRight.addEventListener('click', () => {
        switch (cat) {
            case 0:
                cat += 1
                innerGloabal.innerHTML = `<a href="#mainGroup2">Япоская кухня</a>`
                changerList.innerHTML = `
                <li><a href="#">Товар1</a></li>
                <li><a href="#">Товар2</a></li>
                <li><a href="#">Товар3</a></li>
                <li><a href="#">Товар4</a></li>
                <li><a href="#">Товар4</a></li>
                `
                $('html,body').animate({scrollTop:$('#mainGroup2').offset().top-200 +"px"},{duration:1E3});
                break;
            case 1:
                cat += 1
                innerGloabal.innerHTML = `<a href="#mainGroup3">Напитки</a>`
                changerList.innerHTML = `
                <li><a href="#">Напиток1</a></li>
                <li><a href="#">Напиток2</a></li>
                <li><a href="#">Напиток3</a></li>
                <li><a href="#">Напиток4</a></li>
                <li><a href="#">Напиток5</a></li>
                <li><a href="#">Напиток6</a></li>
                `
                $('html,body').animate({scrollTop:$('#mainGroup3').offset().top -200 +"px"},{duration:1E3});
                break;
            default:
                cat = 0
                innerGloabal.innerHTML = `<a href="#mainGroup1">Европейская кухня</a>`
                changerList.innerHTML = `
                <li><a href="#subGroup1" class="activeMenuMainSub">Паста</a></li>
                <li><a href="#subGroup2">Закуски</a></li>
                <li><a href="#">Салаты</a></li>
                <li><a href="#">Супы</a></li>
                <li><a href="#">Горячее</a></li>
                <li><a href="#">Гарниры</a></li>
                <li><a href="#">Пицца</a></li>
                `
                $('html,body').animate({scrollTop:$('#mainGroup1').offset().top-200 +"px"},{duration:1E3});
        }
    })
}


function clickLeft(){
    arrowClickLeft.addEventListener('click', () => {
        switch (cat) {
            case 0:
                cat += 1
                innerGloabal.innerHTML = `<a href="#mainGroup2">Япоская кухня</a>`
                changerList.innerHTML = `
                <li><a href="#">Товар1</a></li>
                <li><a href="#">Товар2</a></li>
                <li><a href="#">Товар3</a></li>
                <li><a href="#">Товар4</a></li>
                <li><a href="#">Товар4</a></li>
                `
                $('html,body').animate({scrollTop:$('#mainGroup2').offset().top-200 +"px"},{duration:1E3});
                break;
            case 1:
                cat += 1
                innerGloabal.innerHTML = `<a href="#mainGroup1">Напитки</a>`
                changerList.innerHTML = `
                <li><a href="#">Напиток1</a></li>
                <li><a href="#">Напиток2</a></li>
                <li><a href="#">Напиток3</a></li>
                <li><a href="#">Напиток4</a></li>
                <li><a href="#">Напиток5</a></li>
                <li><a href="#">Напиток6</a></li>
                `
                $('html,body').animate({scrollTop:$('#mainGroup3').offset().top-200 +"px"},{duration:1E3});
                break;
            default:
                cat = 0
                innerGloabal.innerHTML = `<a href="#mainGroup1">Европейская кухня</a>`
                changerList.innerHTML = `
                <li><a href="#subGroup1" class="activeMenuMainSub">Паста</a></li>
                <li><a href="#subGroup2">Закуски</a></li>
                <li><a href="#">Салаты</a></li>
                <li><a href="#">Супы</a></li>
                <li><a href="#">Горячее</a></li>
                <li><a href="#">Гарниры</a></li>
                <li><a href="#">Пицца</a></li>
                `;
                $('html,body').animate({scrollTop:$('#mainGroup1').offset().top-200 +"px"},{duration:1E3});
                break;
        }
    })
}
clickLeft()
clickrRight()

// let lastId,
//     topMenu = $(".categorySub"),
//     topMenuHeight = topMenu.outerHeight() + 50,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function () {
//         let item = $($(this).attr("href"));
//         if (item.length) {
//             return item;
//         }
//     });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation



// function clickMenu() {
//     menuItems.addEventListener('click', () => {
//         let href = $(this).attr("href"),
//             offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//             console.log(`i go this ${href}`);
//         $('html, body').stop().animate({
//             scrollTop: offsetTop
//         }, 300);
        
//         e.preventDefault();
//     });
// }


// // Bind to scroll
// $(window).scroll(function () {
//     // Get container scroll position
//     let fromTop = $(this).scrollTop() + topMenuHeight;

//     // Get id of current scroll item
//     let cur = scrollItems.map(function () {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     let id = cur && cur.length ? cur[0].id : "";

//     if (lastId !== id) {
//         lastId = id;
//         // Set/remove active class
//         menuItems
//             .parent().removeClass("active")
//             .end().filter("[href='#" + id + "']").parent().addClass("active");
//     }
// });