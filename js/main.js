let nav = document.getElementById("navBar");
let btn = document.getElementById("sendButton");
let backgr = document.getElementById("back");

//cambio color del navbar
window.addEventListener("offline", (event) => {
  console.log("Estoy Offline!!");
  navBar.classList.add("bg-primary");
});

window.addEventListener("online", (event) => {
  console.log("Estoy online!!");
  navBar.classList.remove("bg-primary");
});

if (!navigator.onLine) {
  console.log("Estoy sin conexion, rey!");
}

window.addEventListener("offline", (event) => {
  console.log("Estoy Offline!!");
  back.classList.add("bg-warning");
});

window.addEventListener("online", (event) => {
  console.log("Estoy online!!");
  back.classList.remove("bg-warning");
});

if (!navigator.onLine) {
  console.log("Estoy sin conexion, perri!");
}

//cambio el color del boton

window.addEventListener("offline", (event) => {
  console.log("Estoy Offline!!");
  sendButton.classList.add("bg-warning");
});

window.addEventListener("online", (event) => {
  console.log("Estoy online!!");
  sendButton.classList.remove("bg-warning");
});

if (!navigator.onLine) {
  console.log("Estoy sin conexion, perri!");
}

//aca cambio un icono simpaticon
window.addEventListener("offline", (event) => {
  document.getElementById(
    "off-on"
  ).innerHTML = `<p class="nav-item nav-link  textmen"> Estas fuera<img class=" img-fluid pokeimg" width=" 35px"  src="../img/Open_Pokeball_icon-icons.com_67538.svg" alt=""/></p>`;
});

window.addEventListener("online", (event) => {
  document.getElementById(
    "off-on"
  ).innerHTML = `<p class="nav-item nav-link textmen">Estas on<img class="img-fluid pokeimg" width=" 35px"   src="../img/Pokeball_icon-icons.com_67533.svg" alt=""/></p>`;
});

if (!navigator.onLine) {
  document.getElementById(
    "off-on"
  ).innerHTML = `<p class="nav-item nav-link textmen">Estas fuera<img class="img-fluid pokeimg" width=" 35px"  src="../img/Open_Pokeball_icon-icons.com_67538.svg" alt=""/><</p>`;
} else {
  document.getElementById(
    "off-on"
  ).innerHTML = `<p class="nav-item nav-link textmen">Estas on<img class="img-fluid pokeimg" width=" 35px"   src="../img/Pokeball_icon-icons.com_67533.svg" alt=""/> </p>`;
}

/** ==================================== */
// Elementos de DOM
const button = document.getElementById("sendButton");
const inputElement = document.getElementById("search");
const resultDiv = document.getElementById("main");






//localstorage
window.onload = function (e) {
  pokemosQuery(localStorage.getItem("poke"));
};



const pokemosQuery = (poke) => `query{
    pokemon(name :"${poke}"){
      name
      height
            weight
            base_experience
        sprites{
          front_default
        }
      }
      
  } `;

button.addEventListener("click", () => {
  const valorDeInput = inputElement.value;
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: pokemosQuery(valorDeInput),
    }),
  };

  fetch("https://graphql-pokeapi.graphcdn.app/", options)
    .then(function (response) {
      console.log("response cruda", response);
      return response.json();

    })
    .then(function (json)  {   

      resultDiv.innerHTML = `<div class="pokecard" style="width: 18rem;">
        <div class="card-body">
          <img src="${json.data.pokemon.sprites.front_default}" class="card-img-top poke" width:"246px" height:"246px" alt="...">
          <h2 class="titulo-nombre">${json.data.pokemon.name}</h2>
          <table class="table">
              <thead>
                  <th scope="col">Altura</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Experiencia</th>
              </thead>
              <tbody class="text">
                  <td><p class="text1">${json.data.pokemon.height}</p> </td>
                  <td><p class="text2">${json.data.pokemon.weight}</p> </td>
                  <td><p class="text3">${json.data.pokemon.base_experience}</p></td>
                </tbody>
           </table>
           <button  id="pokeBoton" class="pokebtn" onclick="pokeFav('guardarResultado','${json.data.pokemon}');"> ❤️ Agregar a Favoritos ❤️</button>
        </div>
      </div>   
        `;
      guardarResultado("guardarResultado", json);
    })
    .finally(function () {})
    .catch(function (err) {
      console.log("Algo fallo crack", err);
    });
});





/* -------------------------------------------------------------------------------------------------- */
//localStorage lo probe en network y funciona

function guardarResultado(guardarPoke, json) {
  localStorage.setItem(guardarPoke, JSON.stringify(json));
}


var poke = localStorage.getItem('guardarPoke')

// llega a la consola "avisando que estan agregados"

function pokeFav(guardarPoke) {
  var storage_list = [];
  storage_list = JSON.parse(localStorage.getItem(guardarPoke)) || [];

  if (localStorage.getItem(guardarPoke) === null) {
    storage_list.push(guardarPoke);
    console.log(storage_list);
    localStorage.setItem(guardarPoke, JSON.stringify(storage_list));
    process("guardarResultado");
  } else {
    console.log("Ya se ha agregado!");
  }
}


//hasta aca funciona... 🤷‍♀️











/*---------------------------------------------------------------------------------------------------------------- */









//loader spinner

function onReady(callback) {
  var loading = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(loading);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});



