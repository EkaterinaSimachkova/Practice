const getRickAndMortyCharacters = async () => {
    try{
        const response = await axios.get('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12]')
        console.log(response.data)
    } catch(error) {
        if (error.response) {
        // Запрос был сделан, и сервер ответил кодом состояния, который
        // выходит за пределы 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
        // http.ClientRequest в node.js
        console.log(error.request);
        } else {
        // Произошло что-то при настройке запроса, вызвавшее ошибку
        console.log('Error', error.message);
        }
        console.log(error.config);
    };
}