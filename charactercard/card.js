const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    imgSrc: "images/snortleblat.png",
    imgAlt: "An alligator-like beast standing in a swampy area",
    attacked: function(){
        character.health -= 20;
        if (character.health <= 0) {
            alert('Uh-oh. You died! Refresh and try again!');
            character.health = 0;
        }
        characterHealth.innerHTML = `Health: ${character.health}`;
    },
    levelUp: function(){
        character.level += 1;
        characterLevel.innerHTML = `Level: ${character.level}`
    }
};
const main = document.querySelector('main');
const card = document.createElement('section');
card.className = 'card';
let cardHtml =`
    <img class="image" src=${character.imgSrc} alt=${character.imgAlt}>
    <h1 class="name">${character.name}</h1>
    <div class="stats">
        <p id="characterClass">Class: ${character.class}</p>
        <p id="level">Level: ${character.level}</p>
        <p id="health">Health: ${character.health}</p>
    </div>
    <form class="buttons">
        <button id="attacked" type="button">Attacked</button>
        <button id="levelUp" type="button">Level Up</button>
    </form>`
card.innerHTML = cardHtml;
main.appendChild(card);
const characterLevel = document.querySelector('#level');
const characterHealth = document.querySelector('#health');
document.querySelector('#attacked').addEventListener("click", character.attacked);
document.querySelector('#levelUp').addEventListener("click", character.levelUp);


