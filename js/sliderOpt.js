document.addEventListener('DOMContentLoaded', () => {
    function sliderRun(slider) {
        $(slider).slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            swipeToSlide: true,
        })
    }
    sliderRun('.ctaBlock1ImgLeft')
    // sliderRun('.ctaBlock1ImgRight')
})