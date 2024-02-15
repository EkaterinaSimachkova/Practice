const getRickAndMortyCharacters = async (count = 12) => {
    try{
        let countArr = [...Array(count+1).keys()]
        let result = []
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${countArr}`)
        let data = response.data
        console.log(data)
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

//export default getRickAndMortyCharacters