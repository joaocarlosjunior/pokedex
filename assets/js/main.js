const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMore");

const maxRecords = 151;
const limit = 10;
let offset = 0;
let indexPokemon = 0;

function convertPokemonToLi(pokemon) {
  indexPokemon++;
  return `  
    <a href="#" data-value="${indexPokemon}" class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
            </ol>
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>

    </a>
    `;
}

function loadPokemonItens(limit, offset) {
  pokeApi
    .getPokemons(limit, offset)
    .then((pokemons) => {
      pokemonList.innerHTML += pokemons
        .map((pokemon) => convertPokemonToLi(pokemon))
        .join("");
    })
    .catch((error) => console.error(error));
}

loadPokemonItens(limit, offset);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;

    loadPokemonItens(newLimit, offset);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(limit, offset);
  }
});

const pokemonItems = document.querySelectorAll(".pokemon");

pokemonItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedValue = item.getAttribute("data-value");
    console.log(`Pokemon clicado: ${selectedValue}`);
  
  });
});
