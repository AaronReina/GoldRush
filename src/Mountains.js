var Building = function(context) {
  this.randomBuilding = [];
  this.context = context;
  this.img= new Image();
this.img.src = "./img/textureMountain.png";
};

Building.prototype.random = function() {
  for (var i = 0; i < 1100; i = posx) {
    var posx = 0;
    if (this.randomBuilding.length > 0) {
      var lastBuiding = this.randomBuilding.length - 1;
      var lastWidth = this.randomBuilding[lastBuiding].width;
      var lastPositionx = this.randomBuilding[lastBuiding].positionx;
      posx = lastWidth + lastPositionx;
    }
    var mountain = {
      life: 3,
      width: Math.floor(Math.random() * 120 + 60),
      height: Math.floor(Math.random() * 400 + 50),
      positionx: posx
    };
    mountain.positiony = 800 - mountain.height;
    this.randomBuilding.push(mountain);
  }
  //crear array aleatorio de estos
};

Building.prototype.draw = function() {
  //pintar los edificios




    for (var i = 0; i < this.randomBuilding.length; i++) {
      var pat = this.context.createPattern(this.img, "repeat");
      var x = this.randomBuilding[i].positionx;
      var y = this.randomBuilding[i].positiony;
      var alto = this.randomBuilding[i].height;
      var ancho = this.randomBuilding[i].width;

      this.context.rect(x, y, ancho, alto);
      this.context.fillStyle = pat;
      this.context.fill();
    }
  

  Building.prototype.damage = function() {
    // si se colisiona resta vidas
  };

  Building.prototype.reduction = function() {
    // si se queda sin vidas se reduce su alto
  };

  Building.prototype.agujero = function() {
    // pinta un agujero en la colision con el proyectil o lineas de rotura
  };
};
