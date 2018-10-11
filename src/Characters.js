var Character = function(context,life) {
  this.context= context
  this.life = life; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = 0;// se genera al posicionarlo
  this.positiony = 0;// se genera al posicionarlo
};


Character.prototype.position = function() {
  //posiciona al personaje
};
Character.prototype.draw = function() {
  //pinta al personaje
  var that = this;
  var img = new Image();
  img.onload = function() {
    
   that.context.drawImage(img, that.positionx, that.positiony, 20 ,20);
  };
  img.src="./img/Tocho.png";
}

Character.prototype.atack = function() {
  //Da los datos de angulo y potencia al proyectil
};
Character.prototype.die = function() {
    //al recibir la colision baja las vidas .... habia que plantearse un hitbox invisible para el personaje......
};


//personaje añadiriamos tipos en un futuro con metodos para sus habilidades y diferentes daños