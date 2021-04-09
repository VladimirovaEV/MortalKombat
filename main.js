const $arenas = document.querySelector('.arenas');
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
  hp: 80,
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

function createPlayer(pers) {
  const $player1 = createElement('div', 'player'+ pers.player);
  const $progressbar = createElement('div','progressbar');
  $player1.appendChild($progressbar);

  const $character = createElement('div', 'character');
  $player1.appendChild($character);

  const $life = createElement('div', 'life');
  $life.style.width = pers.hp +'%';
  $progressbar.appendChild($life);

  const $name = createElement('div', 'name');
  $name.innerText = pers.name;
  $progressbar.appendChild($name);

  const $img = createElement('img');
  $img.src = pers.img;
  $character.appendChild($img);

  return $player1;
}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
