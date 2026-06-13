// Create a character card object with properties and methods
const characterCard = {
  name: "Snortleblat",
  image: "images/snortleblat.webp",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  attacked: function () {
    this.health -= 20;
    // if the health goes below 0, set it to 0 so it doesn't show negative health
    // and make a dialogue box that says the character has been defeated
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has been defeated!`);
    }
  },
  levelUp: function () {
    this.level++;
  }
}
//initialize the card with the character's information
function cardTemplate(characterCard) {
  return `
    <img class="image" src="./images/snortleblat.webp" alt="Character Image">
    <h2 class="name">${characterCard.name}</h2>
    <ul class="stats">
      <li class="class"><strong>Class:</strong> ${characterCard.class}</li>
      <li class="level"><strong>Level:</strong> ${characterCard.level}</li>
      <li class="health"><strong>Health:</strong> ${characterCard.health}</li>
    </ul>
    <div class="buttons">
      <button id="attacked">Attacked!</button>
      <button id="level-up">Level Up!</button>
    </div>
    `
}
// Render the card for the first time
const html = cardTemplate(characterCard);
document.querySelector(".card").innerHTML = html;

// grab the health and level elements so we can update them when the character is attacked or levels up
const healthElement = document.querySelector(".health");
const levelElement = document.querySelector(".level");
// Add event listeners to the buttons to call the appropriate methods and update the card
document.querySelector("#attacked").addEventListener("click", function () {
  characterCard.attacked();
  healthElement.innerHTML = `<strong>Health:</strong> ${characterCard.health}`;
});
document.querySelector("#level-up").addEventListener("click", function () {
  characterCard.levelUp();
  levelElement.innerHTML = `<strong>Level:</strong> ${characterCard.level}`;
});
