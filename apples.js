'use strict';

function Enemy(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = randomX;
  this.y = 0;
  this.velocity = 5;
  this.direction = 1;
  this.color = 'green';
  this.width = 90;
  this.height = 90;
}

Enemy.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
}

Enemy.prototype.draw = function() {
    var cruz = new Image();
    cruz.src = 'cross.png';
  this.ctx.drawImage(cruz, this.x, this.y, this.width, this.height);
}