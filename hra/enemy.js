class Enemy {
    constructor(pos) {
        this.pos = pos;
    }

    update() {
        var rid = p5.Vector.sub(player, this.pos);
        rid.setMag(3);
        this.pos.add(rid)
    }

    draw() {
        fill(255, 0, 0);
        circle(this.pos.x, this.pos.y, enemySize);
    }
}