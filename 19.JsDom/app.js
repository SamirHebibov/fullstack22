let container = document.createElement('div'); 
container.style.width = '960px'; 
container.style.margin = '0 auto'; 
container.style.boxSizing = 'border-box'; 

let card = document.createElement('div'); 
card.style.width = '100%'; 
card.style.height = '360px'; 
card.style.backgroundColor = 'black'; 
card.innerHTML = '960 x 360px';
card.style.color = 'white'; 
card.style.display = 'flex'; 
card.style.justifyContent = 'center'; 
card.style.alignItems = 'center'; 
card.style.fontSize = '40px';

let cards = document.createElement('div');
cards.style.width = '100%'; 
cards.style.height = '300px'; 
cards.style.padding = '10px'; 
cards.style.display = 'flex'; 
cards.style.justifyContent = 'space-between';
cards.style.boxSizing = 'border-box'; 

function createCard(titleText, bodyText, linkText) {
    let cardContainer = document.createElement('div');
    cardContainer.style.width = '290px';
    cardContainer.style.color = 'black';
    cardContainer.style.padding = '10px';
    cardContainer.style.boxSizing = 'border-box';
    
    let cardInner = document.createElement('div');
    cardInner.style.width = '100%';
    cardInner.style.height = '180px';
    cardInner.style.backgroundColor = 'black';
    cardInner.style.color = 'white'; 
    cardInner.style.display = 'flex';
    cardInner.style.justifyContent = 'center';
    cardInner.style.alignItems = 'center';
    cardInner.innerHTML = '290 x 180px';
    
    let title = document.createElement('p');
    title.style.fontStyle = 'italic';
    title.style.fontWeight = '600';
    title.innerText = titleText;
    
    let text = document.createElement('p'); 
    text.innerText = bodyText;
    
    let more = document.createElement('a'); 
    more.style.color = 'yellow'; 
    more.innerText = linkText;
    
    cardContainer.appendChild(cardInner);
    cardContainer.appendChild(title);
    cardContainer.appendChild(text);
    cardContainer.appendChild(more);
    
    return cardContainer;
}

let card1 = createCard('Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum!', 'Read More >');
let card2 = createCard('Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum!', 'Read More >');
let card3 = createCard('Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum!', 'Read More >');

cards.appendChild(card1);
cards.appendChild(card2);
cards.appendChild(card3);

container.appendChild(card);
container.appendChild(cards);
document.body.appendChild(container);
