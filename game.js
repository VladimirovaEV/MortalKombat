import { getRandom, addZero, createElement, playerWin, createReloadButton, $arenas, $randomButton } from './utils.js';
import { logs, generateLogs, $chat } from './logs.js';
import { HIT, ATTACK, enemyAttack, playerAttack, $formFight } from './attacks.js';
import { Player, player1, player2, createPlayer } from './players.js';

 export class Game {

    init = () => {
      $arenas.appendChild(createPlayer(player1));
      $arenas.appendChild(createPlayer(player2));
      generateLogs('start', player1, player2);
    }
}
