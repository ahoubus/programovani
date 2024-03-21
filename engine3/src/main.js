
let jumpAmount = 0
let player
let enemy
let killBox

class Player extends Component{
    grounded = false;

    start() {
        let collider = this.getComponent(Rigidbody);

        collider.onCollisionEnter = col => {

            if (col.hit.normal.y == -1) {

                if (col.collider.getComponent(Enemy)) {
                    console.log("x");
                    collider.vel.y = -10*60;

                    col.collider.gameObject.destroy();
                    return;
                }

                this.grounded = true;
            }
        }

        collider.onCollisionExit = col => {
            if (col.hit.normal.y == -1) {
                this.grounded = false;
            }
        }
    }

    update() {
        let collider = this.getComponent(Rigidbody);

        if (this.gameObject.pos.y >= killBox.pos.y) {
            this.gameObject.pos.x = width/2;
            this.gameObject.pos.y = height/2;
            collider.vel.y = 0;
        }

        if (this.grounded)
            jumpAmount = 0;

        if (Input.keyJustPressed("w")&& jumpAmount <= 1) {
            
            collider.vel.y = -10*60;
            jumpAmount = jumpAmount + 1;
        }

        if (Input.keyPressed("a"))
            collider.vel.x = -5*60;

        else if (Input.keyPressed("d"))
            collider.vel.x = 5*60;
        else
            collider.vel.x = 0;

        
    }
}

class Enemy extends Component{
    
    start() {
       this.rb = this.getComponent(Rigidbody);

       //collider.onCollisionEnter = col => {
       //     if (col.hit.normal.x == 1 || -1)
       //         this.collider.vel.x = -this.collider.vel.x
       //}
    }

    update() {
        this.rb.vel.x = 3*60;
    }
}

function setup() {
    size(400, 400);
    background(51);

    new GameObject(width / 2, height)
    .addComponent(new Rect(width*2.5, 20,).setColor(0, 0, 122).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(width*1.725, height-10)
    .addComponent(new Rect(20, 20,).setColor(0, 0, 122).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(-width+110, height-10)
    .addComponent(new Rect(20, 20,).setColor(0, 0, 122).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(width - 75, height - 75)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(75, height / 2)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(width - 125, 75)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(-width/3, 50)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(-width, 200)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(width*1.33, height/2 - 33)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    new GameObject(width*1.75, height-100)
    .addComponent(new Rect(100, 30).setColor(122, 0, 0).setStroke())
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))

    killBox = new GameObject(width/2, height*5)
    // .addComponent(new Rect(width*10, 30))

    enemy = new GameObject(width / 3, height / 2)
    .addComponent(new Rect(20, 20,).setColor(0, 122, 0).setStroke(0))
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(1))
    .addComponent(new Enemy)


    player = new GameObject(width / 2, height / 2)
    .addComponent(new Rect(20, 20).setColor(122, 0, 122).setStroke(0))
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(1))
    .addComponent(new Player)

}

function draw() {
    background(51);

    translate(-player.pos.x + width / 2, -player.pos.y + height / 2)
}