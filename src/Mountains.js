var Building = function(context) {
  this.context=context;
  this.life= 3;// 3 para que rompa en 3 golpes o en dos gordos
  this.alto = 0;// se genera aleatoriamente y se guarda para colisiones
  this.ancho = 0;// se genera aleatoriamente y se guarda para colisiones
  this.positionx = 0;// se genera aleatoriamente y se guarda para colisiones
  this.positiony = 0;// se genera aleatoriamentey se guarda para colisiones
};

Building.prototype.random = function() {
  //crear array aleatorio de estos
};

Building.prototype.draw = function() {
  //pintar los edificios
  
  var that = this
  var img = new Image();
  img.onload = function() {
  
var pat=that.context.createPattern(img,"repeat");
that.context.rect(400,400,60,600);
that.context.fillStyle=pat;
that.context.fill();
};img.src="./img/textureMountain.png";
Building.prototype.damage = function() {
 // si se colisiona resta vidas 
};

Building.prototype.reduction = function() {
  // si se queda sin vidas se reduce su alto
 };

Building.prototype.agujero = function() {
 // pinta un agujero en la colision con el proyectil o lineas de rotura
};

}