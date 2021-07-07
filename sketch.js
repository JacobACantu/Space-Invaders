var ship;
var enemies = [];
var drops = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    enemies[i] = new Enemy(i*80+80, 60);
  }
}

function draw() {
  background(51);
  ship.show();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < enemies.length; j++) {
      if (drops[i].hits(enemies[j])) {
        enemies[j].evaporate();
        drops[i].evaporate();
      }
  }

}
  
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].show();
}

for (var i = 0; i < drops.length; i++) {
  if (drops[i].toDelete) {
    drops.splice(i, 1);
  }
}

for (var j = 0; j < enemies.length; j++) {
  if(enemies[j].toDelete) {
    enemies.splice(j,1);
  }
}




}

function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW)
    ship.move(-1);
}
 