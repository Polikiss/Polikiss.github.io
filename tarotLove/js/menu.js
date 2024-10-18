const dropdown = document.getElementById("dropdown-content")

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle('open');
}

window.onclick = function (event) {
    if (!event.target.matches('#menu')) {
        const dropdowns = document.getElementById("#dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
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