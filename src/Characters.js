var Character = function(context,life) {
  this.context= context
  this.life = life; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = 100;// se genera al posicionarlo
  this.positiony = 100;// se genera al posicionarlo
  this.img = new Image();
  this.img.src="./img/Tocho.png";
};


Character.prototype.position = function() {
  //posiciona al personaje
};
Character.prototype.draw = function() {
  //pinta al personaje
  
  
    
   this.context.drawImage(this.img, this.positionx, this.positiony, 80 ,80);
  
}
Character.prototype.atack = function() {
  //inicia el ataque
};
Character.prototype.die = function() {
    //al recibir la colision baja las vidas .... habia que plantearse un hitbox invisible para el personaje......
};


//personaje añadiriamos tipos en un futuro con metodos para sus habilidades y diferentes daños