const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Kunai',
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
$randomButton.addEventListener('click', function() {
changeHP(player1);
changeHP(player2);
})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));