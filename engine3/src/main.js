
let jumpAmount = 0
let player
let enemy
let killBox

class Player extends Component{
    grounded = false;

    start() {
        let collider = this.getComponent(DynamicBoxCollider);

        collider.onCollisionEnter = col => {

            if (col.hit.normal.y == -1) {

                if (col.collider.getComponent(Enemy)) {
                    console.log("x");
                    collider.vel.y = -10;
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
        let collider = this.getComponent(DynamicBoxCollider);

        if (this.gameObject.pos.y >= killBox.pos.y) {
            this.gameObject.pos.x = width/2;
            this.gameObject.pos.y = height/2;
            collider.vel.y = 0;
        }

        if (this.grounded)
            jumpAmount = 0;

        if (Input.keyJustPressed("w") && jumpAmount <= 1) {
            
            collider.vel.y = -10;
            jumpAmount = jumpAmount + 1;
        }

        if (Input.keyPressed("a"))
            collider.vel.x = -5;

        else if (Input.keyPressed("d"))
            collider.vel.x = 5;
        else
            collider.vel.x = 0;

        
    }
}

class Enemy extends Component{
    
    start() {
       this.rb = this.getComponent(DynamicBoxCollider);
    }

    update() {
        this.rb.vel.x = 3;
    }
}

function setup() {
    size(400, 400);
    background(51);

    new GameObject(width / 2, height)
    .addComponent(new RectRenderer(width*2.5, 20, () => {
        fill(0, 0, 122);
        noStroke();
    }))
    .addComponent(new BoxCollider(width *2.5, 20));

    //new GameObject(width / 2, 0)
    //.addComponent(new RectRenderer(width, 20, () => {
    //    fill(0, 0, 122);
    //    noStroke();
    //}))
    //.addComponent(new BoxCollider(width, 20));

    //new GameObject(width, height / 2)
    //.addComponent(new RectRenderer(20, height, () => {
    //    fill(0, 0, 122);
    //    noStroke();
    //}))
    //.addComponent(new BoxCollider(20, height))

    //new GameObject(0, height / 2)
    //.addComponent(new RectRenderer(20, height, () => {
    //    fill(0, 0, 122);
    //    noStroke();
    //}))
    //.addComponent(new BoxCollider(20, height))

    new GameObject(width - 75, height - 75)
    .addComponent(new RectRenderer(100, 30, () => {
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30));

    new GameObject(75, height / 2)
    .addComponent(new RectRenderer(100, 30, () => {
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30))

    new GameObject(width - 125, 75)
    .addComponent(new RectRenderer(100, 30, () => {
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30));

    new GameObject(-width/3, 50)
    .addComponent(new RectRenderer(100, 30, () => {
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30))

    new GameObject(-width, 200)
    .addComponent(new RectRenderer(100, 30, () =>{
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30))

    new GameObject(width*1.33, height/2 - 33)
    .addComponent(new RectRenderer(100, 30, () =>{
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30))

    new GameObject(width*1.75, height-100)
    .addComponent(new RectRenderer(100, 30, () =>{
        fill(122, 0, 0);
        noStroke();
    }))
    .addComponent(new BoxCollider(100, 30))

    killBox = new GameObject(width/2, height*5)
    // .addComponent(new BoxCollider(width*10, 30))

    enemy = new GameObject(width / 3, height / 2)
    .addComponent(new RectRenderer(20, 20, () => {
        fill(0, 122, 0)
    }))
    .addComponent(new DynamicBoxCollider(20, 20))
    .addComponent(new Enemy)


    player = new GameObject(width / 2, height / 2)
    .addComponent(new RectRenderer(20, 20, () => {
        fill(122, 0, 122)
    }))
    .addComponent(new DynamicBoxCollider(20, 20))
    .addComponent(new Player)

}

function draw() {
    background(51);

    translate(-player.pos.x + width / 2, -player.pos.y + height / 2)
}