let content = document.getElementById('main-content')

async function setImages() {
    try {

        let response = await fetch('https://jsonplaceholder.typicode.com/album/1/photos')
        let json = await response.json()

        let images = json.slice(0, 16)

        for (let image of images) {

            content.insertAdjacentHTML('beforeend', `
                <div class="note"> 
                    <img class=${(image.id != 6) ? 'note-icon' : 'note-icon-current'} src=${image.url}></img>
                    <p class=${(image.id != 6) ? 'note-title' : 'note-title-current'}>${image.title.slice(0, 20) + "…"}</p>
                    <p class="note-date">28.11.2045</p>
                </div>
            `)
            
            /* Еще один способ вставки изображений */
            /*
            let div = document.createElement('div')
            content.append(div)

            let img = document.createElement('img')
            img.className = (image.id != 6) ? 'note-icon' : 'note-icon-current'
            img.src = image.url
            div.append(img)
            
            let p = document.createElement('p')
            p.textContent = image.title.slice(0, 20) + "…"
            p.className = (image.id != 6) ? 'note-title' : 'note-title-current'
            div.append(p)

            let pDate = document.createElement('p')
            pDate.textContent = '28.11.2045'
            pDate.className = 'note-date'
            div.append(pDate)
            */
        }

        if (document.documentElement.clientHeight < document.documentElement.scrollHeight){
            content.style.overflowY = 'scroll'
        }

    } catch(err) {
        console.log(err)
    }
}


setImages()

let btnFlex = document.getElementById('button-flex')
let btnGrid = document.getElementById('button-grid')

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

btnFlex.addEventListener("click", displayFlex)
btnGrid.addEventListener("click", displayGrid)
