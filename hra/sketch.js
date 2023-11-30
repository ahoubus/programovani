const playerSize = 30;
const playerSpeed = 5;

const enemySize = 30;

var player;

var enemies = [];

var lastMouse = false;

function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2)

    for (var i = 0; i < 10; i++){
        var randomPos = createVector(random(width), random(height));
        var enemy = new Enemy(randomPos);
        enemies.push(enemy);
    }
}

function draw() {
    background(220);

    const mouse = createVector(mouseX, mouseY)
    const ird = p5.Vector.sub(mouse, player)
    ird.setMag(60)
    const lineend = p5.Vector.add(player, ird)

    for (const enemy of enemies) {
        if (p5.Vector.dist(player, enemy.pos) < playerSize/2 + enemySize/2) {
            player.x = random(width);
            player.y = random(height);
        }
        
    }

    // if (enemy.pos.x-enemySize/2 < player.x+playerSize/2 &&
    //     enemy.pos.x+enemySize/2 > player.x-playerSize/2 &&
    //     enemy.pos.y-enemySize/2 < player.y+playerSize/2 &&
    //     enemy.pos.y+enemySize/2 > player.y-playerSize/2) {
    //    x
    // }

    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    dir.setMag(playerSpeed);
    player.add(dir);

    for (var enemy of enemies)
        enemy.update();

    fill(122, 0, 122);
    stroke(150, 0, 0);
    strokeWeight(3)
    circle(player.x, player.y, playerSize);

    for (var enemy of enemies)
        enemy.draw();

    if (player.x > width) {
        player.x = 0
    }    
    if (player.y > height) {
        player.y = 0
    }
    if (player.x < 0) {
        player.x = width
    }
    if (player.y < 0) {
        player.y = height
    }

    if (mouseIsPressed && !lastMouse) {
        line(player.x, player.y, lineend.x, lineend.y)
        // mouseIsPressed = false
    }

    lastMouse = mouseIsPressed;
}
