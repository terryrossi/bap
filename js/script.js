const pokemonList = [];

let pokemon = {
  name: "Bulbasaur",
  height: 0.7,
  types: ["grass", "poison"],
  color: "green",
};
pokemonList.push(pokemon);

pokemon = {
  name: "Ivysaur",
  height: 1,
  types: ["grass", "poison"],
  color: "green",
};
pokemonList.push(pokemon);

pokemon = {
  name: "Venusaur",
  height: 2,
  types: ["grass", "poison"],
  color: "green",
};
pokemonList.push(pokemon);

pokemon = { name: "Charmander", height: 0.6, types: ["fire"], color: "red" };
pokemonList.push(pokemon);

// Prep variables
let wow = ""; // Extra Wow text for size over 1.5
let typeFormated = ""; // This variable will be used to add " AND " between the types of pokemon when more than 1 type

// For Loop for each Pokemon
for (i = 0; i < pokemonList.length; i++) {
  // Extract each Pokemon from the List of Pokemons and place it in single object for convenience
  pokemon = pokemonList[i];

  //   Ternary operator to fill up extra WOW! text for size over 1.5
  wow =
    pokemon.height >= 1.5 ? "<a class='wow'> (WOW!!! That's Huge!!!) </a>" : "";

  // The following step is outside of the exercise.
  // It was just to create the right Grammar for the text.
  // For example: Bulbasaur is 1 meter tall and is of grass AND poison typeS
  // as you can notice there should be "AND" between each type and also "S" plurial for "type"
  // Please ignore if Confusing.

  // Initialize the first pokemon type
  typeFormated = pokemon.types[0];

  // If the pokemon has more than 1 type, we need to place " and " in the text between all types
  if (pokemon.types.length > 1) {
    for (let i = 1; i < pokemon.types.length; i++) {
      // we prepare the text here to include " and " between all the types
      typeFormated = typeFormated + " and " + pokemon.types[i];
    }
  }

  // finalText will include perfect grammar ("and" between types + type singular or
  //plurial based on number of types in he object")

  finalText = `<div class="${pokemon.color}"><p>${pokemon.name} is 
    ${pokemon.height} meter tall ${wow}and is of ${typeFormated} ${
    pokemon.types.length > 1 ? "types" : "type"
  }</p></div>`;

  document.write(finalText);
}
