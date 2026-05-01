// LOGIN
const modal = document.getElementById("modal");
document.getElementById("loginBtn").onclick = () => modal.style.display = "flex";

let userType = null;

document.querySelectorAll(".card").forEach(card => {
  card.onclick = () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    userType = card.dataset.type;
  };
});

// ENTRAR
document.getElementById("entrar").onclick = () => {
  if (!userType) return alert("Escolha um tipo!");

  modal.style.display = "none";
  document.getElementById("menu").classList.remove("hidden");

  if (userType === "ong") {
    document.body.style.background = "#e3f2fd";
  } else {
    document.body.style.background = "#e8f5e9";
  }
};

// PETS
const pets = [
  {nome:"Luna", tipo:"calmo", casa:true, img:"https://placekitten.com/200/200"},
  {nome:"Max", tipo:"ativo", casa:false, img:"https://placedog.net/200/200"},
  {nome:"Milo", tipo:"calmo", casa:false, img:"https://placekitten.com/201/200"}
];

let favoritos = [];

function render(lista, container) {
  container.innerHTML = "";
  lista.forEach(pet => {
    const div = document.createElement("div");
    div.className = "pet-card";

    div.innerHTML = `
      <img src="${pet.img}">
      <h3>${pet.nome}</h3>
      <button onclick="favoritar('${pet.nome}')">⭐</button>
    `;

    div.onclick = () => openPet(pet);
    container.appendChild(div);
  });
}

render(pets, document.getElementById("petList"));

// FAVORITAR
function favoritar(nome) {
  const pet = pets.find(p => p.nome === nome);
  if (!favoritos.includes(pet)) favoritos.push(pet);
}

// FAVORITOS
function showFavoritos() {
  hideAll();
  document.getElementById("favSection").classList.remove("hidden");
  render(favoritos, document.getElementById("favList"));
}

// BUSCA
document.getElementById("search").oninput = (e) => {
  const v = e.target.value.toLowerCase();
  render(pets.filter(p => p.nome.toLowerCase().includes(v)), petList);
};

// MODAL PET
const petModal = document.getElementById("petModal");
const petDetails = document.getElementById("petDetails");

function openPet(pet) {
  petDetails.innerHTML = `
    <h2>${pet.nome}</h2>
    <img src="${pet.img}">
    <p>Perfil: ${pet.tipo}</p>
    <button>Quero Adotar</button>
  `;
  petModal.style.display = "flex";
}

// COMPATIBILIDADE
function showCompatibilidade() {
  hideAll();
  document.getElementById("compSection").classList.remove("hidden");
}

function resposta(tipo) {
  let resultado = "";

  if (tipo === "apto") {
    resultado = pets.filter(p => !p.casa);
  } else {
    resultado = pets;
  }

  render(resultado, document.getElementById("resultado"));
}

// MENU
function showPets() {
  hideAll();
  document.getElementById("petsSection").classList.remove("hidden");
}

function hideAll() {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
}

// FECHAR MODAL
window.onclick = (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};
