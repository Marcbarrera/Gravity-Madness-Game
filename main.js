'use strict'

function main (){ 

    var mainElement = document.querySelector('#site-main');

    function buildDom (html){
        mainElement.innerHTML = html;
        return mainElement;

    };

    function createWelcomeScreen (){
        var wellcomeScreen = buildDom(`
        <section>
            <h1>Gravity Madness</h1>
            <button>START BITCH</button>
        </section>
        `);

        var startButton = document.querySelector('button');
        startButton.addEventListener('click',createGameScreen);
    };


    function createGameScreen(){
        var GameScreen = buildDom(`
        <section id="canvas-container">
            <canvas></canvas> 
        </section>
        `);

        var container = document.querySelector('#canvas-container');
        var canvasElement = document.querySelector('canvas');

        canvasElement.width = container.offsetWidth;
        canvasElement.height = container.offsetHeight;
        canvasElement.margin = container.offsetMargin;

        var gameInstance = new Game (canvasElement);

        gameInstance.startGame(); 
        document.addEventListener('keydown', function(event) {
            if(event.key === 'ArrowLeft') {
              gameInstance.player.setDirection(-1);
            } else if(event.key === 'ArrowRight') {
              gameInstance.player.setDirection(+1);
            }
          });
        gameInstance.gameOverCallback(createGameOverScreen);



        //setTimeout(createGameOVerScreen, 2000);


    };


    function createGameOverScreen (){
        var gameOverScreen = buildDom(`
        <section>
        <h1>GAME OVER BITCH</h1>
        <button>Restart</button>
        </section>
        `);

        var restartButton = document.querySelector('button');
        restartButton.addEventListener ('click',createGameScreen);
    };
    createWelcomeScreen();


    function createYouWinScreen (){
        var gameOverScreen = buildDom(`
        <section>
        <h1>GAME OVER BITCH</h1>
        <button>Restart</button>
        </section>
        `);

        var restartButton = document.querySelector('button');
        restartButton.addEventListener ('click',createGameScreen);
    };
    createWelcomeScreen();


};

window.addEventListener('load', main);