var Building = function() {
  this.life= 3;// 3 para que rompa en 3 golpes o en dos gordos
  this.alto = 0;// se genera aleatoriamente y se guarda para colisiones
  this.ancho = 0;// se genera aleatoriamente y se guarda para colisiones
  this.positionx = 0;// se genera aleatoriamente y se guarda para colisiones
  this.positiony = 0;// se genera aleatoriamentey se guarda para colisiones
};

Building.prototype.random = function() {
  //crear array aleatorio de estos
};

Building.prototype.pintar = function() {
  //pintar los edificios
};

Building.prototype.damage = function() {
 // si se colisiona resta vidas 
};

Building.prototype.reduction = function() {
  // si se queda sin vidas se reduce su alto
 };

Building.prototype.agujero = function() {
 // pinta un agujero en la colision con el proyectil o lineas de rotura
};

