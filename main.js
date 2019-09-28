'use strict'

function main (){ 
	var mainElement = document.querySelector('#site-main');
	function buildDom (html){
		mainElement.innerHTML = html;
		return mainElement;
	};

	function createWelcomeScreen (){
		var wellcomeScreen = buildDom(`
			<section id="intro-page">
				<h2>WELCOME TO...</h2>
				<h1><span class="title-first">GRAVITY</span> MADNESS</h1>
				<button>START</button>
			</section>
			`);
		var startButton = document.querySelector('button');
		startButton.addEventListener('click',createGameScreen);
	};

	function createGameScreen(){
		var GameScreen = buildDom(`
			<section id="canvas-container">
				<article class="legend">
					<div class="numApples">
						<div class="numApples-img">
							<img src="./src/apple-pixel.png">
						</div>
						<div class="equal-img">
							<img src="./src/equal.png">
						</div>
						<p></p>
					</div>
					<div class="numLives">
						<div class="numLives-img">
							<img src="./src/newton-pixel.png">
						</div>
					<div class="equal-img">
						<img src="./src/equal.png">
					</div>
					<p></p>
					</div>
				</article>
					<canvas></canvas> 
				<article class="floor">
				</article>
			</section>
		`);

		var container = document.querySelector('#canvas-container');
		var legendElement = document.querySelector('.legend');
		var canvasElement = document.querySelector('canvas');
						
			legendElement.width = container.offsetWidth;
			legendElement.height = container.offsetHeight;

			canvasElement.width = container.offsetWidth;
			canvasElement.height = container.offsetHeight;
			canvasElement.margin = container.offsetMargin;

		var gameInstance = new Game (canvasElement);
			gameInstance.startGame(); 
			document.addEventListener('keydown', function(event){
				if(event.key === 'ArrowLeft') {
					gameInstance.player.setDirection(-1);
				} else if (event.key === 'ArrowRight') {
					gameInstance.player.setDirection(+1);
				}
			});

		gameInstance.gameOverCallback(createGameOverScreen);
	};
	
	function createGameOverScreen (){
		if (this.player.lives===0){
			var gameOverScreen = buildDom(`
			<section id="outro-page">
			<h1><span class="title-three">GAME</span>OVER</h1>
			<button>Play Again</button>
			</section>
			`);
			
			var restartButton = document.querySelector('button');
			restartButton.addEventListener ('click',createGameScreen);
		}
		else {
			var gameOverWinScreen = buildDom(`
			<section id="outro-page">
			<h1><span class="title-four">YOU</span>WIN</h1>
			<button>Play Again</button>
			</section>
			`);

			var restartButton = document.querySelector('button');
			restartButton.addEventListener ('click',createGameScreen);
		}     
	};
		
	createWelcomeScreen();
	
};

window.addEventListener('load', main);