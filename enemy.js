function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.toDelete = false;

    this.evaporate = function() {
        this.toDelete = true;
    }

    this.show = function() {
        fill(255, 0, 200);
       ellipse(this.x, this.y, this.r*2, this.r*2); 
    }

}