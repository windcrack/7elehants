document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
        header = document.querySelector('.headerTitle'),
        btnRezerv = document.querySelectorAll('.rezerv'),
        modal = document.querySelector('.modal'),
        modalBody = document.querySelector('.modalBody'),
        articleBlock = document.querySelectorAll('.articleBlock'),
        modalArt = document.querySelector('.modalArticleM'),
        modalClose = document.querySelector('.modalBg'),
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

    function closeBlock(target, block) {
        if (target !== null) {
            if (!target.classList.contains(block)) {
                target.addEventListener('click', () => {
                    block.style.display = 'none'
                    document.querySelector('body').style.overflowY = 'visible'
                })
            }

        }

    }

    function modalCloseBg(modalBg, closeModal) {
        if (modalBg !== null) {
            modalBg.addEventListener('click', event => {
                const e = document.querySelector(closeModal)
                if (!e.contains(event.target)) {
                    e.style.display = 'none'
                    modalBg.style.display = 'none'
                    document.querySelector('body').style.overflowY = 'visible'
                }
            })
        }
    }

    function scrollerAcrossArrow(trigg) {
        trigg.on('click', function (e) {
            let godesc = $(this)
            $('html, body').stop().animate({
                scrollTop: $(godesc.attr('href')).offset().top
            }, 1000)
            e.preventDefault()
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

    function openBlockMassive(arr, openBlock, modalBg) {
        if (arr !== null) {
            arr.forEach(element => {
                element.addEventListener('click', () => {
                    openBlock.style.display = 'flex'
                    modalBg.style.display = 'block'
                    document.querySelector('body').style.overflowY = 'hidden'
                })
            })
        }

    }

    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on')
    })
    // if (item.querySelector('.detailed')!==null)
    scrollerAcrossArrow(arrows)
    openBlock(btnMenu, mainMenu)
    openBlockMassive(btnRezerv, modalBody, modal)
    openBlockMassive(articleBlock, modalArt, modalClose)
    closeBlock(header, mainMenu)
    closeBlock(btnClose, modal)
    modalCloseBg(modalClose, '.modalArticleM')
    modalCloseBg(modal, '.modalBody')
    scrollMouse(blockVisibleMenu, mainMenu)
})