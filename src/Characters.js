var Character = function(MyGameArea, Building, life, damage,player,image) {
this.player = player; 
  this.building = Building.randomBuilding;
  this.context = MyGameArea.ctx;
  this.damage = damage;
  this.life = life; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = 200; // se genera al posicionarlo
  this.positiony = 200; // se genera al posicionarlo
  this.img = new Image();
  this.img.src = image+player+".png";
};

Character.prototype.position = function() {
  var that = this;
  var random1 = Math.floor(Math.random() * 3 + 0);
  var random2 = Math.floor(Math.random() * (that.building.length-that.building.length-3)) + that.building.length-3;

  

 if (that.player ===1){
 
  
 that.positionx = that.building[random1].positionx + 20;
  that.positiony = that.building[random1].positiony - 40;
}
else if (that.player ===2){
that.positionx = that.building[random2].positionx + 20;
that.positiony = that.building[random2].positiony - 40;
}



  //posiciona al personaje
};
Character.prototype.draw = function() {
  //pinta al personaje

  this.context.drawImage(this.img, this.positionx, this.positiony, 40, 40);
};
Character.prototype.atack = function() {
  //inicia el ataque
};
Character.prototype.die = function() {
  //al recibir la colision baja las vidas .... habia que plantearse un hitbox invisible para el personaje......
};

//personaje añadiriamos tipos en un futuro con metodos para sus habilidades y diferentes daños
