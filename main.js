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
        var canvasElement = document.querySelector('canvas');
        var container = document.querySelector('#canvas-container');

        canvasElement.width = container.offsetWidth;
        canvasElement.height = container.offsetHeight;
        canvasElement.margin = container.offsetMargin;

        setTimeout(createGameOVerScreen, 3000);


    };


    function createGameOVerScreen (){
        var createGameOVerScreen = buildDom(`
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