document.addEventListener('DOMContentLoaded', function () {

    slider();

    const blocksAnimate = document.querySelectorAll('.block__animate');
    const blocksAnimate_2 = document.querySelectorAll('.block__animate_2');
    const animateHeaderTitle = document.querySelector('.animate-title');
    const animateHeaderLogo = document.querySelector('.animate-logo');
    const phones = document.querySelectorAll('.animation-phone');
    const circle = document.querySelectorAll('.animation-circle');
    const hero = document.querySelector('.hero');


    animateHeaderTitle?.classList.add('animate');
    animateHeaderLogo?.classList.add('animate');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            hero?.classList.add('active');
        } else {
            hero?.classList.remove('active');
        }

        blocksAnimate.forEach(blockAnimate => {
            var block = blockAnimate.getBoundingClientRect();

            if (block.top < 600) {
                blockAnimate?.classList.add('animate');
            } else {
                blockAnimate?.classList.remove('animate');
            }
        });

        blocksAnimate_2.forEach(blocksAnimate_2 => {
            var block = blocksAnimate_2.getBoundingClientRect();

            if (block.top < 600) {
                blocksAnimate_2?.classList.add('animate');
            } else {
            }
        });

        phones.forEach(phone => {
            var block = phone.getBoundingClientRect();

            if (block.top < 400) {
                phone?.classList.add('animate');
            } else {
                phone?.classList.remove('animate');
            }
        });

        circle.forEach(circle => {
            var block = circle.getBoundingClientRect();

            if (block.top < 600) {
                circle?.classList.add('animate');
            } else {
            }
        });
    })

})

function slider(params) {
    const swiper = new Swiper('.slider-js', {
        spaceBetween: 15,
        effect: 'coverflow',
        autoplay: true
    });
    const imagesSlider = new Swiper('.images-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        // mousewheel: {
        //    invert: true,
        // },
        loop: false
    })
}
   