var Character = function(MyGameArea,Mountains,life) {
  this.mountains=Mountains.randomBuilding
  this.context= MyGameArea.ctx
  this.life = life; // se genera al crear cada personaje y en un futuro pasaria al tipo de personaje y segun el tipo sera una u otra.
  this.positionx = 100;// se genera al posicionarlo
  this.positiony = 100;// se genera al posicionarlo
  this.img = new Image();
  this.img.src="./img/Tocho.png";
};


Character.prototype.position = function() {
  var that = this
  var random1 = Math.floor(Math.random() * 3 + 0);
  //var random2 = Math.floor(Math.random() * this.mountains.randomBuilding.length-1 + this.mountains.randomBuilding.length-4);
  that.positionx= that.mountains[random1].positionx+20;
  that.positiony= that.mountains[random1].positiony-40;
  console.log(that.positionx);
  console.log(that.positiony)


  //posiciona al personaje
};
Character.prototype.draw = function() {
  //pinta al personaje
  
  
    
   this.context.drawImage(this.img, this.positionx, this.positiony, 40 ,40);
  
}
Character.prototype.atack = function() {
  //inicia el ataque
};
Character.prototype.die = function() {
    //al recibir la colision baja las vidas .... habia que plantearse un hitbox invisible para el personaje......
};


//personaje añadiriamos tipos en un futuro con metodos para sus habilidades y diferentes daños