const request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
    const { abilities } = JSON.parse(this.responseText);
    console.log(abilities[0].ability.name);
});
