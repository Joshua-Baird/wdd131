// grab the html elemants I will need
let bottomRow = document.getElementById("bottom-row")
let topRow = document.getElementById("top-row")
let leftColumn = document.getElementById("left-column")
let rightColumn = document.getElementById("right-column")
let addPlayerBtn = document.getElementById("addPlayer")
let removePlayerBtn = document.getElementById("removePlayer")
// initialize the players array
let players = []
let numPlayers = 0


//add event listeners for the add player and remove player buttons
removePlayerBtn.addEventListener('click', () => {
  removePlayer();
  numPlayers--
  console.log("Player removed")
  console.log(players)
})
addPlayerBtn.addEventListener('click', () => {
  numPlayers++
  addPlayer();
  console.log("Player added!")
  console.log(players)
})



//Functions! 
function addPlayer() {
  //add the object to the array
  let newPlayer = {
    //setting the id to the numPlayers variable, becuase that should incrament with each new player
    "id": numPlayers,
    "level": 1,
    "bonuses": 0,
  }
  players.push(newPlayer)
  //add the html to the page in the right spot
  let newPlayerHTML = document.createElement("section");
  newPlayerHTML.classList.add("level-counter");
  newPlayerHTML.id = `${numPlayers}`
  newPlayerHTML.innerHTML +=
    `
    <div class="level-wrapper">
      <button class="levelDown">-</button>
      <div class="level-display">
      <span class="level">${newPlayer.level}</span>
      </div>
      <button class="levelUp">+</button>
    </div>
    <div class="bonus-wrapper">
      <button class="bonusDown">-</button>
        <span class="bonus">${newPlayer.bonuses}</span>
      <button class="bonusUp">+</button>
    </div>
    <div class="combat-wrapper">
      <span class="combat-ability">${getCombatAbility(newPlayer)}</span>
    </div>
`;
  //add event listeners to the buttons
  const levelUpBtn = newPlayerHTML.querySelector(".levelUp")
  levelUpBtn.addEventListener("click", (event) => {
    const playerSection = event.target.closest(".level-counter")
    const playerId = parseInt(playerSection.id)
    levelUp(playerId);
    let player = players.find(p => p.id === playerId)
    //change level display
    let level = playerSection.querySelector(".level")
    level.innerHTML = `${player.level}`
    //update combat ability
    playerSection.querySelector(".combat-ability").innerHTML = getCombatAbility(player)
  })
  const levelDownBtn = newPlayerHTML.querySelector(".levelDown")
  levelDownBtn.addEventListener("click", (event) => {
    const playerSection = event.target.closest(".level-counter")
    const playerId = parseInt(playerSection.id)
    levelDown(playerId);
    let player = players.find(p => p.id === playerId)
    //change level display
    let level = playerSection.querySelector(".level")
    level.innerHTML = `${player.level}`
    //update combat ability
    playerSection.querySelector(".combat-ability").innerHTML = getCombatAbility(player)
  })
  const bonusUpBtn = newPlayerHTML.querySelector(".bonusUp")
  bonusUpBtn.addEventListener("click", (event) => {
    const playerSection = event.target.closest(".level-counter")
    const playerId = parseInt(playerSection.id)
    bonusUp(playerId);
    let player = players.find(p => p.id === playerId)
    let bonus = playerSection.querySelector(".bonus")
    bonus.innerHTML = `${player.bonuses}`
    playerSection.querySelector(".combat-ability").innerHTML = getCombatAbility(player)
  })
  const bonusDownBtn = newPlayerHTML.querySelector(".bonusDown")
  bonusDownBtn.addEventListener("click", (event) => {
    const playerSection = event.target.closest(".level-counter")
    const playerId = parseInt(playerSection.id)
    bonusDown(playerId);
    let player = players.find(p => p.id === playerId)
    let bonus = playerSection.querySelector(".bonus")
    bonus.innerHTML = `${player.bonuses}`
    playerSection.querySelector(".combat-ability").innerHTML = getCombatAbility(player)
  })

  if (numPlayers % 4 === 1) {
    bottomRow.appendChild(newPlayerHTML)
  } else if (numPlayers % 4 === 2) {
    leftColumn.appendChild(newPlayerHTML)
  } else if (numPlayers % 4 === 3) {
    topRow.appendChild(newPlayerHTML)
  } else if (numPlayers % 4 === 0) {
    rightColumn.appendChild(newPlayerHTML)
  }
}

