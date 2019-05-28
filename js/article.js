const articleBlock = document.querySelectorAll('.articleBlock'),
    modalArt = document.querySelector('.modalArticleM'),
    modalClose = document.querySelector('.modalBg');

const date = [
    [1, 2, 3],
    ['../img/articleImg.jpg', '../img/cartImg.jpg', '../img/cartImg.jpg'],
    [`Загаловок 1`, `Заголовок 2`, `Заголовк 3`],
    [`160гр`, `180гр`, `200гр`],
    [`100p`, '200p', `300h`],
    [`descr 1`, `descr 2`, `desc 3`],
]
console.log(date);

function openBlockMassive(trigger, openBlock, modalBg) {
    if (trigger !== null) {
        trigger.forEach(element => {
            element.addEventListener('click', () => {
                openBlock.style.display = 'flex'
                modalBg.style.display = 'block'
                document.querySelector('body').style.overflowY = 'hidden'
                addContent();
                openBlock.setAttribute('data-id', date[0][0])
            })
        });

    }
}

function addContent() {
    const contentBlock = document.querySelector('.modalArticleM')
    let content = document.createElement('div')
    content.classList.add('modalArticleBodyM')
    content.style.justifyContent = 'space-between'
    content.innerHTML = `
            <img src="${date[1][0]}" alt="Картинка товара">
            <h2 class="articleTitleM">${date[2][0]}</h2>
            <div class="articleOptBlockM">
                <span>${date[4][0]}</span>
                <span>${date[3][0]}</span>
            </div>
            <div class="articleTotalM">
                <span>Количество:</span>
                <button class="plus"><i class="far fa-plus"></i></button>
                <input type="number" value="1">
                <button class="minus"><i class="far fa-minus"></i></button>
            </div>
            <div class="articleDescrM">${date[5][0]}</div>
            <button class="yellowBtn">В корзину</button>
            `
    console.log(contentBlock);
    contentBlock.appendChild(content)
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
                document.querySelector('.modalArticleBodyM').innerHTML = "";
            }
        })
    }
}

function clearBlock(item) {
    item.addEventListener('click', () => {
        document.querySelector('.modalArticleBodyM').innerHTML = "";
    })
}

openBlockMassive(articleBlock, modalArt, modalClose)
modalCloseBg(modalClose, '.modalArticleM', 'glideModalClose')