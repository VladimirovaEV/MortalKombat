<<<<<<< Updated upstream
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');
//const date = new Date();
//const gameDate = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};
const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Kunai',
  changeHP,
  elHP,
  renderHP,
  attack,
};
const player2 = {
  player: 2,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'Kunai',
  changeHP,
  elHP,
  renderHP,
  attack,
};
function attack() {
  console.log(player2.name + ' Fight...');
}
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if(className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(player) {
=======
import { getRandom, addZero, createElement, playerWin, createReloadButton, $arenas, $randomButton } from './utils.js';
import { logs, generateLogs, $chat } from './logs.js';
import { HIT, ATTACK, enemyAttack, playerAttack, $formFight, showResult } from './attacks.js';
import { Game } from './game.js';

const game = new Game();
game.init();

/*const createPlayer = (player) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
}

function changeHP(num) {
  this.hp -= num;
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
  $winTitle.innerText = name + ' wins';
  return $winTitle;
}
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
generateLogs('start', player1, player2);


function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
}
function playerAttack() {
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
function showResult() {
=======
}*/

/*const showResult = () => {
>>>>>>> Stashed changes
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

function generateLogs(type, player1, player2, damage) {
  const date = new Date();
  const gameDate = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
  let text;
  let el;
  switch (type) {
    case 'start':
    text = logs[type].replace('[time]', gameDate).replace('[player1]', player1.name).replace('[player2]', player2.name);
    el = `<p>${text}</p>`;
    break;
    case 'hit':
    text = logs[type][getRandom(logs[type].length-1)].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name);
    el = `<p>${gameDate} ${text} -${damage} [${player2.hp} / 100]</p>`;
   break;
    case 'defence':
    text = logs[type][getRandom(logs[type].length-1)].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name);
    el = `<p>${gameDate} ${text}</p>`;
    break;
    case 'darw':
    text = logs[type];
    el = `<p>${text}</p>`;
    break;
    case 'end':
    text = logs[type][getRandom(logs[type].length-1)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
    el = `<p>${text}</p>`;
    break;
    default:
    alert('Что-то пошло не так...');
  }
  //const el = `<p>${gameDate} ${text}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

$formFight.addEventListener('submit', function(e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();
  if(player.hit !== enemy.defence) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs('hit', player2, player1, enemy.value);
} else {
  generateLogs('defence', player1, player2);
}
  if(enemy.hit !== player.defence) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs('hit', player1, player2, player.value);
  } else {
    generateLogs('defence', player2, player1);
  }
  showResult();
<<<<<<< Updated upstream
//  console.log(enemy.value);
//  console.log(player.value);

})
=======
//    console.log(player.value + ' ' + player1.hp);
//   console.log(enemy.value + ' ' + player2.hp);
})*/

/*const init = () => {
  $arenas.appendChild(createPlayer(player1));
  $arenas.appendChild(createPlayer(player2));
  generateLogs('start', player1, player2);
}
init();*/
>>>>>>> Stashed changes
