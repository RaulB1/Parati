document.addEventListener('DOMContentLoaded', function () {
    // Fecha de inicio de la relación (YYYY, MM-1, DD)
    const startDate = new Date(2023, 02, 19);

    function updateCounter() {
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - startDate.getTime();
        const days = Math.floor(timeDiff / (1000 * 3600 * 24));

        document.getElementById('counter').innerText = `Llevamos ${days} días juntos mi amorcito <3`;
    }

    // Actualizar el contador cada segundo
    setInterval(updateCounter, 1000);

    // Actualizar el contador al cargar la página
    updateCounter();
});
