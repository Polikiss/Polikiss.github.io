
const menu = document.querySelector('.menu');

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle('open');
}

window.onclick = function (event) {
    if (!event.target.matches('#menu')) {
        let i;
        const dropdown = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdown.length; i++) {
            const openDropdown = dropdown[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
        }
    }
}

