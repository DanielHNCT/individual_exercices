export const createCard = (data) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardPlate = document.createElement('h2');
    cardPlate.textContent = data.plate;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = data.description;

    const cardImage = document.createElement('h1');
    cardImage.textContent = data.image;

    const cardButton = document.createElement('button');
    cardButton.textContent = 'BUY';

    card.appendChild(cardPlate);
    card.appendChild(cardDescription);
    card.appendChild(cardImage);
    card.appendChild(cardButton);

    return card;
}