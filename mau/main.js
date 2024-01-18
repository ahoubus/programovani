
class Circle {
    constructor(x, y, siz, colr) {
        this.pos = createVector(x, y)
        this.size = siz
        this.colour = colr
    }

    draw() {
        fill(this.colour)
        circle(this.pos.x, this.pos.y, this.size)
    }
}

let circlez = [];

function setup() {
    createCanvas(400, 400);
    background(0)
        
    for (let i = 0; i < 100; i++) {
        let col = random([color(255, 0, 0), color(122, 0, 122)])
        circlez.push(new Circle(random(width), random(height), random(10, 50), col));
    }
}

function draw() {
    for (let circle of circlez) circle.draw();
}