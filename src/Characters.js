var Character = function(MyGameArea, Building, life, damage, player, image) {
  //Asigna los diferentes valores a las variables internas relativas al personaje y los objetos que interactuan con el.
  this.player = player;
  this.currentBuilding ;
  this.positionx;
  this.positiony
  this.building = Building.randomBuilding;
  this.context = MyGameArea.ctx;
  this.damage = damage;
  this.life = life;
  this.img = new Image();
  this.img.src = image + player + ".png";
};
//Situa a cada personaje encima de un edificio proximo a su lado, de forma aleatoria, teniendo en cuenta si se trata del jugador uno o el dos.
Character.prototype.position = function() {
  var that = this;
  var random1 = Math.floor(Math.random() * 3 + 0);
  var random2 =
    Math.floor(
      Math.random() * (that.building.length - that.building.length - 3)
    ) +
    that.building.length -
    3;

  if (that.player === 1) {
    that.currentBuilding=that.building[random1]
   
  
  } else if (that.player === 2) {
    that.currentBuilding=that.building[random2]
   
  
  }
};
Character.prototype.draw = function() {
  //Dibuja al personaje y le da un tamaño fijo, que luego tendremos en cuenta para calular sus colisiones.
  this.context.drawImage(this.img, this.currentBuilding.positionx+20, this.currentBuilding.positiony-40, 40, 40);
   
};

Character.prototype.die = function() {
  //indica con una alerta que jugador gana (en el futuro realizara otras acciones)
  alert("Player " + this.player + " loose");
};
