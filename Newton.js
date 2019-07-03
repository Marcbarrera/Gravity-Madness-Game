'use strict';

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 40;
  this.width = 40;
  this.caughtApples=0;
  this.x = (this.canvas.width / 2) - this.width / 2;
  this.y = canvas.height-90;
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
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}