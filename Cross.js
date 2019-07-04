'use strict';

function Cross(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = randomX;
  this.y = 0;
  this.velocity = 10;
  this.direction = 1;
    this.color = 'red';
//   this.image = new Image();
//   this.image.src = 'https://www.clipartsfree.net/svg/8942-red-apple-download.svg';

  this.width = 60;
  this.height = 60;
}

Cross.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
}

Cross.prototype.draw = function() {
//   this.ctx.fillStyle = this.image.src;

    var cat = new Image();
    cat.src = 'apple.svg';
  this.ctx.drawImage(cat, this.x, this.y, this.width, this.height);
}
