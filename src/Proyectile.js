var Proyectile = function(context,damage,x,y) {
  this.context=context;
  this.damage = damage; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = x;// parte del personaje y avanza en funcion de la fuerza y dependiendo de los grados
  this.positiony = y;// parte del personaje y avanza en funcion de la fuerza y dependiendo de los grados
  this.accelerationy = 0;// aceleracion del proyectil, depende de la fuerza en la funcion ataque del personaje
  this.accelerationx = 0;// deceleracion del proyectil, tendra un valor fijo mas el viento  

  // pueden ser los grados apicados un tanto por ciento de la aceleracion aplicada a x o a y ????? por ejemplo 45 grados 100 fuerza  10 aceleracion a x y 10 a y?????  90 20 y 0 x?????
};


Proyectile.prototype.draw = function() {
  //pinta el proyectil
  var that = this;
  var img = new Image();
  img.onload = function() {
    
   that.context.drawImage(img, that.positionx+60, that.positiony, 20 ,20);
  };
  img.src="./img/bomb.png";

};
Proyectile.prototype.physics = function( fuerza ,angle) {
  //realiza los calculos y actualiza los valores
  var fuerzareal= fuerza/50
  var porcentajey= angle*1.111111111111111
  var porcentajex= 100-porcentajey
  this.accelerationy = fuerzareal*porcentajey/100
  this.accelerationx = fuerzareal*porcentajex/100
 

};
Proyectile.prototype.updateMove = function(gravity,wind) {
  this.wind = wind/1000;
  this.gravity = gravity/100;
  this.accelerationx -= this.wind;
  this.accelerationy -= this.gravity;
  this.positionx+= this.accelerationx;
  this.positiony-= this.accelerationy;
};



Proyectile.prototype.explosion = function() {
  //realiza una animacion en su colision.
};


