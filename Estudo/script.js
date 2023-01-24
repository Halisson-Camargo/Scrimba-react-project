
function pokemonInfo(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
  .then(response => response.json())
  //.then(res => console.log(res))
  .then(function(info){
    info.results.forEach(function(results){
      fetchPokemon(results);
    })
  })
}

function fetchPokemon(results){
  let url = results.url;
  fetch(url)
  .then(response => response.json())
  //.then(res => console.log(res))
  .then(results => {
    renderPokemon(results);
  } )
}

function renderPokemon(data) {
  let sectionCenter = document.querySelector('.section-center');
  let pokeContainer =  document.createElement('div');
  
  createPokeImage(data.id, pokeContainer)

  let pokeName = document.createElement('h4')
  pokeName.innerText = data.name;

  let pokeNumber =  document.createElement('p');
  pokeNumber.innerText = `#${data.id}`;

  let pokeType = document.createElement('ul');
  createTypes(data.types,pokeType)


  pokeContainer.append(pokeName,pokeNumber,pokeType);
  sectionCenter.appendChild(pokeContainer)

}

function createTypes(type, ul){
  type.forEach(function(tipo){
    let typeLi = document.createElement('li');
    typeLi.innerText = tipo['type']['name'];
    ul.append(typeLi)
  })
};

function createPokeImage(pokeId, containerDiv){
  let pokeImage = document.createElement('img');
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
  containerDiv.append(pokeImage)
}

pokemonInfo();