'use strict'


function Game (canvas){

    this.player = null;
    this.enemies = [];
    this.crosses = [];
    this.isGameOver = false;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onGameOver = null;
    
}

Game.prototype.startGame = function () {

    this.player = new Player(this.canvas);
    var loop = () => {
        if(Math.random() > 0.97) {
            var randomX = Math.random() * this.canvas.width - 10;
            var newEnemy = new Enemy(this.canvas, randomX);

            this.enemies.push(newEnemy);
          }
          if(Math.random() > 0.97) {
            var randomX = Math.random() * this.canvas.width - 10;
            var newCross = new Cross(this.canvas, randomX);

            this.crosses.push(newCross);
          }
          this.update();
          this.clear();
          this.draw();
          this.checkCollisions()
          if(!this.isGameOver) {
            requestAnimationFrame(loop)
          } else {
            this.onGameOver();
          }
        };
        loop();
}
Game.prototype.update = function() {
    this.player.move();
    this.enemies.forEach(function(enemy) {
      enemy.move();
    })
    this.crosses.forEach(function(cross) {
        cross.move();
      })
  }

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.player.draw();
    this.enemies.forEach(function(enemy) {
      enemy.draw();
    })
    this.crosses.forEach(function(cross) {
        cross.draw();
      })
  }


Game.prototype.checkCollisions = function() {
    this.enemies.forEach((enemy, index) => {
      var rightLeft = this.player.x + this.player.width >= enemy.x;
      var leftRight = this.player.x <= enemy.x + enemy.width;
      var bottomTop = this.player.y + this.player.height >= enemy.y;
      var topBottom = this.player.y <= enemy.y + enemy.height;
  
      if (rightLeft && leftRight && bottomTop && topBottom) {
        this.enemies.splice(index, 1);
        this.player.lives --;
        if(this.player.lives === 0) {
          this.isGameOver = true;
        }
      }
    })
  }

  Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
  }