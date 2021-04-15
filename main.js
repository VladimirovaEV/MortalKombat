const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Kunai',
<<<<<<< Updated upstream
  attack: function() {
    console.log(this.name + ' Fight...');
  }
=======
  changeHP,
  elHP,
  renderHP,
  attack,
>>>>>>> Stashed changes
};
const player2 = {
  player: 2,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'Kunai',
<<<<<<< Updated upstream
  attack: function() {
    console.log(player2.name + ' Fight...');
  }
=======
  changeHP,
  elHP,
  renderHP,
  attack,
>>>>>>> Stashed changes
};
function attack() {
  console.log(player2.name + ' Fight...');
}
function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if(className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(player) {
  const $player1 = createElement('div', 'player'+ player.player);
  const $progressbar = createElement('div','progressbar');
  $player1.appendChild($progressbar);

  const $character = createElement('div', 'character');
  $player1.appendChild($character);

  const $life = createElement('div', 'life');
  $life.style.width = player.hp +'%';
  $progressbar.appendChild($life);

  const $name = createElement('div', 'name');
  $name.innerText = player.name;
  $progressbar.appendChild($name);

  const $img = createElement('img');
  $img.src = player.img;
  $character.appendChild($img);

  return $player1;
}
<<<<<<< Updated upstream
function changeHP($player) {
  const $playerLife = document.querySelector('.player' + $player.player +' .life' );
  $player.hp -= getRandom(1, 20);
  console.log($player.name + $player.hp);
    $playerLife.style.width = $player.hp + '%';
  if($player.hp <= 0) {
    $randomButton.disabled = true;
    //  $player.hp = 0;
        //$arenas.appendChild(playerLose($player.name))
        if(player1.hp >= 0) {
          $arenas.appendChild(playerWin(player1.name))
        } else if(player2.hp >= 0) {
          $arenas.appendChild(playerWin(player2.name))
        }
    }
=======
function changeHP(num) {
  this.hp -= num;
    if(this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
>>>>>>> Stashed changes
 }
function getRandom(min, max) {
		return Math.ceil(Math.random() * (max - min + 1)) + min;
	}
function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';
  return $loseTitle;
}
function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' wins';
  return $winTitle;
}
<<<<<<< Updated upstream
$randomButton.addEventListener('click', function() {
changeHP(player1);
changeHP(player2);
})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
=======
/*$randomButton.addEventListener('click', function() {
player1.changeHP(20);
player2.changeHP(20);
player1.renderHP();
player2.renderHP();

if(player1.hp === 0 || player2.hp === 0) {
  $randomButton.disabled = true;
  createReloadButton();
}
if(player1.hp === 0 && player1.hp < player2.hp) {
  $arenas.appendChild(playerWin(player2.name));
} else if (player2.hp === 0 && player2.hp < player1.hp) {
  $arenas.appendChild(playerWin(player1.name));
} else if (player1.hp === 0 && player2.hp === 0) {
  $arenas.appendChild(playerWin());
}
})*/
function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  $arenas.appendChild($reloadWrap);
  const $reloadButton = createElement('div', 'button');
  $reloadButton.innerText = 'Restart';
  $reloadWrap.appendChild($reloadButton);
  $reloadButton.addEventListener('click', function() {
    window.location.reload();
  })
}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
}
$formFight.addEventListener('submit', function(e) {
  e.preventDefault();
  const enemy = enemyAttack();

  const attack = {};
  for(let item of $formFight) {
    if(item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    if(item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }
    item.checked = false;
  }
  player1.changeHP(enemy.value);
  player2.changeHP(attack.value);
  player1.renderHP();
  player2.renderHP();
  if(player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
  }
  if(player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin());
  }
})
>>>>>>> Stashed changes
