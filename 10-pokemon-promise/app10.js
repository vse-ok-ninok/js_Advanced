function getData(url, errorMessage) {
    return fetch(url)
    .then(responce => {
        if (!responce.ok) {
            throw new Error(`${errorMessage}: ${responce.status}`)
        };
        return responce.json();
    });
}


getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Не найдена ссылка')
    .then(({ abilities }) => {
        const url = abilities[0].ability.url;
        return getData(url, 'не найдена ссылка 2');
    })
    .then(data => console.log(data.effect_entries[0].effect))
    .catch(error => console.log(error.message));