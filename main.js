const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Kunai',
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};
const player2 = {
  name: 'Sonya',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'Kunai',
  attack: function() {
    console.log(player2.name + ' Fight...');
  }
};

function createPlayer(player, pers) {
  const $player1 = document.createElement('div');
  $player1.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = pers.hp +'%';
  $progressbar.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = pers.name;
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.src = pers.img;
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1);
}
createPlayer('player1', player1);
createPlayer('player2', player2);
