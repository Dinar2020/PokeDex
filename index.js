// console.log('Construindo uma pokedex')

const div = document.createElement('div')
div.innerHTML= 'Criando uma pokedex'
console.log(div)

const page = document.querySelector('#pokedex-page')
// page.appendChild(div)

fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    .then(response =>{
    console.log(response) 
    return response.json()
    })
    
    .then( async data => {
        const box = document.querySelector('#pokemon-box')
        page.innerHTML = ''
        // console.log(box)
        console.log(data)


        for(let i=0 ; i < data.results.length; i++) {
            box.querySelector('#pokemon-name').innerHTML = data.results[i].name
            box.querySelector('#pokemon-name').style.textTransform ="capitalize"
            const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const image = await pokemonImage.json()
            box.querySelector('#pokemon-img').src= image.sprites.front_default
            console.log(image.sprites.front_default)
            const pokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
            const info = await pokemonInfo.json()
            console.log(info)
            box.querySelector('#pokemon-type').innerHTML = info.types[0].type.name
            box.querySelector('#pokemon-type').style.textTransform="capitalize"
            page.innerHTML += box.outerHTML
            // const pokemonType = await fetch('https://pokeapi.co/api/v2/type/')
            // const type = await pokemonType.json()
            // console.log(type)
            // box.querySelector('#pokemon-type').innerHTML = type.results[i].name
            
            // 'if pokemon.types.type.name ==                       '

            // if box.querySelector('#pokemon-type').innerHTML = type.results[i].name
            
            // console.log(data.results[i].name)
        }

        
    })



    // for (let i=0; i < )

