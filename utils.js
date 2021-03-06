import { Player, player1, player2, createPlayer } from './players.js';

export const $arenas = document.querySelector('.arenas');
export const $randomButton = document.querySelector('.button');
export const getTime = () => {
  const date = new Date();
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
}

export const getRandom = (num) => Math.ceil(Math.random() * num);

export const addZero = (num) => {
  if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if(className) {
    $tag.classList.add(className);
  }
  return $tag;
}
export const playerWin = (name) => {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' wins';
    return $winTitle;
}
export const createReloadButton = () => {
  const $reloadWrap = createElement('div', 'reloadWrap');
  $arenas.appendChild($reloadWrap);
  const $reloadButton = createElement('div', 'button');
  $reloadButton.innerText = 'Restart';
  $reloadWrap.appendChild($reloadButton);
  $reloadButton.addEventListener('click', function() {
    window.location.reload();
  })
}

