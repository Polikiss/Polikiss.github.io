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
    const tabs = document.querySelectorAll('.tab');
    const currentLocation = document.location.pathname;


    tabs.forEach(tab => {
        const linkUrl = tab.getAttribute('href');
        if (currentLocation === linkUrl) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active')
        }
    });

});