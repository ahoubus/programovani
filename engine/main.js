
class Player extends Component{
    start() {

    }

    update() {
        let collider = this.getComponent(DynamicBoxCollider);

        if (Input.keyJustPressed("w"))
            collider.vel.y = -10;

        if (Input.keyPressed("a"))
            collider.vel.x = -5;

        else if (Input.keyPressed("d"))
            collider.vel.x = 5;
        else
            collider.vel.x = 0;
    }
}

function setup() {
    createCanvas(400, 400);
    background(51);

    new GameObject(width / 2, height)
    .addComponent(new RectRenderer(width, 20, () => {
        fill(0, 0, 122);
        noStroke();
    }))
    .addComponent(new BoxCollider(width, 20));

    new GameObject(width / 2, 0)
    .addComponent(new RectRenderer(width, 20, () => {
        fill(0, 0, 122);
        noStroke();
    }))
    .addComponent(new BoxCollider(width, 20));

    new GameObject(width, height / 2)
    .addComponent(new RectRenderer(20, height, () => {
        fill(0, 0, 122);
        noStroke();
    }))
    .addComponent(new BoxCollider(20, height))

    new GameObject(0, height / 2)
    .addComponent(new RectRenderer(20, height, () => {
        fill(0, 0, 122);
        noStroke();
    }))
    .addComponent(new BoxCollider(20, height))

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

    new GameObject(width / 2, height / 2)
    .addComponent(new RectRenderer(20, 20, () => {
        fill(122, 0, 122)
    }))
    .addComponent(new DynamicBoxCollider(20, 20))
    .addComponent(new Player)

    Engine.start();
}

function draw() {
    background(51);

    Engine.update();
}