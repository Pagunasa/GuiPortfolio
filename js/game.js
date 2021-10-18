// create a new scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function() {
    // load images
    this.load.image('background', 'assets/background.png')
    this.load.image('player', 'assets/player.png')
    this.load.image('dragon', 'assets/dragon.png')
}

// called once after the preload ends
gameScene.create = function() {
    // create background sprite
    let bg = this.add.sprite(0,0, 'background');
    
    // change the origin
    bg.setOrigin(0,0);

    // adding the player
    let player = this.add.sprite(70, 180, 'player');
    player.setScale(0.5, 0.5);

    let dragon = this.add.sprite(250, 180, 'dragon');
    dragon.flipX = true;
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
