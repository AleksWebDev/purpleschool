const getData = (url, errorMsg) => {
    return fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(`${errorMsg} ${response.ok}`)
            }
            return response.json();
        })
}
getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Error is ocured')
    .then(({abilities}) => {
        const request = abilities[0].ability.url;
        return getData(request);
    }).then(data => {
        console.log(data.effect_entries[1].effect);
    })
    .catch((error) => {
        console.log(error);
    })