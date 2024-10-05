(function() {
    const startTime = performance.now();

    window.addEventListener('load', function() {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        const footer = document.getElementById("footer__time");
        const loadTimeInfo = document.createElement('p');
        loadTimeInfo.textContent = `Время загрузки страницы: ${loadTime.toFixed(2)} мс`;

        footer.appendChild(loadTimeInfo);
    });
})();