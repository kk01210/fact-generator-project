document.addEventListener('DOMContentLoaded', () => {
    const funFacts = [
        "Animal Lover: She has a deep affection for animals, enjoying their company and caring for them.",
        "Nature Enthusiast: Her love for animals translates into a passion for nature, often leading her to enjoy outdoor activities and wildlife conservation.",
        "Creative Spirit: She enjoys expressing her love for animals through creative outlets like art or writing, but prefers to keep her creations private."
    ];

    const factsList = document.getElementById('fun-facts-list');

    funFacts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });
});
