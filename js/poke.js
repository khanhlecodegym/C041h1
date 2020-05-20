const pokemon_main = document.getElementById('pokemon_main');
const pokemonLimit =100 ;

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await  fetch(url);
    const pokemon = await res.json();
    console.log("getPokemon -> pokemon", pokemon)

    showPokemon(pokemon);
}

function showPokemon(pokemon) {
    let pokemonElement = document.createElement("div");
    pokemonElement.classList.add('pokemon');
    let name = pokemon.name;
    let imageCover = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

    let pokemonHTML = `
        <div class="img-container">
        <img src="${imageCover}" alt="${name}">
    </div>
    `
    pokemonElement.innerHTML = pokemonHTML;

    pokemon_main.appendChild(pokemonElement);
}

let ran = Math.round(Math.random()*100);

for(let i = 1; i < pokemonLimit; i ++) {
    getPokemon(i);
}

