const requestData = 'https://pokeapi.co/api/v2/pokemon/ditto';

function makeRequest(requestData){
    //Получаем данные от сервера 
    const request = new XMLHttpRequest();
    request.open('GET', requestData);
    request.send();

    request.addEventListener('load', function(){
        const data = JSON.parse(this.responseText);
        console.log('получаем данные об покемоне')
        console.log(data);
        const abilityRequest = data.abilities[0].ability.url;

        //Получаем дополнительные данные от сервера о способностях покемона из URL строким первого запроса 
        const request = new XMLHttpRequest();
        request.open('GET', abilityRequest);
        request.send();

        request.addEventListener('load', function(){
            const data = JSON.parse(this.responseText);
            console.log('получаем данные об его способностях на английском языке и выводим в консоль')
            console.log(data.effect_entries[1].effect);
        })
    })

}

const res = makeRequest(requestData);

console.log(res);