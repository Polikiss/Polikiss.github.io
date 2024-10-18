function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle('open');
}

window.onclick = function (event) {
    if (!event.target.matches('#menu')) {
        const dropdowns = document.getElementById("dropdown-content");
        if ( dropdowns.classList.contains('open')) {
            dropdowns.classList.remove('open');
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.main-title-box__menu__menu-item__tab');
    const currentLocation = document.location.pathname;


    tabs.forEach(tab => {
        const url = tab.getAttribute('href')
        const fullUrl = '/webTarot/tarotLove/'.concat(url)
        if (currentLocation === fullUrl) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active')
        }
    });

});