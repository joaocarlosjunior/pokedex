const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMore");
const logo = document.querySelector(".logo");

const maxRecords = 151;
let limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
  <li>
  <a tabindex="3" onclick="pokemonSelected('${pokemon.number}')" class="pokemon ${
    pokemon.type
  }" aria-label="Pokémon ${pokemon.name}">
    <span class="number">#${pokemon.number.toString().padStart(3, "0")}</span>
    <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
            </ol>
            <img aria-label="Pokémon ${pokemon.name}" aria-description="Imagem do pokémon ${pokemon.name}" src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>

    </a>
  </li>
  
    `;
}

/* function addSearch() {
  return `
    <div class="search-pokemon">
      <i class="small search"></i>
      <input type="text" id="txtBusca" placeholder="Buscar..."/>
      <button id="btnBusca">Buscar</button>
    </div>
  `;
} */

(function checkSizeScreen() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1920) {
    limit = 28;
  }
})();

function loadPokemonsItens(limit, offset) {
  pokeApi
    .getPokemons(limit, offset)
    .then((pokemons) => {
      pokemonsRequiredApi(pokemons);
      pokemonList.innerHTML += pokemons
        .map((pokemon) => convertPokemonToLi(pokemon))
        .join("");
    })
    .catch((error) => console.error(error));
}

loadPokemonsItens(limit, offset);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonsItens(limit, offset);
});
