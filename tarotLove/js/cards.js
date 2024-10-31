document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        showError();
    }
}
function renderData(data) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    data.slice(0, 10).forEach(photo => { // Отображаем первые 10 фото
        const photoDiv = document.createElement('div');
        photoDiv.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="${photo.title}">
            <p>${photo.title}</p>
        `;
        content.appendChild(photoDiv);
    });
}

function showError() {
    const content = document.getElementById('content');
    const errorDiv = document.createElement('div');
    errorDiv.textContent = '⚠ Что-то пошло не так.';
    content.appendChild(errorDiv);
}
