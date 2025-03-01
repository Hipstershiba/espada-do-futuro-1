class Tile {
    constructor (position_x, position_y, size, index) {
        this.position_x = position_x * size;
        this.position_y = position_y * size;
        this.size = size;
        this.index = index;
        this.color1 = color(0, 0, 0);
        this.color2 = color(0, 0, 0);
        this.color3 = color(0, 0, 0);
        this.weight_modfier = 1;

        this.rotation = floor(random(2)) * HALF_PI;
    }

    display_point() {
        push();
        strokeCap(ROUND)
        translate(this.position_x, this.position_y);
        strokeWeight(max(1, this.size / 1.8) + this.weight_modfier);
        stroke(this.color1);
        this.makePoints();
        strokeWeight(max(1, this.size / 3.2) + this.weight_modfier);
        stroke(this.color2);
        this.makePoints();
        strokeWeight(max(1, this.size / 10) + this.weight_modfier);
        stroke(this.color3);
        this.makePoints();
        pop();
    }

    display_curve() {
        push();
        strokeCap(SQUARE)
        translate(this.position_x + this.size / 2, this.position_y + this.size / 2);
        rotate(this.next_rotation);
        strokeWeight(max(1, this.size / 1.8) + (this.weight_modfier * 3.2));
        stroke(this.color1);
        this.makeCurve();
        strokeWeight(max(1, this.size / 3.2) + (this.weight_modfier * 2));
        stroke(this.color2);
        this.makeCurve();
        strokeWeight(max(1, this.size / 10) + (this.weight_modfier * 1));
        stroke(this.color3);
        this.makeCurve();
        pop();
    }

    // choose a new color palette
    palette_update(color1, color2, color3) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
    }

    // choose a new color palette
    palette_update(color1, color2, color3) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
    }

    stroke_weight_update(weight_modfier) {
        this.weight_modfier = weight_modfier;
    }

    makeCurve() {
        arc(this.size / 2, -this.size / 2, this.size, this.size, PI * 0.5, PI);
        arc(-this.size / 2, this.size / 2, this.size, this.size, -PI * 0.5, 0);
    }

    makePoints(){
        point(0,-this.size/2);
        point(0,this.size/2);
        point(this.size/2,0);
        point(-this.size/2,0); 
    }

    random_rotation () {
        this.next_rotation = floor(random(2)) * HALF_PI;
    }

    control_rotation (value) {
        this.next_rotation = floor(value) * HALF_PI;
        // console.log(this.rotation);
    }

    log () {
        console.log(this.position_x, this.position_y, this.size);
    }
}