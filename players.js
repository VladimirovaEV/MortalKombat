import { createElement } from './utils.js';

  export class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;

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
       const $playerLife = document.querySelector(`.${this.selector} .life`);
       return $playerLife;
     }
     renderHP = () => {
         this.elHP().style.width = this.hp + '%';
         return this.elHP();
     }
       createPlayer = () => {
       const $player = createElement('div', this.selector);
       const $progressbar = createElement('div','progressbar');
       $player.appendChild($progressbar);

       const $character = createElement('div', 'character');
       $player.appendChild($character);

       const $life = createElement('div', 'life');
       $life.style.width = this.hp +'%';
       $progressbar.appendChild($life);

       const $name = createElement('div', 'name');
       $name.innerText = this.name;
       $progressbar.appendChild($name);

       const $img = createElement('img');
       $img.src = this.img;
       $character.appendChild($img);

       const $root = document.querySelector(`.${this.rootSelector}`);
       $root.appendChild($player);

       return $player;
     }
  }
