document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
          header = document.querySelector('.headerTitle'),
          btnRezerv = document.querySelector('.rezerv'),
          modal = document.querySelector('.modal'),
          point = $('[href="#descritp"]'),
          btnClose = document.querySelector('.modalBodyClose'),
          mainMenu = document.querySelector('.menuMain');
    
    function openBlock (button, block){
        button.addEventListener('click', () => {
            block.style.display = 'flex'
        })
    }
    function closeBlock (targeting, block){
        targeting.addEventListener('click', () =>{
            block.style.display = 'none'
        })
    }
    function scroller (trigg){
        trigg.on('click', function (e) {
            let godesc = $(this);
            $('html, body').stop().animate({
                scrollTop: $(godesc.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
            // return false;
        })
    }
    scroller(point)
    openBlock(btnMenu, mainMenu)
    openBlock(btnRezerv, modal)
    closeBlock(header, mainMenu)
    closeBlock(btnClose, modal);
})