document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
          header = document.querySelector('.headerTitle'),
          btnRezerv = document.querySelector('.rezerv'),
          modal = document.querySelector('.modal'),
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
    openBlock(btnMenu, mainMenu)
    openBlock(btnRezerv, modal)
    closeBlock(header, mainMenu)
    closeBlock(btnClose, modal);
})