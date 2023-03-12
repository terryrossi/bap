//
//
// Initialize list of Pokemons using IIFE to protect variables

// *******   IIFE   ********
const pokemonRepository = (function () {
	const pokemonList = [];
	let pokemon = {};

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
			console.log(
				`The New Object has NOT been added to the list. Please correct the Error and Resubmit...`
			);
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
				console.log(
					`The New Object has NOT been added to the list. Please correct the Error and Resubmit...`
				);
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
	///////////////////////////////////////////////////
	//
	// function addListItem

	function addListItem(pokemon) {
		//   Test for Pokemon size over 1.5
		//
		const wow = pokemon.height >= 1.5 ? "<a class='wow'> (WOW!!! That is Huge!!!) </a>" : "";

		// Format text when multiple types are present
		//
		const typeFormated = pokemon.types.join(" and ");

		// Format the final text with Pokemon details.
		//
		const finalText = `<div class="${pokemon.color}"><p>${pokemon.name} is ${
			pokemon.height
		} meter tall ${wow}
    and is of ${typeFormated} ${pokemon.types.length > 1 ? "types" : "type"}</p></div>`;
		//
		// Format HTML List Item;
		//
		// Create variables from HTML Elements:
		const pokemonHtmlList = document.querySelector(".pokemon-list");
		const li = document.createElement("li");
		const button = document.createElement("button");

		// add Class to button
		button.classList.add("pokemon-button");

		// add Pokemon name to button text
		button.innerHTML = pokemon.name;

		// insert the button into the list line
		li.appendChild(button);

		// add Class to list line
		li.classList.add("pokemon-list__item");

		// add the line into the list
		pokemonHtmlList.appendChild(li);
	}
	//  End of addListItem
	//
	//////////////////////////////////////////////////////////////////
	//
	// SEARCH FUNCTION...
	//
	function search(searchName) {
		// Find Pokemon
		const foundPokemon = pokemonRepository.getAll().filter(function (pokemon) {
			if (pokemon.name.toLowerCase() === searchName.toLowerCase()) {
				return pokemon;
			}
		});
		return foundPokemon;
	}
	//
	// END OF SEARCH FUNCTION...
	//
	////////////////////////////////////////////////////////////////////
	//
	// DISPLAY POKEMONS FUNCTION. SENDS HTML TO THE DOM ...
	//
	function showHTML(pokemonList) {
		pokemonList.forEach(function (pokemon) {
			pokemonRepository.addListItem(pokemon);
		});
	}
	// END OF DISPLAY FUNCTION...
	//
	////////////////////////////////////////////////////////////

	return {
		add,
		getAll,
		addListItem,
		search,
		showHTML,
	};
})();
//
///////////////////////   END OF IIFE POKEMON INITIALIZATION FUNCTIONS  ////////////////////
//

//
// ************  PROGRAM EXECUTION... **************
//
// Add a new Pokemon
const newPokemon = {
	name: "Titi",
	height: 100,
	types: ["car", "truck"],
	color: "purple",
};
pokemonRepository.add(newPokemon);
//
//  SHOW ALL POKEMONS
pokemonRepository.showHTML(pokemonRepository.getAll());

// SHOW ONLY SEARCHED POKEMON
// const pokemonSearchName = "VenUsaur";
// const resultOfSearch = pokemonRepository.search(pokemonSearchName);
// pokemonRepository.showHTML(resultOfSearch);
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