function removePlayer() {
  players.pop()
  let playerToRemove = document.getElementById(`${numPlayers}`)
  playerToRemove.remove()
}

function levelUp(id) {
  let player = players.find(p => p.id === id)
  //check to make sure I found a player
  if (player) {
    if (player.level < 10) {
      ++player.level
    }
  }
}
function levelDown(id) {
  let player = players.find(p => p.id === id)
  if (player) {
    if (player.level > 1) {
      --player.level
    }
  }
}
function bonusUp(id) {
  let player = players.find(p => p.id === id)
  if (player) {
    player.bonuses++
  }
}
function bonusDown(id) {
  let player = players.find(p => p.id === id)
  if (player) {
    player.bonuses--
  }
}
function getCombatAbility(player) {
  return player.level + player.bonuses
}

//combat calculator
let openDialogBtn = document.getElementById("combatCalculator")
let closeDialogBtn = document.getElementById("closeCalculator")
let combatCalculator = document.querySelector('.combat-calculator')
let playerCombat = document.querySelector(".player-combat")
let monsterCombat = document.querySelector(".monster-combat")
let playerPlus5Btn = document.getElementById("player-plus5")
let playerMinus5Btn = document.getElementById("player-minus5")
let monsterPlus5Btn = document.getElementById("monster-plus5")
let monsterMinus5Btn = document.getElementById("monster-minus5")
let playerPlus4Btn = document.getElementById("player-plus4")
let playerMinus4Btn = document.getElementById("player-minus4")
let monsterPlus4Btn = document.getElementById("monster-plus4")
let monsterMinus4Btn = document.getElementById("monster-minus4")
let playerPlus3Btn = document.getElementById("player-plus3")
let playerMinus3Btn = document.getElementById("player-minus3")
let monsterPlus3Btn = document.getElementById("monster-plus3")
let monsterMinus3Btn = document.getElementById("monster-minus3")
let playerPlus2Btn = document.getElementById("player-plus2")
let playerMinus2Btn = document.getElementById("player-minus2")
let monsterPlus2Btn = document.getElementById("monster-plus2")
let monsterMinus2Btn = document.getElementById("monster-minus2")
let playerPlus1Btn = document.getElementById("player-plus1")
let playerMinus1Btn = document.getElementById("player-minus1")
let monsterPlus1Btn = document.getElementById("monster-plus1")
let monsterMinus1Btn = document.getElementById("monster-minus1")
//add event listeners to the buttons
openDialogBtn.addEventListener('click', () => {
  combatCalculator.show();
  combatCalculator.open = true;
})
closeDialogBtn.addEventListener('click', () => {
  combatCalculator.close()
  combatCalculator.open = false;
})
playerPlus5Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) + 5
})
playerMinus5Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) - 5
})
monsterPlus5Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) + 5
})
monsterMinus5Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) - 5
})
playerPlus4Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) + 4
})
playerMinus4Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) - 4
})
monsterPlus4Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) + 4
})
monsterMinus4Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) - 4
})
playerPlus3Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) + 3
})
playerMinus3Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) - 3
})
monsterPlus3Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) + 3
})
monsterMinus3Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) - 3
})
playerPlus2Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) + 2
})
playerMinus2Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) - 2
})
monsterPlus2Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) + 2
})
monsterMinus2Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) - 2
})
playerPlus1Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) + 1
})
playerMinus1Btn.addEventListener('click', () => {
  if (playerCombat.value === "") {
    playerCombat.value = 0
  }
  playerCombat.value = parseInt(playerCombat.value) - 1
})
monsterPlus1Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) + 1
})
monsterMinus1Btn.addEventListener('click', () => {
  if (monsterCombat.value === "") {
    monsterCombat.value = 0
  }
  monsterCombat.value = parseInt(monsterCombat.value) - 1
})
