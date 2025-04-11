// Variables globales para el modal y la navegación
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imgModal');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');

let currentProjectImages = []; // Arreglo de imágenes del proyecto actual
let currentIndex = 0;          // Índice de la imagen mostrada en el modal

// Seleccionar todos los thumbnails de proyecto
const projectThumbnails = document.querySelectorAll('.project-thumbnail');

projectThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    // Obtenemos el contenedor del proyecto y leemos el atributo data-images
    const projectElement = this.parentElement;
    const imagesData = projectElement.getAttribute('data-images');
    // Transformamos la cadena en un arreglo separando por comas
    currentProjectImages = imagesData.split(',');
    // Mostramos la primera imagen
    currentIndex = 0;
    modalImg.src = currentProjectImages[currentIndex].trim();
    modal.style.display = 'flex';
  });
});

// Función para mostrar la imagen anterior
function showPrev() {
  if (currentProjectImages.length === 0) return;
  currentIndex = (currentIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
  modalImg.src = currentProjectImages[currentIndex].trim();
}

// Función para mostrar la imagen siguiente
function showNext() {
  if (currentProjectImages.length === 0) return;
  currentIndex = (currentIndex + 1) % currentProjectImages.length;
  modalImg.src = currentProjectImages[currentIndex].trim();
}

// Eventos para los botones de navegación
prevButton.addEventListener('click', (e) => {
  e.stopPropagation();
  showPrev();
});

nextButton.addEventListener('click', (e) => {
  e.stopPropagation();
  showNext();
});

// Cerrar modal al hacer clic en la "x" o fuera de la imagen
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Simulación de envío del formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
  contactForm.reset();
});
