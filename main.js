const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Kunai',
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP,
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};
const player2 = {
  player: 2,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'Kunai',
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP,
  attack: function() {
    console.log(player2.name + ' Fight...');
  }
};
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
function changeHP(num) {
  this.hp -= getRandom(num);
    if(this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
 }

function elHP() {
  const $playerLife = document.querySelector('.player' + this.player +' .life' );
  return $playerLife;
}
function renderHP() {
    this.elHP().style.width = this.hp + '%';
    return this.elHP();
}

function getRandom(num) {
		return Math.ceil(Math.random() * num);
	}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  if(name) {
    $winTitle.innerText = name + ' wins';
  } else {
    $winTitle.innerText = 'draw';
  }
    return $winTitle;
}
$randomButton.addEventListener('click', function() {
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
})
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
