// create a new scene
let gameScene = new Phaser.Scene('Game');

let levels = { sizeX: 10, sizeY: 10, tileSizeX: 32, tileSizeY: 32 };
let tileSize = [32, 32];

// load assets
gameScene.preload = function() {
    // load images
    this.load.image('atlas', 'assets/atlas.png');
}

function createMapData(level) {
    let data = [], tiles;

    for(let i = 0; i < level.sizeX; ++i) {
        
        tiles = [];

        for(let j = 0; j < level.sizeY; ++j)
            tiles[j] = Phaser.Math.Between(0, 1);
        
        data[i] = tiles;
    }

    return data;
}

// called once after the preload ends
gameScene.create = function() {
    // create the level 
    let dataMap =  createMapData(levels);
    
    // prepare the tilemap (atlas)
    let map = this.make.tilemap({ key: 'map', tileWidth: levels.tileSizeX, tileHeight: levels.tileSizeY });
    let tileset = map.addTilesetImage('MapAtlas', 'atlas', levels.tileSizeX, levels.tileSizeY); 
    
    this.groundLayer = map.createBlankLayer('Ground', tileset);

    let data;

    for(let i = 0; i < dataMap.length; ++i) {
        data = dataMap[i];
        for(let j = 0; j < data.length; ++j) 
            this.groundLayer.putTileAt(data[j], level.tileSizeX * j, level.tileSizeY * i);
    }

    //var sprites = map.createFromTiles(indexes, replacements, spriteConfig);
}


gameScene.update = function() {
    
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
