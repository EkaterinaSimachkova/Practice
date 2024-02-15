const getDogs = async (count = 12) => {
    try{
        let result = []
        const response = await axios.get(`https://dog.ceo/api/breed/hound/images/random/${count}`)
        let data = response.data.message
        console.log(data)
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

//export default getDogs