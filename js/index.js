document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
        header = document.querySelector('.headerTitle'),
        btnRezerv = document.querySelector('.rezerv'),
        btnRezervCenter = document.querySelector('.rezervCenter'),
        btnRezervRomatic = document.querySelector('.rezervRomantic'),
        modal = document.querySelector('.modal'),
        arrows = $('[href="#descritp"]'),
        btnClose = document.querySelector('.modalBodyClose'),
        blockVisibleMenu = document.querySelector('#descritp'),
        mainMenu = document.querySelector('.menuMain');


    function openBlock(button, block) {
        if (button !== null) {
            button.addEventListener('click', () => {
                block.style.display = 'flex'
            })
        }
    }

    function closeBlock(targeting, block) {
        if (targeting !== null) {
            targeting.addEventListener('click', () => {
                block.style.display = 'none'
            })
        }

    }

    function scrollerAcrossArrow(trigg) {
        trigg.on('click', function (e) {
            let godesc = $(this);
            $('html, body').stop().animate({
                scrollTop: $(godesc.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        })
    }

    function scrollMouse(id, block) {
        if (id !== null) {
            postion = $(id).offset().top;
            $(document).on('scroll', () => {
                let scroll = $(document).scrollTop();
                if (scroll > postion) {
                    block.style.display = 'flex'
                } else {
                    block.style.display = 'none'
                }
            })
        }

    }

    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
    })
    // if (item.querySelector('.detailed')!==null)
    scrollerAcrossArrow(arrows)
    openBlock(btnMenu, mainMenu)
    openBlock(btnRezerv, modal)
    openBlock(btnRezervCenter, modal)
    openBlock(btnRezervRomatic, modal)
    closeBlock(header, mainMenu)
    closeBlock(btnClose, modal)
    scrollMouse(blockVisibleMenu, mainMenu)
})