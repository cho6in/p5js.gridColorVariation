

 var tileCountX = 50;
 var tileCountY = 25;

 var h = [];
 var s = [];
 var b = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);

  for (var i = 0; i < tileCountX; i++) {
    h[i] = random(360);
    s[i] = random(100);
    b[i] = random(100);
  }
}

function draw() {

  var counter = 0;

  var currentTileCountX = int(map(mouseX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mouseY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var grX = 0; grX < tileCountX; grX++) {
    for (var grY = 0; grY < tileCountY; grY++) {
      var posX = tileWidth * grX;
      var posY = tileHeight * grY;
      var index = counter % currentTileCountX;

      fill(h[index], s[index], b[index], 100);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}
