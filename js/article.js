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

function openBlockMassive(arr, openBlock, modalBg) {
    if (arr !== null) {
        arr.forEach(element => {
            element.addEventListener('click', () => {
                openBlock.style.display = 'flex'
                modalBg.style.display = 'block'
                document.querySelector('body').style.overflowY = 'hidden'
                addContent();
            })
        })
    }
}

// function addContent() {
//     const contentBlock = document.querySelector('.modalArticleM')
//     for (let i = 0; i < date[0].length; i++) {
//         let content = document.createElement('div')
//         content.classList.add('modalArticleBodyM')
//         content.style.justifyContent = 'space-between'
//         content.setAttribute('data-id', date[0][i])
//         content.innerHTML = `
//             <img src="${date[1][i]}" alt="Картинка товара">
//             <h2 class="articleTitleM">${date[2][i]}</h2>
//             <div class="articleOptBlockM">
//                 <span>${date[4][i]}</span>
//                 <span>${date[3][i]}</span>
//             </div>
//             <div class="articleTotalM">
//                 <span>Количество:</span>
//                 <button class="plus"><i class="far fa-plus"></i></button>
//                 <input type="number" value="2">
//                 <button class="minus"><i class="far fa-minus"></i></button>
//             </div>
//             <div class="articleDescrM">${date[5][i]}</div>
//             <button class="yellowBtn">В корзину</button>
//             ` 
//         console.log(contentBlock);
//         contentBlock.appendChild(content)
//     }

// }


openBlockMassive(articleBlock, modalArt, modalClose)