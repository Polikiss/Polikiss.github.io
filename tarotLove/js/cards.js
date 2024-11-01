const swiper = new Swiper('.swiper-container', {
    // Направление слайдера (вертикальное)
    direction: 'horizontal',
    // Количество слайдов для отображения одновременно
    slidesPerView: 3,
    // Слайды будут прокручиваться по одному
    // Автоматическое воспроизведение
    autoplay: {
        delay: 5000, // Задержка между слайдами
        disableOnInteraction: false // Отключить автовоспроизведение при взаимодействии с слайдером
    },
    // Пагинация (индикаторы слайдов)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    preloadImages: false,          // Отключаем предварительную загрузку изображений
    lazy: true


});