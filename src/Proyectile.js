var Proyectile = function(MyGameArea, Buildings, Character, turn) {
  //Se declaran todas las variabes que utilizan el proyectil y sus metodos.
  this.impactBuild = false;
  this.impactPlayer1 = false;
  this.impactPlayer2 = false;
  this.buildings = Buildings;
  this.turn = turn;
  this.strenght = 10;
  this.angle = 90;
  this.myGameArea = MyGameArea;
  this.context = MyGameArea.ctx;
  this.damage = Character.damage;
  this.positionx = Character.positionx;
  this.positiony = Character.positiony;
  this.accelerationy = 0;
  this.accelerationx = 0;
  this.img = new Image();
  this.img.src = "./img/bomb.png";
};
//Esta funcion pinta el proyectil y le asigna un punto de salida en funcion del jugador.
Proyectile.prototype.draw = function() {
  if (this.turn === 1) {
    this.context.drawImage(this.img, this.positionx, this.positiony, 10, 10);
    console.log("posicion x  " + this.positionx);
    console.log("posicion y  " + this.positiony);
  }
  if (this.turn === 2) {
    this.context.drawImage(this.img, this.positionx, this.positiony, 10, 10);
    console.log(this.positionx);
    console.log(this.positiony);
    console.log("pintado dos fuciona");
  }
};
//esta funcion actualiza las fisicas del proyectil y cambia el valor de x a negativo para el turno del player 2
Proyectile.prototype.physics = function() {
  var fuerzareal0 = this.strenght / 20;
  var porcentajey0 = this.angle * 1.111;
  var fuerzareal = fuerzareal0.toFixed(2);
  var porcentajey = porcentajey0.toFixed(2);
  var porcentajex = 100 - porcentajey;
  var accelerationy0 = (fuerzareal * porcentajey) / 100;
  var accelerationx0 = (fuerzareal * porcentajex) / 100;
  this.accelerationy = accelerationy0.toFixed(2);
  this.accelerationx = accelerationx0.toFixed(2);
  console.log(this.angle);
  console.log(this.accelerationy);
  console.log(this.accelerationx);
  if (this.turn === 2) {
    this.accelerationx = this.accelerationx * -1;
  }
};
//actualiza los proyectiles en funcion de la gravedad, la aceleracion y el viento.
Proyectile.prototype.updateMove = function(gravity, wind) {
  this.wind = wind / 1000;
  this.gravity = gravity / 100;
  this.accelerationx -= this.wind;
  this.accelerationy -= this.gravity;

  this.positionx += this.accelerationx;
  this.positiony -= this.accelerationy;
};
//esta funcion recorre los edificios , definiendo su area y comparando esta con el punto donde esta el proyectil,
//cambiando la variable impactBuild si se produce un impacto
Proyectile.prototype.collisionBuild = function() {
  var that = this;
  var build = that.buildings.randomBuilding;
  for (var i = 0; i < build.length; i++) {
    var maxxBuild = build[i].positionx + build[i].width;
    var minxBuild = build[i].positionx;
    var maxyBuild = build[i].positiony + build[i].height;
    var minyBuild = build[i].positiony;

    if (that.positionx < 0 || that.positionx > 1000 || that.positiony > 800) {
      that.impactBuild = true;
    } else if (
      that.positionx > minxBuild &&
      that.positionx < maxxBuild &&
      that.positiony < maxyBuild &&
      that.positiony > minyBuild
    ) {
      that.impactBuild = true;
      console.log("impacto");
    }
  }
};

//esta variable comprueba la posicion de los jugadores, con la del proyectil y cambia la variable impactPlayer si se produce el impacto
Proyectile.prototype.collisionPlayer = function() {
  var play = this.myGameArea.playersArray;
  var maxxPlayer1 = play[0].positionx + 40;
  var minxPlayer1 = play[0].positionx;
  var maxyPlayer1 = play[0].positiony + 40;
  var minyPlayer1 = play[0].positiony;
  var maxxPlayer2 = play[1].positionx + 40;
  var minxPlayer2 = play[1].positionx;
  var maxyPlayer2 = play[1].positiony + 40;
  var minyPlayer2 = play[1].positiony;
  console.log("min" + minyPlayer2);
  if (
    this.positionx > minxPlayer1 &&
    this.positionx < maxxPlayer1 &&
    this.positiony < maxyPlayer1 &&
    this.positiony > minyPlayer1
  ) {
    this.impactPlayer1 = true;
  } else if (
    this.positionx > minxPlayer2 &&
    this.positionx < maxxPlayer2 &&
    this.positiony < maxyPlayer2 &&
    this.positiony > minyPlayer2
  ) {
    this.impactPlayer2 = true;
  }
};
Proyectile.prototype.explosion = function() {
  //realizara una animacion al colisionar
};
