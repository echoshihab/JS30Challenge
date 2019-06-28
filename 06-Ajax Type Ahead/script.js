const pokemons= "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"

const pokedex = [];
fetch(pokemons)
    .then(res => res.json())
    .then (data => pokedex.push(...data))


const pokeFinder = (wordToMatch, pokedex) => {
    return pokedex.filter(pokemon => {
        const regex = new RegExp(wordToMatch, 'gi');
        return pokemon.name.english.match(regex) || pokemon.type.find(element=> element.match(regex))
                                                    //since type is an array, we are using find here
    })
}

const showMatches = () => {
    const matchFound = pokeFinder(event.target.value, pokedex);
    const html = matchFound.map(pokemon =>{
            const regex = new RegExp(event.target.value, 'gi');
            const pokeName = pokemon.name.english.replace(regex, `<mark>${event.target.value}</mark>`);
            const type = pokemon.type.join(', ').replace(regex, `<mark>${event.target.value}</mark>`);

            return `
            <tr>
                <td> ${pokeName} </td>
                <td> ${type} </td>

            </tr>`;


       }).join('');
   results.innerHTML = html;
}


const inputVal = document.querySelector('.pokeSearch')
const results = document.querySelector('.results')

inputVal.addEventListener('keyup', showMatches);
