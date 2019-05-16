const articleBlock = document.querySelectorAll('.articleBlock'),
    modalArt = document.querySelector('.modalArticleM'),
    modalClose = document.querySelector('.modalBg');

const date = []

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
openBlockMassive(articleBlock, modalArt, modalClose)