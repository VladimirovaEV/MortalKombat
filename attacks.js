import { getRandom, addZero, createElement, playerWin, createReloadButton, $arenas, $randomButton } from './utils.js';
import { logs, generateLogs, $chat } from './logs.js';
import { Player, player1, player2, createPlayer } from './players.js';
export const $formFight = document.querySelector('.control');

export const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
 export const ATTACK = ['head', 'body', 'foot'];

 export const enemyAttack = () => {
   const hit = ATTACK[getRandom(3) - 1];
   const defence = ATTACK[getRandom(3) - 1];
   return {
     value: getRandom(HIT[hit]),
     hit,
     defence,
   }
 }

 export const playerAttack = () => {
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
   return attack;
 }
 export const showResult = () => {
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

