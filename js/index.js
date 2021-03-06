document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
        btnTable = document.querySelector('.burgerInTable'),
        header = document.querySelector('.headerTitle'),
        btnRezerv = document.querySelectorAll('.rezerv'),
        modal = document.querySelector('.modal'),
        table = document.querySelector('.table'),
        modalBody = document.querySelector('.modalBody'),
        articleBlock = document.querySelectorAll('.articleBlock'),
        modalArt = document.querySelector('.modalArticleM'),
        modalClose = document.querySelector('.modalBg'),
        dots = document.querySelector('.dotsInMob'),
        list = document.querySelector('.listSub'),
        category = document.querySelector('.categorySub'),
        arrows = $('[href="#descritp"]'),
        contact = $('[href="#contact"]'),
        btnClose = document.querySelector('.modalBodyClose'),
        blockVisibleMenu = document.querySelector('#descritp'),
        socialInner = document.querySelectorAll('.table > li')[5],
        mainMenu = document.querySelector('.menuMain');
    let screenWidth = innerWidth;

    function openBlock(button, block) {
        if (button !== null) {
            button.addEventListener('click', () => {
                block.style.display = 'flex'
                menuInTable()
            })
        }
    }
    let open = false

    function menuInTable() {
        if (open === false) {
            open = true;
            document.querySelector('.burgerInTable').innerHTML = '<i class="far fa-times"></i>'
        } else {
            open = false;
            document.querySelector('.burgerInTable').innerHTML = '<i class="far fa-align-right"></i>'
            console.log(screenWidth)
            if (screenWidth <= 800) {
                table.style.display = 'none'
            } else {
                table.style.display = 'flex'
            }
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

    function modalCloseBg(modalBg, closeModal, closeGlideClose) {
        if (modalBg !== null) {
            modalBg.addEventListener('click', event => {
                const e = document.querySelector(closeModal)
                if (!e.contains(event.target)) {

                    e.classList.add(closeGlideClose)
                    setTimeout(() => {
                        e.style.display = 'none'
                        modalBg.style.display = 'none'
                        e.classList.remove(closeGlideClose)
                    }, 400)

                    document.querySelector('body').style.overflowY = 'visible';
                    closeModal.classList.remove('modalArticleBodyM')
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

    function openSubMenu(button, block, close) {
        if (button !== null) {
            button.addEventListener('click', () => {
                block.style.display = 'flex'
                close.style.display = 'none'
                button.style.display = 'none'
            })
        }

    }

    function closeSubMenu(button, block, close) {
        if (button !== null) {
            button.addEventListener('click', () => {
                block.style.display = 'flex'
                close.style.display = 'flex'
                button.style.display = 'none'
            })
        }

    }

    const switcher = $('.switch-btn')

    function swichCheck(swichBtn, thisToSwich) {
        swichBtn.click(function () {
            $(this).toggleClass(thisToSwich)
        })
    }

    function innerSocial(block) {
        if (document.documentElement.clientWidth <= 980) {
            block.innerHTML = `<i class="fab fa-instagram"></i>
                               <i class="fab fa-vk"></i>`
        }
    }
    innerSocial(socialInner)
    scrollerAcrossArrow(arrows)
    scrollerAcrossArrow(contact)
    swichCheck(switcher, 'switch-on')
    openBlock(btnTable, table)
    if(document.documentElement.clientWidth <= 1000){
        openSubMenu(dots, category, list)
        closeSubMenu(category, dots, list)
    }
    openBlockMassive(btnRezerv, modalBody, modal)
    // openBlockMassive(articleBlock, modalArt, modalClose)
    // modalCloseBg(modalClose, '.modalArticleM', 'glideModalClose')
    closeBlock(header, mainMenu)
    closeBlock(btnClose, modal)
    
    modalCloseBg(modal, '.modalBody', 'glideMenuClosedRezerv')
    if (document.documentElement.clientWidth >= 980) {
        scrollMouse(blockVisibleMenu, mainMenu)
        openBlock(btnMenu, mainMenu)
        closeBlock(header, mainMenu)
    }
})