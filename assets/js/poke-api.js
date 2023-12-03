const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();

  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.id;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.type = type;
  pokemon.types = types;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  const abilities = pokeDetail.abilities.map(
    (abilitieSlot) => abilitieSlot.ability.name
  );
  const [abilitie] = abilities;

  pokemon.abilitie = abilitie;
  pokemon.abilities = abilities;

  pokemon.height = pokeDetail.height/10;
  pokemon.weight = pokeDetail.weight/10;

  return pokemon;
}

pokeApi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) =>
    response
      .json()
      .then((pokeDetail) => convertPokeApiDetailToPokemon(pokeDetail))
  );
};

pokeApi.getPokemons = (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails);
};