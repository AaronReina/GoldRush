var Building = function(gameArea) {
  this.randomBuilding = [];
  this.gameArea = gameArea;
  this.context = gameArea.ctx;
  this.img = new Image();
  this.img.src = "./img/mountain.png";
  this.audioExplosion2 = new Audio("./sounds/Explosion2.mp3");
};
//this function makes a random array of objects, with random settings
Building.prototype.random = function() {
  var building;
  var posx = 0;
  for (var i = 0; i < 1100; i = posx) {
    if (this.randomBuilding.length > 0) {
      var lastBuiding = this.randomBuilding.length - 1;
      var lastWidth = this.randomBuilding[lastBuiding].width;
      var lastPositionx = this.randomBuilding[lastBuiding].positionx;
      posx = lastWidth + lastPositionx;
    }
    building = {
      life: 2,
      width: Math.floor(Math.random() * 100 + 70),
      height: Math.floor(Math.random() * 400 + 50),
      positionx: posx
    };
    building.positiony = 800 - building.height;
    this.randomBuilding.push(building);
  }
};
//this function draw the mountains with a pattern
Building.prototype.draw = function() {
  this.context.beginPath();
  for (var i = 0; i < this.randomBuilding.length; i++) {
    var x = this.randomBuilding[i].positionx;
    var y = this.randomBuilding[i].positiony;
    var widthFinal = this.randomBuilding[i].width;
    var pat = this.context.createPattern(this.img, "repeat");
    this.context.fillStyle = pat;
    // Create mountains path
    if (i == 0) {
      this.context.moveTo(x, y);
    }
    this.context.lineTo(x, y);
    this.context.lineTo(x + widthFinal, y);
    if (i == this.randomBuilding.length - 1) {
      this.context.lineTo(x, 800);
      this.context.lineTo(0, 800);
      this.context.lineTo(0, this.randomBuilding[0].positiony);
    }
  }
  this.context.fill();
};
// this function subtract 1 life to the mountain, and calla rection function if the mountain
//life is 0
Building.prototype.damage = function(building, i) {
  building[i].life--;
  if (building[i].life === 0) {
    this.reduction(building, i);
    this.audioExplosion2.play();
  }
};
//this function makes mountains 50 px tall
Building.prototype.reduction = function(building, i) {
  this.gameArea.startBigExplosion = true;
  building[i].positiony = 750;
  building[i].life = -1;
};
