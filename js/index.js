document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
        header = document.querySelector('.headerTitle'),
        btnRezerv = document.querySelectorAll('.rezerv'),
        modal = document.querySelector('.modal'),
        articleBlock = document.querySelectorAll('.articleBlock'),
        modalArt = document.querySelector('.modalBg'),
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

    function openBlockMassive (arr, openBlock) {
        arr.forEach(element => {
          element.addEventListener('click', () =>{
              openBlock.style.display = 'block';
          })  
        })
    }

    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
    })
    // if (item.querySelector('.detailed')!==null)
    scrollerAcrossArrow(arrows)
    openBlock(btnMenu, mainMenu)
    openBlockMassive(btnRezerv, modal)
    openBlockMassive(articleBlock, modalArt)
    closeBlock(header, mainMenu)
    closeBlock(btnClose, modal)
    scrollMouse(blockVisibleMenu, mainMenu)
})