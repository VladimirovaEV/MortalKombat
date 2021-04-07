const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: ' ',
  weapon: 'Kunai',
  attack: function() {
    console.log(name + 'Fight...');
  }
};
const player2 = {
  name: 'Sonya',
  hp: 80,
  img: ' ',
  weapon: 'Kunai',
  attack: function() {
    console.log(name + 'Fight...');
  }
};
function createPlayer() {
  const $player1 = document.createElement('div');
  $player1.classList.add('player1');
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  const $character = document.createElement('div');
  $character.classList.add('character');
  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';
  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = 'Scorpion';
  const $img = document.createElement('img');
  $img.scr = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
  $character.appendChild($img);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  const $arenas = querySelector('.arenas');
  $arenas.appendChild($player1);
}
createPlayer('player1', 'Scorpion', 100);
createPlayer('player2', 'Sonya', 80);
