const playerSize = 30;
const playerSpeed = 5;

const enemySize = 30;

var player;

var enemy;

function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2);
    
    // Tomuhle nemusíte rozumět, je to jenom aby byl nepřítel
    // na náhodné pozici, ale vždycky stejně daleko od hráče
    const r = min(width, height)/2 * 0.75;
    const a = random(2*PI);
    var enemyPos = createVector(r*cos(a), r*sin(a));
    enemyPos.add(player);
    //

    enemy = new Enemy(enemyPos)
}

function draw() {
    background(220);

    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    dir.setMag(playerSpeed);
    player.add(dir);

    enemy.update()

    fill(122, 0, 122);
    stroke(150, 0, 0);
    strokeWeight(3)
    circle(player.x, player.y, playerSize);

    enemy.draw()
}