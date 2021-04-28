import { getRandom, addZero, createElement, playerWin, createReloadButton, $arenas, $randomButton } from './utils.js';
import { logs, generateLogs, $chat } from './logs.js';
import { HIT, ATTACK, enemyAttack, playerAttack, $formFight } from './attacks.js';
import { Player } from './players.js';

let player1;
let player2;

class Game  {
  getPlayers = async() => {
    const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
    return body;
  }
  start = async () => {
    const players = await this.getPlayers();
    const p1 = players[getRandom(players.length)-1];
    const p2 = players[getRandom(players.length)-1];
    player1 = new Player({
      ...p1,
      player: 1,
      rootSelector: 'arenas',
    });
    player2 = new Player({
      ...p2,
      player: 2,
      rootSelector: 'arenas',
    });
    player1.createPlayer();
    player2.createPlayer();

    generateLogs('start', player1, player2);
  }
}

const game = new Game();
game.start();

const showResult = () => {
   if(player1.hp === 0 || player2.hp === 0) {
     $randomButton.disabled = true;
     createReloadButton();
     generateLogs('end', player1, player2);
   }
   if(player1.hp === 0 && player1.hp < player2.hp) {
     $arenas.appendChild(playerWin(player2.name));
   } else if (player2.hp === 0 && player2.hp < player1.hp) {
     $arenas.appendChild(playerWin(player1.name));
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
   generateLogs('defence', player2, player1);
 }
   if(enemy.defence !== player.hit) {
     player2.changeHP(player.value);
     player2.renderHP();
     generateLogs('hit', player1, player2, player.value);
   } else {
     generateLogs('defence', player1, player2);
   }
   showResult();
//   console.log(player.value + ' ' + player1.hp);
//   console.log(enemy.value + ' ' + player2.hp);
})
