// create a new scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function() {
    // load images
    this.load.image('background', 'assets/background.png')
    this.load.image('player', 'assets/player.png')
}

// called once after the preload ends
gameScene.create = function() {
    // create background sprite
    this.add.sprite(0,0, 'background');
}

// set config of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game and pass the configuration
let game = new Phaser.Game(config);