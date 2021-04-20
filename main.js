import { getRandom, addZero, createElement, playerWin, createReloadButton, $arenas } from './utils.js';
import { logs, generateLogs, $chat } from './logs.js';
import { player1, player2, attack, changeHP, elHP, renderHP } from './players.js';
import { HIT, ATTACK, enemyAttack, playerAttack, $formFight } from './attacks.js';

const $randomButton = document.querySelector('.button');
const { name: namePlayer1, ...restPlayer1 } = player1;
const { name: namePlayer2, ...restPlayer2 } = player2;

const createPlayer = (player) => {
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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
generateLogs('start', player1, player2);

const showResult = () => {
  if(player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
    generateLogs('end', player1, player2);
  }
  if(player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(namePlayer2));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(namePlayer1));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin());
    generateLogs('draw');
  }
}

$formFight.addEventListener('submit', function(e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();
  if(player.defence !== enemy.hit) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs('hit', player2, player1, enemy.value);
} else {
  generateLogs('defence', player1, player2);
}
  if(enemy.defence !== player.hit) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs('hit', player1, player2, player.value);
  } else {
    generateLogs('defence', player2, player1);
  }
  showResult();
//    console.log(player.value + ' ' + player1.hp);
//   console.log(enemy.value + ' ' + player2.hp);
})
