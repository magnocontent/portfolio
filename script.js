// ====== Variáveis ======
let currentSlide = 0; // índice do slide atual
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const portfolioImages = 12; // número de imagens do portfolio
let currentPortfolioImg = 1;

const slideImg = document.getElementById("slideImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ====== Função para mostrar slide ======
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Se for o slide de Portfolio, atualiza a imagem
  if (slides[index].querySelector("#slideImg")) {
    slideImg.src = `img/page${currentPortfolioImg}.jpg`;
  }

  updateButtons();
}

// ====== Função Next ======
function nextSlide() {
  // Se estiver no slide de Portfolio e não for a última imagem
  if (slides[currentSlide].querySelector("#slideImg")) {
    if (currentPortfolioImg < portfolioImages) {
      currentPortfolioImg++;
      slideImg.src = `img/page${currentPortfolioImg}.jpg`;
      updateButtons();
      return;
    }
  }

  // Caso contrário, vai para o próximo slide normal
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    currentPortfolioImg = 1; // reseta imagem do portfolio
    showSlide(currentSlide);
  }
}

// ====== Função Back ======
function prevSlide() {
  // Se estiver no slide de Portfolio e não for a primeira imagem
  if (slides[currentSlide].querySelector("#slideImg")) {
    if (currentPortfolioImg > 1) {
      currentPortfolioImg--;
      slideImg.src = `img/page${currentPortfolioImg}.jpg`;
      updateButtons();
      return;
    }
  }

  // Caso contrário, vai para o slide anterior
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

// ====== Função do botão Portfolio ======
function goToPortfolio() {
  currentSlide = 2;       // índice do slide de Portfolio (começa em 0)
  currentPortfolioImg = 1; // começa da primeira imagem
  showSlide(currentSlide);
}

// ====== Atualiza visibilidade dos botões ======
function updateButtons() {
  // Botão Back
  if (currentSlide === 0 && currentPortfolioImg === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  // Botão Next
  if (currentSlide === totalSlides - 1 && 
      (!slides[currentSlide].querySelector("#slideImg") || currentPortfolioImg === portfolioImages)) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
  }
}

// ====== Inicializa ======
showSlide(currentSlide);