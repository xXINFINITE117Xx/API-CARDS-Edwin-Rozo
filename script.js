const container = document.querySelector('main');
const btnGetApi = document.querySelector('#btn-get-api');
const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

let cardContainer = null;

function getAPI() {
    fetch(URL)
        .then(response => response.json())
        .then(data => updateCard(data[0]))
        .catch(err => console.log(err));
}

function updateCard(Simpson) {
    const { quote, image, character,} = Simpson;

    const newCard = document.createElement('div');
    newCard.classList.add('container');

    const imgCard = document.createElement('img');
    imgCard.src = image;
    imgCard.alt = character;


    const quoteCard = document.createElement('p');
    quoteCard.textContent = quote;

    newCard.appendChild(imgCard);
    newCard.appendChild(quoteCard);

    if (cardContainer) {
        container.replaceChild(newCard, cardContainer);
    } else {
        container.appendChild(newCard);
    }

    cardContainer = newCard; 
}

btnGetApi.addEventListener('click', getAPI);
