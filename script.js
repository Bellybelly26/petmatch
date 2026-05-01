// Dados simulados
const pets = [
    { id: 1, nome: "Bolinha", tipo: "Cão", raca: "Poodle", idade: "2 anos", img: "https://unsplash.com" },
    { id: 2, nome: "Mel", tipo: "Gato", raca: "Siamês", idade: "1 ano", img: "https://unsplash.com" },
];

// Navegação entre páginas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if(pageId === 'adotar') renderPets(pets);
}

// Renderização dos cards
function renderPets(data) {
    const grid = document.getElementById('petsGrid');
    grid.innerHTML = data.map(pet => `
        <div class="pet-card">
            <img src="${pet.img}">
            <div class="pet-info">
                <h4>${pet.nome}</h4>
                <p>${pet.raca} - ${pet.idade}</p>
                <button class="btn-confirmar" style="width:100%; margin-top:10px">Ver Detalhes</button>
            </div>
        </div>
    `).join('');
}

// Filtro dinâmico
function filterPets() {
    const termo = document.getElementById('searchPet').value.toLowerCase();
    const filtrados = pets.filter(p => p.nome.toLowerCase().includes(termo) || p.raca.toLowerCase().includes(termo));
    renderPets(filtrados);
}

// Controle do Modal
const modalLogin = document.getElementById('modalLogin');
document.getElementById('btnOpenLogin').onclick = () => modalLogin.style.display = 'flex';

function closeModals() { modalLogin.style.display = 'none'; }

let userType = "";
function selectPerfil(tipo, element) {
    userType = tipo;
    document.querySelectorAll('.card-perfil').forEach(c => c.className = 'card-perfil');
    element.classList.add(tipo === 'adotador' ? 'selected-adotador' : 'selected-ong');
}

function realizarLogin() {
    if(!userType) return alert("Selecione um perfil!");
    alert("Login realizado como " + userType);
    closeModals();
    // Muda a cor do botão baseado no perfil
    document.getElementById('btnOpenLogin').style.backgroundColor = userType === 'adotador' ? '#2ecc71' : '#3498db';
}

// Lógica Simples de Carrossel
let currentSlide = 0;
setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    document.getElementById('carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
}, 5000);
