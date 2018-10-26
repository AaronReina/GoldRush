var Proyectile = function(gameArea, Buildings, Character, turn) {
  //Se declaran todas las variabes que utilizan el proyectil y sus metodos.
  this.impactBuild = false;
  this.impactPlayer1 = false;
  this.impactPlayer2 = false;
  this.buildings = Buildings;
  this.turn = turn;
  this.strenght = 10;
  this.angle = 90;
  this.gameArea = gameArea;
  this.context = gameArea.ctx;
  this.damage = Character.damage;
  this.positionx = Character.positionx;
  this.positiony = Character.positiony;
  this.accelerationy = 0;
  this.accelerationx = 0;
  this.img = new Image();
  this.img.src = "./img/bomb.png";
  this.imgExplode = new Image();
  this.imgExplode.src = "./img/explosion.png";
  this.audioExplosion1 = new Audio("./sounds/Explosion1.mp3");
  this.frame=0;
  this.frameCount=0;
  
 
};
//Esta funcion pinta el proyectil y le asigna un punto de salida en funcion del jugador.
Proyectile.prototype.draw = function() {
  this.context.drawImage(this.img, this.positionx, this.positiony, 10, 10);
 
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
      that.gameArea.lastPositionX=that.positionx 
      that.gameArea.lastPositionY=that.positiony 
      that.buildings.damage(build, i);
      that.impactBuild = true;
      that.gameArea.startExplosion= true;
      that.audioExplosion1.play()
    }
  }
};

//esta variable comprueba la posicion de los jugadores, con la del proyectil y cambia la variable impactPlayer si se produce el impacto
Proyectile.prototype.collisionPlayer = function() {
  var play = this.gameArea.playersArray;
  var maxxPlayer1 = play[0].currentBuilding.positionx + 50;
  var minxPlayer1 = play[0].currentBuilding.positionx + 20;
  var maxyPlayer1 = play[0].currentBuilding.positiony;
  var minyPlayer1 = play[0].currentBuilding.positiony - 35;
  var maxxPlayer2 = play[1].currentBuilding.positionx + 60;
  var minxPlayer2 = play[1].currentBuilding.positionx + 30;
  var maxyPlayer2 = play[1].currentBuilding.positiony;
  var minyPlayer2 = play[1].currentBuilding.positiony - 35;

  if (
    this.positionx > minxPlayer1 &&
    this.positionx < maxxPlayer1 &&
    this.positiony < maxyPlayer1 &&
    this.positiony > minyPlayer1
  ) {
    this.gameArea.lastPositionX=this.positionx 
    this.gameArea.lastPositionY=this.positiony 
    this.impactPlayer1 = true;
    this.gameArea.startExplosion= true;
    this.audioExplosion1.play()
  } else if (
    this.positionx > minxPlayer2 &&
    this.positionx < maxxPlayer2 &&
    this.positiony < maxyPlayer2 &&
    this.positiony > minyPlayer2
  ) {
    this.gameArea.lastPositionX=this.positionx 
    this.gameArea.lastPositionY=this.positiony 
    this.impactPlayer2 = true;
    this.gameArea.startExplosion= true;
    this.audioExplosion1.play()
  }
};
Proyectile.prototype.explosion = function() {
  
  this.context.drawImage(this.imgExplode, this.frame, 0, 96, 96, this.gameArea.lastPositionX-30, this.gameArea.lastPositionY-30, 60, 60);
  if (this.frameCount%5===0){
this.frame +=96
this.frameCount++
  }
else if(this.frameCount>60){
  this.frameCount=0
  this.frame=0
  this.gameArea.startExplosion =false

}else{
  this.frameCount++
}
  
 

  //realizara una animacion al colisionar
};
Proyectile.prototype.bigExplosion = function() {
  
  this.context.drawImage(this.imgExplode, this.frame, 0, 96, 96, this.gameArea.lastPositionX-150, this.gameArea.lastPositionY-250, 300, 500);
  if (this.frameCount%5===0){
this.frame +=96
this.frameCount++
  }
else if(this.frameCount>60){
  this.frameCount=0
  this.frame=0
  this.gameArea.startBigExplosion =false

}else{
  this.frameCount++
}
  
 

  //realizara una animacion al colisionar
};