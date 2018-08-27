// Start of the Enemy class
class Enemy {
  constructor(x,y) {
      this.sprite = 'images/enemy-bug.png';
      this.x = x;
      this.y = y;
      this.speed = 100 + Math.floor(Math.random()*250);// randomize the speed addtion of 100 to increase the value
  }

  // update method
  update(dt) {

    //ensure the game runs at the same speed for all computers.
     this.x += this.speed * dt;
     if(this.x > 505){
       this.x = 0;
       this.speed = 100 + Math.floor(Math.random()*200);// randomize the speed addtion of 100 to increase the value
     }
     // check the collison betweeen enemies and player thanks for https://www.youtube.com/watch?v=7PHhRrjgTDA
     if (player.x < this.x + 80 &&
          player.x + 80 > this.x &&
          player.y < this.y + 60 &&
          60 + player.y > this.y) {
          player.x = 200;
          player.y = 400;
      };
  }

  // Draw the enemy on the screen, required method for game
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  
}

// start of the Player Class
class Player{
  constructor(x,y){
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
  }

  update(dt){
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // recieve the the value of each key property from event listener
  handleInput(keyPress){
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 100;
    };
    if(keyPress == 'right' && this.x < 400 ){
        this.x += 100;
    };
    if(keyPress == 'up' && this.y > 0 ){
        this.y -= 83;
    };
    if(keyPress == 'down' && this.y < 400 ){
        this.y += 83;
    };
    if(this.y < 0){
      setTimeout(() => {this.x = 200; this.y = 400;}, 500)
    };
  }

}

// the enemies objects
var allEnemies = [new Enemy(0,60),new Enemy(0,140),new Enemy(0,220)];
var player = new Player();

// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
