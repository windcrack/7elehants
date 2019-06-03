window.addEventListener('DOMContentLoaded', () => {
const loadContent = async (url, callBack) => {
    await fetch(url)
        .then(response => response.json())
        .then(json => createElem(json.goods));
    callBack();
}

$('.articleBlock').click(function(){
    fetchModalInfo()
})
function createElem(arr) {
    const contentBlock = document.querySelector('.modalArticleM')
    arr.forEach(function(item) {
        let content = document.createElement('div')
        content.classList.add('modalArticleBodyM')
        content.setAttribute('data-id', item.id)
        content.style.justifyContent = 'space-between'
        content.innerHTML = `
            <img src="${item.img}" alt="Картинка товара">
            <h2 class="articleTitleM">${item.title}</h2>
            <div class="articleOptBlockM">
                <span>${item.price}</span>
                <span>${item.gramm}</span>
            </div>
            <div class="articleTotalM">
                <span>Количество:</span>
                <button class="plus"><i class="far fa-plus"></i></button>
                <input type="number" value="1">
                <button class="minus"><i class="far fa-minus"></i></button>
            </div>
            <div class="articleDescrM">${item.descr}</div>
            <button class="yellowBtn">В корзину</button>
            `
        console.log(contentBlock);
        contentBlock.appendChild(content)
    })
}

function fetchModalInfo(){
    $.ajax({
        type:'GET',
        url:'js/db.json',
        dataType:'json',
        success: function(data){
            console.log("Success data",data)
            showModal(data)
        },
        error:function(err){
            console.log("Found err", err);
        }
    })
}


function showModal(data){
    console.log('modal show')
    $('.modalArticleM').css('display','flex')
    $('.modalBg').css('display','flex')

    ///тестовая выборка из даты полученной
    $('.articleTitleM').text(data[0].title)
    $('.articleDescrM').text(data[0].descr)
    
}
function closeModal(){
    console.log('modal closed')
    $('.modalBg').display = "none"
    $('.modalArticleM').display = "none"
}

loadContent('js/db.json', () => {
    const articleBlock = $('.articleBlock'),
    modalArt = $('.modalArticleM'),
    modalClose = $('.modalBg');
    
    function openBlockMassive(trigger, openBlock, modalBg) {
        if (trigger !== null) {
            trigger.forEach(element => {
                element.addEventListener('click', () => {
                    openBlock.style.display = 'flex'
                    modalBg.style.display = 'block'
                    document.querySelector('body').style.overflowY = 'hidden'
                    //fetchModalInfo()
                })
            });
        }
    }
    openBlockMassive(articleBlock, modalArt, modalClose)
    modalCloseBg(modalClose, '.modalArticleM', 'glideModalClose')

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
            document.querySelector('.modalArticleBodyM').remove();
        })
    }

    })
    
})







