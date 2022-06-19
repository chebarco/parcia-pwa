//card

const poke_container = document.getElementById("poke_container");
const pokemons_number = 150;
const filtro = document.getElementById("buscar");


const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const { name, sprites } = pokemon;

  const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
        </div>
    `;
  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();

//filtro


