import { createElement } from './utils.js';

  export class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.weapon = props.weapon;
  }
    attack = () => console.log(this.name + ' Fight...');
    changeHP = (num) => {
      this.hp -= num;
        if(this.hp <= 0) {
        this.hp = 0;
      }
      return this.hp;
     }
     elHP = () => {
       const $playerLife = document.querySelector(`.player${this.player} .life`);
       return $playerLife;
     }
     renderHP = () => {
         this.elHP().style.width = this.hp + '%';
         return this.elHP();
     }
  }
export const player1 = new Player({
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Kunai',
})
export const player2 = new Player({
  player: 2,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'Kunai',
})
export const createPlayer = (player) => {
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
