'use strict';

function Enemy(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = randomX;
  this.y = 0;
  this.velocity = 5;
  this.direction = 1;
  this.color = 'red';
  this.width = 20;
  this.height = 20;
}

Enemy.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
}

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}