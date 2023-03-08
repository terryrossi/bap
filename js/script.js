const pokemonList = [];

let pokemon = { name: "Bulbasaur", height: 0.7, types: ["grass", "poison"] };
pokemonList.push(pokemon);

pokemon = { name: "Ivysaur", height: 1, types: ["grass", "poison"] };
pokemonList.push(pokemon);

pokemon = { name: "Venusaur", height: 2, types: ["grass", "poison"] };
pokemonList.push(pokemon);

pokemon = { name: "Charmander", height: 0.6, types: ["fire"] };
pokemonList.push(pokemon);

for (i = 0; i < pokemonList.length; i++) {
  console.log(
    `${pokemonList[i].name} is ${pokemonList[i].height} meter tall and is of ${pokemonList[i].types} type(s)`
  );
}
