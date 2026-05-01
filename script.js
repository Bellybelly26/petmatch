// ESTADO
let user = JSON.parse(localStorage.getItem("user")) || null;
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// PETS
const pets = [
  {id:1, nome:"Luna", tipo:"calmo", apto:true, img:"https://placekitten.com/200/200"},
  {id:2, nome:"Max", tipo:"ativo", apto:false, img:"https://placedog.net/200/200"},
  {id:3, nome:"Milo", tipo:"calmo", apto:true, img:"https://placekitten.com/201/200"}
];

// LOGIN
const loginModal = document.getElementById("loginModal");
document.getElementById("loginBtn").onclick = () => loginModal.style.display = "flex";

let selectedType = null;

document.querySelectorAll(".card").forEach(c => {
  c.onclick = () => {
    document.querySelectorAll(".card").forEach(x => x.classList.remove("selected"));
    c.classList.add("selected");
    selectedType = c.dataset.type;
  };
});

document.getElementById("enterBtn").onclick = () => {
  if (!selectedType) return alert("Escolha um tipo");

  user = {tipo:selectedType};
  localStorage.setItem("user", JSON.stringify(user));

  loginModal.style.display = "none";
  iniciarSistema();
};

// INICIAR
function iniciarSistema() {
  document.getElementById("menu").classList.remove("hidden");
  renderPets();
}

// NAVEGAÇÃO
document.querySelectorAll("nav button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(btn.dataset.page).classList.remove("hidden");

    if (btn.dataset.page === "favoritos") renderFavoritos();
    if (btn.dataset.page === "quiz") renderQuiz();
  };
});

// RENDER PETS
function renderPets() {
  const container = document.getElementById("pets");

  container.innerHTML = `
    <h2>Pets</h2>
    <div class="grid">
      ${pets.map(p => `
        <div class="card-pet">
          <img src="${p.img}">
          <h3>${p.nome}</h3>
          <button onclick="verPet(${p.id})">Ver</button>
          <button onclick="toggleFav(${p.id})">
            ${favoritos.includes(p.id) ? "★" : "☆"}
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

// FAVORITOS
function toggleFav(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  renderPets();
}

function renderFavoritos() {
  const container = document.getElementById("favoritos");

  const lista = pets.filter(p => favoritos.includes(p.id));

  container.innerHTML = `
    <h2>Favoritos</h2>
    <div class="grid">
      ${lista.map(p => `
        <div class="card-pet">
          <img src="${p.img}">
          <h3>${p.nome}</h3>
        </div>
      `).join("")}
    </div>
  `;
}

// DETALHES
function verPet(id) {
  const pet = pets.find(p => p.id === id);

  document.getElementById("petDetails").innerHTML = `
    <h2>${pet.nome}</h2>
    <img src="${pet.img}" style="width:100%">
    <p>Perfil: ${pet.tipo}</p>
    <button onclick="alert('Adoção iniciada')">Quero Adotar</button>
  `;

  document.getElementById("petModal").style.display = "flex";
}

// QUIZ
function renderQuiz() {
  const container = document.getElementById("quiz");

  container.innerHTML = `
    <h2>Compatibilidade</h2>
    <p>Você mora em:</p>
    <button onclick="resultadoQuiz(true)">Casa</button>
    <button onclick="resultadoQuiz(false)">Apartamento</button>
    <div id="res"></div>
  `;
}

function resultadoQuiz(casa) {
  const res = pets.filter(p => p.apto === casa);

  document.getElementById("res").innerHTML = res.map(p => `
    <p>${p.nome}</p>
  `).join("");
}

// FECHAR MODAL
window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

// AUTO LOGIN
if (user) iniciarSistema();
