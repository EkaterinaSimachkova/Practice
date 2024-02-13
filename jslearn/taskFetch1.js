/*
Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, 
запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

Важные детали:

На каждого пользователя должен приходиться один запрос fetch.
Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, 
то функция должна возвращать null в массиве результатов.
*/

async function getUsers(names) {
    let results = []
    for (let username of names) {
        let info = fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status != '200') {
                    return null
                } else return response.json()
            })
            .catch(err => {
                console.log(err)
                return null
            })
        results.push(info)
    }
    return results
}

console.log(getUsers(['EkaterinaSimachkova', 'fa-python-network', 'koroteevmv']))