var Building = function(context) {
  //declara las variables que necesitara esta clase
  this.randomBuilding = [];
  this.context = context;
  this.img = new Image();
  this.img.src = "./img/textureMountain.png";
};
//Esta funcion genera edificios con ancho y alto aleatorios y los mete en un array previamente declarado
Building.prototype.random = function() {
  for (var i = 0; i < 1100; i = posx) {
    //el primer valor se inicia en x = 0 y a partir de ahi se va actualizando con cada edificio de forma que unos no se pisan con otros.
    var posx = 0;
    if (this.randomBuilding.length > 0) {
      var lastBuiding = this.randomBuilding.length - 1;
      var lastWidth = this.randomBuilding[lastBuiding].width;
      var lastPositionx = this.randomBuilding[lastBuiding].positionx;
      posx = lastWidth + lastPositionx;
    }
    var building = {
      life: 3,
      width: Math.floor(Math.random() * 100 + 70),
      height: Math.floor(Math.random() * 400 + 50),
      positionx: posx
    };
    building.positiony = 800 - building.height;
    this.randomBuilding.push(building);
  }
};

Building.prototype.draw = function() {
  //crea un bucle que recorre el array de edificios y los pinta a partir de una textura
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
    // restara vida al edificio al colisionar
  };

  Building.prototype.reduction = function() {
    // restara altura al edificio cuando pierda vida y las repondra
  };

  Building.prototype.agujero = function() {
    // pinta un agujero en la colision con el proyectil o lineas de rotura
  };
};
