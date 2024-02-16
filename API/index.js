/*
import getRickAndMortyCharacters from './getRickAndMortyCharacters.js'
import getPokemonCharacters from './getPokemonCharacters.js'
import getDogs from './getDogs.js'
*/


let content = document.getElementById('main-content')

let input = document.getElementById('input')

let radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => radio.addEventListener('change', search))

let btnSearch = document.getElementById('button-search')
btnSearch.addEventListener("click", search)

let btnFlex = document.getElementById('button-flex')
let btnGrid = document.getElementById('button-grid')
btnFlex.addEventListener("click", displayFlex)
btnGrid.addEventListener("click", displayGrid)


function displayFlex() {
    content.className = 'main-content'

    let divs = content.querySelectorAll('div')
    for (let div of divs) {
        div.className = 'image'
    }
}

function displayGrid() {
    content.className = 'row'
    content.classList.add('row-cols-4')
    
    let divs = content.querySelectorAll('div')
    for (let [idx, div] of divs.entries()) {
        div.style.height = '300px'
        switch (idx % 6) {
            case 0:
            case 1:
            case 2:
            case 3:
                div.className = 'col-3'
                break
            case 4:
            case 5:
            
                div.className = 'col-6'
                break
        }
        
    }
}

function search() {
    let api
    for (let radio of radios) {
		if (radio.checked) {
			api = radio.value
		}
	}
    let count = input.value
    if (count == '') {
        setImages(api)
    } else if (isFinite(count)) {
        setImages(api, +count)
    } else {
        alert('Введено не число!')
    }
}

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
        console.log(images)
        console.log(typeof(images))
        content.innerHTML = ''
        for (let image of images) {
            content.insertAdjacentHTML('beforeend', `
                <div class='image'> 
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

async function getRickAndMortyCharacters(count) {
    try{
        let countArr = [...Array(count+1).keys()].slice(1)
        let result = []
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${countArr}`)
        let data = response.data
        data.forEach(item => result.push({id: item.id, name: item.name, url: item.image}))
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

async function getPokemonCharacters(count) {
    try{
        let result = []
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
        let data = response.data.results
        data.forEach(async (item) => {
            let id = item.url.split('/').at(-2)
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            console.log(pokemon.data.sprites.front_default)
            result.push({id: +id, name: item.name, url: pokemon.data.sprites.front_default})
        })
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

async function getDogs(count) {
    try{
        let result = []
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`)
        let data = response.data.message
        data.forEach(item => result.push({id: data.indexOf(item)+1, name: item.split('/').at(-2), url: item}))
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