console.log("First in order")
setTimeout(() => console.log("Fifth in order"), 5000)
setTimeout(() => console.log("Fourth in order"), 1000)
setTimeout(() => console.log("Third in order"), 0)

console.log("Second in order")

let mainElement = document.querySelector("main")
let searchTextbox = document.querySelector("#search-text")
let searchButton = document.querySelector("#search")


searchButton.addEventListener("click", () => {
    let searchTerm = searchTextbox.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(response => response.json())
        .then(pokemonData => {
            console.log(pokemonData)
            let imgElement = document.createElement("img")
            imgElement.src = pokemonData.sprites.front_default
            mainElement.append(imgElement)


        });
});