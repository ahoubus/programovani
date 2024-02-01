
class Circle {


    constructor(x, y, siz, colr) {
        this.pos = createVector(x, y)
        this.vel = createVector(random(30), 0);
        this.size = siz
        this.colour = colr
    }

    draw() {
        fill(this.colour)
        textSize(this.size)
        text("B",this.pos.x, this.pos.y,)
    }


    applyForce(f) {
        let scaledForce = f.copy()
        scaledForce.div(this.size / 50)
        this.vel.add(scaledForce);
    }



    update() {
        this.applyForce(gravity)

        this.pos.add(this.vel);


        if (this.pos.y > height - 10) {
            this.pos.y = height - 10;
            this.vel.y = -this.vel.y*0.98;
        }
        if (this.pos.x > width - 10) {
            this.pos.x = width - 10;
            this.vel.x = -this.vel.x*0.98;
        }
        if (this.pos.x < 0 + 10) {
            this.pos.x = 0 + 10;
            this.vel.x = this.vel.x*-0.88;
        }

        stroke (255)
        line (850, 200, 1100, 200)
        line (1100, 200, 1100, 350)
        line (1100, 350, 850, 350)
        line (850, 350, 850, 200)
        noStroke();
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

    keyCode = 32
    if (keyIsPressed) {
        gravity.y = -0.5
    }    
    if (gravity.y == -0.5){
        gravity.y = gravity.y-0.01
    }
    
    if (!keyIsPressed) {
        gravity.y = 0.5
    }
}

//function keyPressed() {
 //   if (keyCode == 32)
//        gravity.y = -gravity.y
//    if (keyCode == 83)
//       gravity.y = gravity.y/2
//}