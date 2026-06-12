let currentPage = 0;
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalPages = pages.length;

function updateBook() {
    // Quita la clase activa de todas las páginas
    pages.forEach(page => page.classList.remove('active'));
    
    // Muestra la página actual
    pages[currentPage].classList.add('active');

    // Control de los botones de navegación
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateBook();
        // Hace scroll automático hacia arriba al cambiar de página
        document.querySelector('.page.active').scrollTop = 0;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
        document.querySelector('.page.active').scrollTop = 0;
    }
}

function goToPage(pageIndex) {
    // Permite que los botones del menú lleven directamente a páginas específicas
    if (pageIndex >= 0 && pageIndex < totalPages) {
        currentPage = pageIndex;
        updateBook();
        document.querySelector('.page.active').scrollTop = 0;
    }
}

// Inicializa el libro desactivando el botón anterior al inicio
updateBook();
