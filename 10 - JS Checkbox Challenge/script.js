const items = [
    'Tirar uma selfie com a Torre Eiffel',
    'Pegar um barco longtail até as Ilhas Phi Phi',
    'Andar de bicicleta em Amsterdã',
    'Sentir a força das Cataratas do Iguaçu',
    'Pular de bungee jump na Nova Zelândia',
    'Passar uma noite no deserto do Saara',
    'Conhecer os cenotes da Península de Yucatán',
    'Passear de gôndola em Veneza',
    'Pegar o bondinho 28 em Lisboa',
    'Ver a Aurora Boreal na Noruega',
    'Caminhar pela Grande Muralha da China'
]

const app = document.querySelector('.inbox')

const renderizaLista = (itens) => {
    for (item of items) {
        const div = document.createElement('div')
        div.setAttribute('class', 'item')
        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        const p = document.createElement('p')
        const textElement = document.createTextNode(item)

        div.appendChild(input)
        div.appendChild(p)
        p.appendChild(textElement)

        app.appendChild(div)

    }
}

renderizaLista()

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));