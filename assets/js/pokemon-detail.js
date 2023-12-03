var pokemons = [];

function pokemonDetailMobile(pokemon) {
  return `
  <div class="pokemonModal">
    <div class="pokemon-detail ${pokemon.type}">
      <div class="closeModalButton">
        <span id="closeModal" class="close">&times;</span>
      </div>
      <span class="name">${pokemon.name}</span>
      <span class="number">${pokemon.number.toString().padStart(3,'0')}</span>
      <div class="detail">
      ${pokemon.types
        .map((type) => `<span class="type ${type}">${type}</span>`)
        .join("")}
      </div>

      <div class="pokemon-photo">
        <img src="${pokemon.photo}" alt=""/>    
      </div>
    </div>
    
    <div class="pokemon-about">
      
      <div class="infos-pokemon">

        <div class="box1">

          <div class="abilities">
            <span>Abilitie</span>
            <div class="abilitie">
            ${pokemon.abilities
              .map((abilitie) => `<span>${abilitie}</span>`)
              .join("")}
            </div>
          </div>

          <div class="height">
            <span>Height</span>
            <span class="valueHeight">${pokemon.height} m</span>
          </div>
          <div class="weight">
            <span>Weight</span>
            <span class="valueWeight" >${pokemon.weight} kg</span>
          </div>
        </div>
      </div>
    </div>
  </div> 
    `;
}

function pokemonDetailDesktop(pokemon) {
  return `
  <div class="pokemonModal">
    <div class="pokemon-photo">
      <img src="${pokemon.photo}" alt="" />
    </div>

    <div class="pokemonAbout">
      <div class="pokemonInfo">
        <span class="number">#${pokemon.number.toString().padStart(3,'0')}</span>
        <span class="name">${pokemon.name}</span>
        <div class="types">
          ${pokemon.types
          .map((type) => `<span class="type ${type}">${type}</span>`)
          .join("")}
        </div>
      </div>

      <div class="pokemonDetail">
        <div class="features">
          <div class="height">
            <span>Height</span>
            <span class="valueHeight">${pokemon.height} m</span>
          </div>

          <div class="weight">
            <span>Weight</span>
            <span class="valueWeight" >${pokemon.weight} kg</span>
          </div>
        </div>

        <div class="abilities">
            <span>Abilitie</span>
            <div class="abilitie">
              ${pokemon.abilities
                .map((abilitie) => `<span>${abilitie}</span>`)
                .join("")}
            </div>
        </div>

      </div>
    </div>
  </div>
  `;
}

function pokemonSelected(numberPokemon) {
  viewModal(numberPokemon);
}

function pokemonsRequiredApi(pokemonsList) {
  pokemons = pokemons.concat(pokemonsList);
}

function viewModal(numberPokemon) {
  const modalContent = document.getElementById("pokemonModalContent");
  const windowWidth = window.innerWidth;

  pokemons.map((pokemon) => {
    if (pokemon.number === Number(numberPokemon)) {
      if (windowWidth < 720) {
        modalContent.innerHTML = pokemonDetailMobile(pokemon);
      } else {
        modalContent.innerHTML = pokemonDetailDesktop(pokemon);
      }
    }
  });

  const modal = document.getElementById("pokemonModal");
  modal.style.display = "block";

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const btnCloseModal = document.getElementById("closeModal");
  btnCloseModal.onclick = () => {
    modal.style.display = "none";
  };

}
