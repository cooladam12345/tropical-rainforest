// Game Intro
game.splash("Find the animals and plants, then use your camera (space) to take a photo! Take a photo of the princess for more info!")
info.setScore(0)
info.startCountdown(100)
// Sprites
let snake = sprites.create(img`
    . . . . c c c c c c . . . . . .
    . . . c 6 7 f 7 7 6 c . . . . .
    . . c 7 f 7 f 7 f 7 7 c . . . .
    . c 6 7 f 7 7 7 f 7 7 6 c . . .
    . c 7 c 6 6 6 6 c 7 f 7 c . . .
    . f 7 6 f 6 6 f 6 7 f 7 f . . .
    . f 7 7 7 7 7 7 7 7 7 7 f . . .
    . . f 7 f 7 7 6 c f 7 6 f c . .
    . . . f c c c c 7 f 6 f 5 f c .
    . . c 7 2 f 7 7 6 c f 5 f 5 5 c
    . c 7 f 2 f 7 c f c 5 5 5 6 c c
    c 1 1 1 1 7 5 f c c 5 f 5 c . .
    f 1 1 f 1 f f 5 c 5 5 f 5 f . .
    f 6 1 f 1 f f 5 5 f 5 5 c f . .
    . f 6 1 1 1 1 1 1 f 5 5 f . . .
    . . c c c c c c c c c f . . . .
`, SpriteKind.Enemy)
let player = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let jaguar = sprites.create(img`
    . . . . . . . . . . . . . .
    e e e . . . . e e e . . . .
    c 4 4 c . . c 4 f c . . . .
    c f 4 4 f f 4 4 4 c . . . .
    c 4 f 4 4 b 4 f 4 c . . . .
    f 4 4 4 4 4 4 4 4 f . . . .
    e 4 4 4 4 4 4 4 4 e . . . .
    e 4 f 4 4 4 4 f 4 e . b f b
    f 4 4 f 4 4 f 4 4 f . f 4 f
    f 4 4 4 b b 4 4 4 4 f f 4 f
    . f 4 4 4 4 4 f 4 f 4 f 4 f
    . f 4 4 f 4 4 4 4 f f f f .
    . . f 4 4 4 f 4 f . . . . .
    . . . f f f f f f . . . . .
`, SpriteKind.Enemy)
let tocoToucan = sprites.create(img`
    ..........bfb.....
    .........bfb......
    ......bbbffb......
    .....bbfffffb.....
    ....bbf81fffdf....
    ....bff1fffd4444..
    ....bff8fbdd444444
    .bbbffffff44444444
    bffffffff4444444..
    bfffffffff111b....
    cffffffffff111b...
    cfffffffffffffb...
    .cfffffffffffdb...
    ..cffffffffffb....
    ...ccccccccbb.....
    .....e....e.......
    ....fff..fff......
    ....f.f..f.f......
`, SpriteKind.Enemy)
let helperPrincess = sprites.create(img`
    . . . . . f f 4 4 f f . . . . .
    . . . . f 5 4 5 5 4 5 f . . . .
    . . . f e 4 5 5 5 5 4 e f . . .
    . . f b 3 e 4 4 4 4 e 3 b f . .
    . . f 3 3 3 3 3 3 3 3 3 3 f . .
    . f 3 3 e b 3 e e 3 b e 3 3 f .
    . f 3 3 f f e e e e f f 3 3 f .
    . f b b f b f e e f b f b b f .
    . f b b e 1 f 4 4 f 1 e b b f .
    f f b b f 4 4 4 4 4 4 f b b f f
    f b b f f f e e e e f f f b b f
    . f e e f b d d d d b f e e f .
    . . e 4 c d d d d d d c 4 e . .
    . . e f b d b d b d b b f e . .
    . . . f f 1 d 1 d 1 d f f . . .
    . . . . . f f b b f f . . . . .
`, SpriteKind.Food)
helperPrincess.setPosition(0, 100)
// tilemap

tiles.setCurrentTilemap(tilemap`forest`)

// Sprite properties



// snake/Green anaconda

snake.setVelocity(50, 50)
snake.setBounceOnWall(true)
snake.setPosition(randint(50, 150), randint(50, 150))

// jaguar

jaguar.setVelocity(100, 100)
jaguar.setBounceOnWall(true)
jaguar.setPosition(randint(50, 150), randint(50, 150))

// Toco Toucan
let toco = 0
tocoToucan.setVelocity(500, 500)
tocoToucan.setBounceOnWall(true)
tocoToucan.setPosition(randint(50, 150), randint(50, 150))
game.onUpdateInterval(2000, function() {
    if (toco == 0) {
        tocoToucan.setVelocity(0, 0)
        toco++
    } else {
        tocoToucan.setVelocity(200, 200)
        toco--
    }
    
})
// camera

pause(2000)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let cameraFlash = sprites.createProjectileFromSprite(img`
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111
    `, player, randint(-50, 50), randint(-50, 50))
    cameraFlash.setBounceOnWall(true)
    pause(1000)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    game.showLongText("You got an animal/plant!", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    game.showLongText("I heard you need help, well ill tell you alot.", DialogLayout.Bottom)
    game.showLongText("The jaguar moves fast, the green anaconda is slow. And the Toco Toucan stops, then flies very fast.", DialogLayout.Bottom)
    game.showLongText("Plants are different, they always move secretly. Each plant dissapears then reappears somehere else every 10 seconds.", DialogLayout.Bottom)
    game.showLongText("Goodbye and good luck.", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
})
// player

controller.moveSprite(player, 100, 60)
scene.cameraFollowSprite(player)
