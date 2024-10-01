const dropdown = document.querySelector('.dropdown-content');
const menu = document.querySelector('.menu');

function toggleDropdown() {
    dropdown.classList.toggle('open');
}

menu.addEventListener('click', toggleDropdown);