function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
    strokeWeight(5);
    stroke(255);
    
    for(var x = 0; x < mouseX; x+=50){
      for(var y = 0; y < height; y+=50){
        fill(random(255), 0, random(200));
        rect(y, x, 25, 25, 5);
      }
    }
  }