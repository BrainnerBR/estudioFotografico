const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});


// Agrega un evento clic a cada imagen de la galería
document.querySelectorAll('.image-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        var id = img.getAttribute('id'); 
        openLightbox(img.src, id); 
    });
});

function openLightbox(src, id) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var img = document.getElementById(id); 
    lightboxImage.src = src;
    lightbox.style.display = 'block';
    img.style.display = 'block'; // Mostrar la imagen clickeada
}

// Función para cerrar la ventana emergente
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.querySelectorAll('.image-gallery img').forEach(img => {
        img.style.display = 'block'; // Mostrar todas las imágenes de la galería nuevamente
    });
}

document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) { 
        closeLightbox(); // Cierra la ventana emergente solo si se hace clic en el fondo oscuro
    }
});
