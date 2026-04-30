// --- Modal de Login ---
const loginBtn = document.getElementById('loginBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const recoverLink = document.getElementById('recoverLink');
const backToLogin = document.getElementById('backToLogin');
const formLogin = document.getElementById('form-login');
const formRecover = document.getElementById('form-recover');

loginBtn.addEventListener('click', () => modalOverlay.style.display = 'flex');
closeBtn.addEventListener('click', () => modalOverlay.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = 'none';
});

// Alternar entre login e recuperar senha
recoverLink.addEventListener('click', (e) => {
    e.preventDefault();
    formLogin.style.display = 'none';
    formRecover.style.display = 'block';
});

backToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    formRecover.style.display = 'none';
    formLogin.style.display = 'block';
});

// --- Carrossel ---
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Muda a imagem a cada 4 segundos
}

// --- Contador dos Gráficos ---
const counts = document.querySelectorAll('.count');
counts.forEach(count => {
    count.innerText = '0';
    const updateCount = () => {
        const target = +count.getAttribute('data-target');
        const current = +count.innerText;
        const increment = target / 100;
        if (current < target) {
            count.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});

