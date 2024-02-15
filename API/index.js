/*
import getRickAndMortyCharacters from './getRickAndMortyCharacters.js'
import getPokemonCharacters from './getPokemonCharacters.js'
import getDogs from './getDogs.js'
*/


let content = document.getElementById('main-content')

let input = document.getElementById('input')
const count = input.value
console.log(count)

let RickAndMorty = document.getElementById('RickAndMorty')
let Pokemon = document.getElementById('Pokemon')
let Dog = document.getElementById('Dog')

console.log()

let btnFlex = document.getElementById('button-flex')
let btnGrid = document.getElementById('button-grid')

btnFlex.addEventListener("click", displayFlex)
btnGrid.addEventListener("click", displayGrid)


function displayFlex() {
    content.className = 'main-content'

    let imgs = content.querySelectorAll('img')
    for (let img of imgs) {
        img.style.width = '150px'
        img.style.height = '110px'
    }

    let ps = content.querySelectorAll('p')
    for (let p of ps) {
        p.style.display = 'block'
    }
}

function displayGrid() {
    content.className = 'grid-main-content'

    let imgs = content.querySelectorAll('img')
    for (let img of imgs) {
        img.style.width = '100%'
        img.style.height = '100%'
    }

    let ps = content.querySelectorAll('p')
    for (let p of ps) {
        p.style.display = 'none'
    }
}

setImages('Dog')

async function setImages(api, count = 12) {
    try {
        let images = []
        switch (api) {
            case 'RickAndMorty':
                images = await getRickAndMortyCharacters(count)
                break
            case 'Pokemon':
                images = await getPokemonCharacters(count)
                break
            case 'Dog':
                images = await getDogs(count)
                break
        }

        for (let image of images) {
            content.insertAdjacentHTML('beforeend', `
                <div class="image"> 
                    <img class='image-icon' src=${image.url}></img>
                    <p class='image-title'>${image.name.length > 20 ? image.name.slice(0, 20) + "…" : image.name}</p>
                </div>
            `)
        }

        if (document.documentElement.clientHeight < document.documentElement.scrollHeight){
            content.style.overflowY = 'scroll'
        }

    } catch(err) {
        console.log(err)
    }
}

async function getRickAndMortyCharacters(count = 12) {
    try{
        let countArr = [...Array(count+1).keys()]
        let result = []
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${countArr}`)
        let data = response.data
        data.forEach(item => result.push({id: item.id, name: item.name, url: item.url}))
        console.log(result)
        return result
    } catch(error) {
        if (error.response) {
            // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Запрос был сделан, но ответ не получен `error.request`- это экземпляр XMLHttpRequest в браузере
            console.log(error.request);
        } else {
            // Произошло что-то при настройке запроса, вызвавшее ошибку
            console.log('Error', error.message);
        }
        console.log(error.config);
    };
}

async function getPokemonCharacters(count = 12) {
    try{
        let result = []
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
        let data = response.data.results
        data.forEach(item => result.push({id: Number(item.url.match(/\/\d+\//g)[0].slice(1, -1)), name: item.name, url: item.url}))
        console.log(result)
        return result
    } catch(error) {
        if (error.response) {
            // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Запрос был сделан, но ответ не получен `error.request`- это экземпляр XMLHttpRequest в браузере
            console.log(error.request);
        } else {
            // Произошло что-то при настройке запроса, вызвавшее ошибку
            console.log('Error', error.message);
        }
        console.log(error.config);
    };
}

async function getDogs(count = 12) {
    try{
        let result = []
        const response = await axios.get(`https://dog.ceo/api/breed/hound/images/random/${count}`)
        let data = response.data.message
        data.forEach(item => result.push({id: data.indexOf(item)+1, name: item.match(/\/hound-.+\//g)[0].slice(1, -1), url: item}))
        console.log(result)
        return result
    } catch(error) {
        if (error.response) {
            // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Запрос был сделан, но ответ не получен `error.request`- это экземпляр XMLHttpRequest в браузере
            console.log(error.request);
        } else {
            // Произошло что-то при настройке запроса, вызвавшее ошибку
            console.log('Error', error.message);
        }
        console.log(error.config);
    };
}