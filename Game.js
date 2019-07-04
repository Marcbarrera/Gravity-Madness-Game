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
        if(Math.random() > 0.98) {
            var randomX = Math.random() * this.canvas.width - 10;
            var newEnemy = new Enemy(this.canvas, randomX);

            this.enemies.push(newEnemy);
          }
          if(Math.random() > 0.98) {
            var randomX = Math.random() * this.canvas.width - 10;
            var newCross = new Cross(this.canvas, randomX);

            this.crosses.push(newCross);
          }
          this.update();
          this.clear();
          this.draw();
          this.checkEnemisInScreen();
          this.checkCollisions();
          if(!this.isGameOver) {
            requestAnimationFrame(loop)
          } 
          
        
          else {
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

      var numeroApples = document.querySelector('.numApples p');
      numeroApples.innerHTML=+this.player.caughtApples;

      var numeroDeVidas = document.querySelector('.numLives p');
      numeroDeVidas.innerHTML="lives = "+this.player.lives;
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
    this.crosses.forEach((cross, index) => {
        var rightLeft1 = this.player.x + this.player.width >= cross.x;
        var leftRight1 = this.player.x <= cross.x + cross.width;
        var bottomTop1 = this.player.y + this.player.height >= cross.y;
        var topBottom1 = this.player.y <= cross.y + cross.height;
    
        if (rightLeft1 && leftRight1 && bottomTop1 && topBottom1) {
          this.crosses.splice(index, 1);
          this.player.caughtApples ++;
        if(this.player.caughtApples ===10) {
             this.isGameOver = true;
      }
        }
      })

    
  }

  Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
  }

  Game.prototype.checkEnemisInScreen = function() {

      this.enemies.forEach((enemy, index) => {
        if (enemy.y > this.canvas.height) {
            this.enemies.splice(index, 1);
        }
      })

    this.crosses.forEach((cross, index) => {
        if (cross.y > this.canvas.height) {
            this.crosses.splice(index, 1);
        }
    })
}
