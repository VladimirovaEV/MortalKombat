export const attack = () => console.log(player.name + ' Fight...');

export const player1 = {
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
//const { name: namePlayer1, ...restPlayer1 } = player1;

export const player2 = {
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


export function changeHP(num) {
  this.hp -= num;
    if(this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
 }
 export function elHP() {
   const $playerLife = document.querySelector('.player' + this.player +' .life' );
   return $playerLife;
 }
 export function renderHP() {
     this.elHP().style.width = this.hp + '%';
     return this.elHP();
 }
