
const slides = [
  " Norteamérica",
  " Centroamérica",
  " Sudamérica",
  " Caribe",
  " Patagonia"
];

let currentIndex = 0;
const slideContainer = document.getElementById("slideContainer");
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function buildCarousel() {

  const wrapper = document.createElement("div");
  wrapper.className = "slides-wrapper";
  
  slides.forEach((text, i) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    slideDiv.textContent = text;
    wrapper.appendChild(slideDiv);
    
    // Punto indicador
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  
  slideContainer.innerHTML = "";
  slideContainer.appendChild(wrapper);
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === currentIndex) dot.classList.add("active");
    else dot.classList.remove("active");
  });
}

function goToSlide(index) {
  const wrapper = document.querySelector(".slides-wrapper");
  if (!wrapper) return;
  const slideWidth = wrapper.parentElement.clientWidth;
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
  updateDots();
}

function nextSlide() {
  let newIndex = currentIndex + 1;
  if (newIndex >= slides.length) newIndex = 0;
  goToSlide(newIndex);
}

function prevSlide() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = slides.length - 1;
  goToSlide(newIndex);
}

// Ajustar cuando cambia el tamaño de la ventana
function onResize() {
  goToSlide(currentIndex);
}

// Eventos
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
window.addEventListener("resize", onResize);

// Iniciar
buildCarousel();
goToSlide(0);