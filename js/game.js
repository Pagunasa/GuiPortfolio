// create a new scene
let gameScene = new Phaser.Scene('Game');

// set config of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game and pass the configuration
let game = new Phaser.Game(config);