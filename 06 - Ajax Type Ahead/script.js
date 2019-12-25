const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios'

const cities = []
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
    .then(status => status.json())
    .then(data => cities.push(...data))

function findMatches(word, cities){
    return cities.filter(place => {
        const regex = new RegExp(word, 'gi')
        return place.nome.match(regex) || place.microrregiao.mesorregiao.nome.match(regex)
    })
}

function displayMacthes(){
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(place => {
        return `
        <li class="name">${place.nome}, ${place.microrregiao.mesorregiao.nome}</li>
        `
    }).join('');
    suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMacthes)
searchInput.addEventListener('keyup', displayMacthes)
