const dropdown = document.getElementById("dropdown-content")

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle('open');
}
window.onclick = function (event) {
    if (!event.target.matches('#menu')) {
        let i;
        for (i = 0; i < dropdown.length; i++) {
            const openDropdown = dropdown[i];
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
        const tabName = tab.getAttribute('data-tab');
        const tabUrls = {
            'tab1': '/tarotLove/index.html',
            'tab2': '/tarotLove/tarotLibrary.html',
            'tab3': '/tarotLove/table.html'
        };

        if (currentLocation === tabUrls[tabName]) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active')
        }
    });

});