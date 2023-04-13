// console.log('Construindo uma pokedex')

const div = document.createElement("div");
div.innerHTML = "Criando uma pokedex";
console.log(div);
const cardColor = {
    grass: "#63BD59",
    fire: "#FB9D55",
    flying: "#93AADC",
    poison: "#A86BCA",
    normal: "#9198A2",
    water: "#4D90D6",
    ground: "#DE7545",
    bug: "#8EBF2F",
    fairy: "#E890E7",
    fighting: "#D03F6A",
    psychic: "#F87177",
    rock: "#C9B789",
    electric: "#F4D23B",
    ice: "#74CFC0",
    ghost: "#526AA8",
    dragon: "#136DC3",
    dark: "#5A5A5E",
    steel: "#76A5AF",
};

const page = document.querySelector("#pokedex-page");
// page.appendChild(div)

fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then((response) => {
        console.log(response);
        return response.json();
    })

    .then(async (data) => {
        const box = document.querySelector("#pokemon-box");
        page.innerHTML = null;
        // console.log(box)
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            box.querySelector("#pokemon-name").innerHTML = data.results[i].name;
            box.querySelector("#pokemon-name").style.textTransform =
                "capitalize";
            const pokemonImage = await fetch(
                "https://pokeapi.co/api/v2/pokemon-form/" + data.results[i].name
            );
            const image = await pokemonImage.json();
            box.querySelector("#pokemon-img").src = image.sprites.front_default;
            console.log(image.sprites.front_default);
            const pokemonInfo = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${i + 1}`
            );
            const info = await pokemonInfo.json();
            console.log(info);
            box.querySelector("#pokemon-type").innerHTML =
                info.types[0].type.name;
            box.querySelector("#pokemon-type").style.textTransform =
                "capitalize";
            box.querySelector("#pokemon-type-cardColor").style.backgroundColor =
                cardColor[info.types[0].type.name];
            page.innerHTML += box.outerHTML;
        }
    });
