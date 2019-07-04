'use strict';

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 100;
  this.width = 100;
  this.caughtApples=0;
  this.x = (this.canvas.width / 2) - this.width / 2;
  this.y = canvas.height-100;
  this.lives = 3;
  this.velocity = 3;
  this.direction = 0;
  this.color = 'blue';
}

Player.prototype.move = function() {
    if (this.x<0 ){
        this.x=0;
        this.direction=0;
  
    }
    else if (this.x+40>this.canvas.width ){
        this.x=this.canvas.width-40;
        this.direction=0;
    }
    else{
  this.x = this.x + this.direction * this.velocity;
    }
}

Player.prototype.draw = function() {
    var newt = new Image();
    newt.src = 'newton.png';
  this.ctx.drawImage(newt, this.x, this.y, this.width, this.height);
}

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}