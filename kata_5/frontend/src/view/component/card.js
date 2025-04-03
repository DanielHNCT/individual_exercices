export const createCard = (data) => {
    const card = document.createElement('div');
    data.forEach(element => {
        
        card.classList.add('card');

        const cardPlate = document.createElement('h2');
        cardPlate.textContent = element.plate;

        const cardDescription = document.createElement('p');
        cardDescription.textContent = element.description;

        const cardImage = document.createElement('h1');
        cardImage.textContent = element.image;

        card.appendChild(cardPlate);
        card.appendChild(cardDescription);
        card.appendChild(cardImage);
    });
    return card;
}