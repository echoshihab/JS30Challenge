const pokemons= "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"

const pokedex = [];
const pokedex2 = [];
fetch(pokemons)
    .then(res => res.json())
    .then (data => pokedex.push(...data))



