var Building = function(gameArea) {
  //declara las variables que necesitara esta clase
  this.randomBuilding = [];
  this.gameArea = gameArea
  this.context = gameArea.ctx;
  this.img1 = new Image();
  this.img1.src = "./img/mountain1.jpg";
  this.img2 = new Image();
  this.img2.src = "./img/mountain2.jpeg";
  this.img3 = new Image();
  this.img3.src = "./img/mountain3.png";
  this.audioExplosion2= new Audio("./sounds/Explosion2.mp3");
};
//Esta funcion genera edificios con ancho y alto aleatorios y los mete en un array previamente declarado
Building.prototype.random = function() {
  var building;
  var posx = 0;
  for (var i = 0; i < 1100; i = posx) {
    //el primer valor se inicia en x = 0 y a partir de ahi se va actualizando con cada edificio de forma que unos no se pisan con otros.

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

Building.prototype.draw = function() {
  var img;
  this.context.beginPath();

  //crea un bucle que recorre el array de edificios y los pinta a partir de una textura
  for (var i = 0; i < this.randomBuilding.length; i++) {
    var x = this.randomBuilding[i].positionx;
    var y = this.randomBuilding[i].positiony;
    var alto = this.randomBuilding[i].height;
    var ancho = this.randomBuilding[i].width;
    img = this.img3;
    var pat = this.context.createPattern(img, "repeat");

    this.context.fillStyle = pat;

    // Create buildings path
    if (i == 0) {
      this.context.moveTo(x, y);
    }

    this.context.lineTo(x, y);
    this.context.lineTo(x + ancho, y);

    if (i == this.randomBuilding.length - 1) {
      this.context.lineTo(x, 800);
      this.context.lineTo(0, 800);
      this.context.lineTo(0, this.randomBuilding[0].positiony);
    }
  }

  this.context.fill();
};

Building.prototype.damage = function(building, i) {
  building[i].life--;
  if (building[i].life===0){
   this.reduction(building,i)
   this.audioExplosion2.play()
  }

  // restara vida al edificio al colisionar
};

Building.prototype.reduction = function(building, i) {
  this.gameArea.startBigExplosion=true
  building[i].positiony = 750;
  building[i].life = -1;
 


};
