const totalPages = 12;
let currentPage = 1;

const portfolioImage = document.getElementById('portfolioImage');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const homeBtn = document.getElementById('homeBtn');
const navButtons = document.querySelector('.nav-buttons');

const portfolioBtn = document.getElementById('portfolioBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const linkedinBtn = document.getElementById('linkedinBtn');
const initialButtons = document.querySelector('.initial-buttons');

function updateImage() {
    portfolioImage.src = `img/page${currentPage}.jpg`;
    portfolioImage.alt = `Portfolio Page ${currentPage}`;

    if(currentPage === totalPages){
        nextBtn.style.display = 'none';
        homeBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        homeBtn.style.display = 'none';
    }

    backBtn.style.display = currentPage > 1 ? 'inline-block' : 'none';
}

// Portfolio inicia o slider
portfolioBtn.addEventListener('click', (e) => {
    e.preventDefault();
    initialButtons.style.display = 'none';
    portfolioImage.style.display = 'block';
    navButtons.style.display = 'flex';
    document.body.style.backgroundImage = 'none';
    currentPage = 1;
    updateImage();
});

// WhatsApp abre link
whatsappBtn.addEventListener('click', () => {
    window.open(whatsappBtn.href, '_blank');
});

// LinkedIn abre link
linkedinBtn.addEventListener('click', () => {
    window.open(linkedinBtn.href, '_blank');
});

// Navegação das imagens
nextBtn.addEventListener('click', () => {
    if(currentPage < totalPages) {
        currentPage++;
        updateImage();
    }
});

backBtn.addEventListener('click', () => {
    if(currentPage > 1) {
        currentPage--;
        updateImage();
    }
});

// Início retorna à tela inicial
homeBtn.addEventListener('click', () => {
    portfolioImage.style.display = 'none';
    navButtons.style.display = 'none';
    initialButtons.style.display = 'flex';
    document.body.style.backgroundImage = "url('img/background.jpg')";
    currentPage = 1;
});