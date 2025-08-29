const request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
    const { abilities } = JSON.parse(this.responseText);
    const url = abilities[0].ability.url;

    const request2 = new XMLHttpRequest();
    request2.open('GET', url);
    request2.send();

    request2.addEventListener('load', function() {
        const { effect_entries } = JSON.parse(this.response);
        console.log(effect_entries[0].effect);
    })
});
