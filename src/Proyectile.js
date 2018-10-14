var Proyectile = function(context, Buildings, Character, turn) {
  this.buildings = Buildings;
  this.turn = turn;
  this.strenght = 1000;
  this.angle = 45;
  this.context = context;
  this.damage = Character.damage; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = Character.positionx; // parte del personaje y avanza en funcion de la fuerza y dependiendo de los grados
  this.positiony = Character.positiony; // parte del personaje y avanza en funcion de la fuerza y dependiendo de los grados
  this.accelerationy = 0; // aceleracion del proyectil, depende de la fuerza en la funcion ataque del personaje
  this.accelerationx = 0; // deceleracion del proyectil, tendra un valor fijo mas el viento
  this.img = new Image();
  this.img.src = "./img/bomb.png";
};



Proyectile.prototype.draw = function() {
  //pinta el proyectil
if (this.turn === 1){
  this.context.drawImage(this.img, this.positionx + 30, this.positiony, 10, 10);}
if (this.turn === 2){
    this.context.drawImage(this.img, this.positionx - 30, this.positiony, 10, 10);}

};
Proyectile.prototype.physics = function() {
  //realiza los calculos y actualiza los valores
  var fuerzareal = this.strenght / 50;
  var porcentajey = this.angle * 1.111111111111111;
  var porcentajex = 100 - porcentajey;
  this.accelerationy = (fuerzareal * porcentajey) / 100;
  this.accelerationx = (fuerzareal * porcentajex) / 100;
};
Proyectile.prototype.updateMove = function(gravity, wind) {
  this.wind = wind / 1000;
  this.gravity = gravity / 100;
  this.accelerationx -= this.wind;
  this.accelerationy -= this.gravity;
  this.positionx += this.accelerationx;
  this.positiony -= this.accelerationy;
};

Proyectile.prototype.collisionBuild = function() {
  var that = this;
  var build = that.buildings.randomBuilding;
  for (var i = 0; i < build.length; i++) {
    var maxxBuild = build[i].positionx + build[i].width;
    var minxBuild = build[i].positionx;
    var maxyBuild = build[i].positiony + build[i].height;
    var minyBuild = build[i].positiony;
    
    if (
      that.positionx > 1000 ||
      that.positiony > 800 
    ) {
      console.log("fuera");
      return true
    }
    else if (
      that.positionx > minxBuild &&
      that.positionx < maxxBuild &&
      that.positiony < maxyBuild &&
      that.positiony > minyBuild
    ) {
      console.log("ola ke ase");
      return true
      
    }

  }
};
// Proyectile.prototype.collisionPlayer = function() {
//   var that = this;
//   var player = that.Character;
//      var maxxPlayer = that.positionx + 40;
//     var minxPlayer = that.positionx;
//     var maxyPlayer = that.positiony + 40;
//     var minyPlayer = that.positiony;


//     if (
//       that.positionx > minxPlayer &&
//       that.positionx < maxxPlayer &&
//       that.positiony < maxyPlayer &&
//       that.positiony > minyPlayer
//     ) 
//     {
//       console.log("ola ke ase tu!!!!!");
//     }
//   }
Proyectile.prototype.explosion = function() {
  //realiza una animacion en su colision.
};
