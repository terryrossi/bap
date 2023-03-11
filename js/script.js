//
//
// Initialize list of Pokemons using IIFE to protect variables

let pokemon = {};
const pokemonRepository = (function () {
	const pokemonList = [];

	pokemon = {
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

	pokemon = {
		name: "Charmander",
		height: 0.6,
		types: ["fire"],
		color: "red",
	};
	pokemonList.push(pokemon);

	///////////////////////////////////  WE ARE STILL IN THE IIFE  /////////////////////////////////
	//
	// Function add to add new Pokemons to the list

	function add(pokemon) {
		// Check if argument received is NOT of type "Object"
		if (typeof pokemon !== "object") {
			console.log(`The argument passed to the function "add" is of type ${typeof pokemon}`);
			console.log(
				`The argument passed to the function "add" MUST be an object 
        with the following keys: ${Object.keys(pokemonRepository.getAll()[0])}.`
			);
			console.log(`The New Object has NOT been added to the list. Please correct the Error and Resubmit...`);
		} else {
			// Pokemon is indeed an Object, now let's check if keys are the correct ones...

			// Grab the Original list of keys of the pokemon object from the First element of the pokemonRepository
			// for furure validation
			const validPokemonKeys = Object.keys(pokemonRepository.getAll()[0]);

			// Compare keys of argument received with valid keys
			if (Object.keys(pokemon).toString() !== validPokemonKeys.toString()) {
				console.log(`INVALID KEYS of the received Argument: `);
				console.log(`${Object.keys(pokemon)} `);

				console.log(`VALID KEYS are: `);
				console.log(`${Object.keys(pokemonRepository.getAll()[0])}.`);
				console.log(`The New Object has NOT been added to the list. Please correct the Error and Resubmit...`);
			} else {
				// All is good, Push pokemon to the pokemonRepository
				pokemonList.push(pokemon);
			}
		}
	}
	// end of function add
	//
	///////////////////////////////////  WE ARE STILL IN THE IIFE  /////////////////////////////////
	//
	// Function getAll to return the list of all Pokemons
	//
	function getAll() {
		return pokemonList;
	}
	//
	// end of function getAll
	//
	return {
		add,
		getAll,
	};
})();
//
///////////////////////////////////   END OF IIFE POKEMON INITIALIZATION FUNCTIONS  /////////////////////////////////
//
//
// DISPLAY POKEMONS FUNCTION. SENDS HTML TO THE DOM ...
//
function showHTML(pokemonList) {
	pokemonList.forEach(function (pokemon) {
		//   Test for Pokemon size over 1.5
		const wow = pokemon.height >= 1.5 ? "<a class='wow'> (WOW!!! That is Huge!!!) </a>" : "";

		// Format text when multiple types are present
		const typeFormated = pokemon.types.join(" and ");

		// Format the final text with Pokemon details. Should look like the example below:
		// Bulbasaur is 0.7 meter tall and is of grass and poison types
		// Each line should be of the color specified in the object.color

		const finalText = `<div class="${pokemon.color}"><p>${pokemon.name} is ${pokemon.height} meter tall ${wow}
    and is of ${typeFormated} ${pokemon.types.length > 1 ? "types" : "type"}</p></div>`;
		//
		document.write(finalText);
	});
}
// END OF DISPLAY FUNCTION...
//
////////////////////////////////////////////////////////////
//
// SEARCH FUNCTION...
//
function searchPokemon(pokemonSearchName) {
	// Find Pokemon
	const pokemon = pokemonRepository.getAll().filter(function (pokemon) {
		if (pokemon.name.toLowerCase() === pokemonSearchName.toLowerCase()) {
			return pokemon;
		}
	});

	showHTML(pokemon);
}

// END OF SEARCH FUNCTION...
//
////////////////////////////////////////////////////////////////////
//
// ************  PROGRAM EXECUTION... **************
//
// Add a new Pokemon
pokemon = {
	name: "Titi",
	height: 100,
	types: ["car", "truck"],
	color: "purple",
};
pokemonRepository.add(pokemon);
//
//  SHOW ALL POKEMONS
showHTML(pokemonRepository.getAll());

// SHOW ONLY SEARCHED POKEMON
// const pokemonSearchName = "VenUsaur";
// searchPokemon(pokemonSearchName);

//
//
// TESTING...

// Add an invalid Pokemon (STRING) - TESTED!
// pokemonRepository.add("titi");

// Add a new Pokemon (INVALID KEY "name") and show the new list on Console - TESTED!
// pokemon = {
//   names: "toto",
//   height: 100,
//   types: ["car", "truck"],
//   color: "purple",
// };

// Add a new Pokemon (INVALID extra KEY) and show the new list on Console - TESTED!
// pokemon = {
//   name: "toto",
//   height: 100,
//   types: ["car", "truck"],
//   color: "purple",
//   age: 27,
// };

// Add a new Pokemon (VALID) and show the new list on Console - TESTED!
// pokemon = {
//     name: "Toto",
//     height: 100,
//     types: ["car", "truck"],
//     color: "purple",
// };
// Add the new Pokemon
// pokemonRepository.add(pokemon);
// showAllPokemons();
