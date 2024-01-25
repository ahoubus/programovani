
class Circle {


    constructor(x, y, siz, colr) {
        this.pos = createVector(x, y)
        this.vel = createVector();
        this.size = siz
        this.colour = colr
    }

    draw() {
        fill(this.colour)
        textSize(this.size)
        text("B",this.pos.x, this.pos.y,)
    }


    applyForce(f) {
        this.vel.add(f);
    }



    update() {
        this.applyForce(gravity)

        this.pos.add(this.vel);


        if (this.pos.y > height - 10) {
            this.pos.y = height - 10;
            this.vel.y = -this.vel.y*0.98;
        }
        
    }
}

let circlez = [];

let gravity;

function setup() {
    createCanvas(1520, 675);
    
        
    for (let i = 0; i < 300; i++) {
        let col = random([color(255, 0, 0), color(122, 0, 122)])
        circlez.push(new Circle(random(width), random(height), random(10, 50), col));
    }

    gravity = createVector(0, 0.5)
}

function draw() {
    background(0)
    for (let circle of circlez) circle.update();
    for (let circle of circlez) circle.draw();
}