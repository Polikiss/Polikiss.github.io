import Glide from "@glidejs/glide";

const glide = new Glide('#intro', {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
}).mount();


