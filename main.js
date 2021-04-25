import { getRandom, addZero, createElement, playerWin, createReloadButton, $arenas, $randomButton } from './utils.js';
import { logs, generateLogs, $chat } from './logs.js';
import { HIT, ATTACK, enemyAttack, playerAttack, $formFight, showResult } from './attacks.js';
import { Game } from './game.js';

const game = new Game();
game.init();

