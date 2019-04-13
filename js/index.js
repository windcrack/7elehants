document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.headerBurger'),
          mainMenu = document.querySelector('.menuMain');

    function openBlock (button, block){
        button.addEventListener('click', (e)=>{
            // e.preventDefault();
            block.style.display = 'flex'
        })
    }
    openBlock(btnMenu, mainMenu)
})