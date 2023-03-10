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

// For Loop for each Pokemon
pokemonList.forEach(function (pokemon) {
  //   Ternary operator to fill up extra WOW! text for size over 1.5
  let wow =
    pokemon.height >= 1.5
      ? "<a class='wow'> (WOW!!! That is Huge!!!) </a>"
      : "";

  // Format the pokemon types
  let typeFormated = pokemon.types.join(" and ");

  // Format the final text
  let finalText = `<div class="${pokemon.color}"><p>
  ${pokemon.name} is ${
    pokemon.height
  } meter tall ${wow}and is of ${typeFormated} ${
    pokemon.types.length > 1 ? "types" : "type"
  }
</p></div>`;

  document.write(finalText);
});

result = function divide(dividend, divisor) {
  if (divisor === 0) {
    return "you are trying to divide by 0";
  } else {
    return "Result is: " + dividend / divisor;
  }
};
console.log(result(10, 3));
