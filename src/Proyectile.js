var Proyectile = function(context, Buildings, damage, x, y, turn) {
  this.buildings = Buildings;
  this.turn = turn;
  this.strenght = 600;
  this.angle = 10;
  this.context = context;
  this.damage = damage; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = x; // parte del personaje y avanza en funcion de la fuerza y dependiendo de los grados
  this.positiony = y; // parte del personaje y avanza en funcion de la fuerza y dependiendo de los grados
  this.accelerationy = 0; // aceleracion del proyectil, depende de la fuerza en la funcion ataque del personaje
  this.accelerationx = 0; // deceleracion del proyectil, tendra un valor fijo mas el viento
  this.img = new Image();
  this.img.src = "./img/bomb.png";
};

Proyectile.prototype.settings = function() {
  var buttons = document.getElementsByTagName("button");
  var inputs = document.getElementsByTagName("input");
  var that = this;
  switch (that.turn) {
    case 1:
      buttons[0].onclick = function() {
        that.strenght = inputs[0].value;
        console.log(that.strenght);
      };
      buttons[1].onclick = function() {
        that.angle = inputs[1].value;
        console.log(that.angle);
      };
      break;
    case 2:
      buttons[3].onclick = function() {
        that.strenght = inputs[2].value;
        console.log(that.strenght);
      };
      buttons[4].onclick = function() {
        that.angle = inputs[3].value;
        console.log(that.angle);
      };
  }

  //Da los datos de angulo y potencia al proyectil
};

Proyectile.prototype.draw = function() {
  //pinta el proyectil

  this.context.drawImage(this.img, this.positionx + 30, this.positiony, 10, 10);
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

Proyectile.prototype.collision = function() {
  var that = this;
  var build = that.buildings.randomBuilding;
  for (var i = 0; i < build.length; i++) {
    var maxx = build[i].positionx + build[i].width;
    var minx = build[i].positionx;
    var maxy = build[i].positiony + build[i].height;
    var miny = build[i].positiony;

    if (
      that.positionx > minx &&
      that.positionx < maxx &&
      that.positiony < maxy &&
      that.positiony > miny
    ) {
      console.log("ola ke ase");
    }
  }
};

Proyectile.prototype.explosion = function() {
  //realiza una animacion en su colision.
};
