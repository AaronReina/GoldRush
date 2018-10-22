var MyGameArea = function() {
  //instancia los objetos necesarios
  this.fps = 0;
  this.canvas = document.querySelector("#Canvas");
  this.ctx = this.canvas.getContext("2d");
  this.tocho = "./img/Tocho";
  this.lady = "./img/Lady";
  this.turn = new Turn(this);
  this.weather = new Weather();
  this.building = new Building(this);
  this.player1 = new Character(this, this.building, 1, 2, 1, this.tocho);
  this.player2 = new Character(this, this.building, 1, 2, 2, this.lady);
  this.playersArray = [this.player1, this.player2];
  this.proyectile1 = new Proyectile(this, this.building, this.player1, 1);
  this.proyectile2 = new Proyectile(this, this.building, this.player2, 2);

  //funcion que limpia el canvas
  MyGameArea.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  //funcion que inicia el juego, creando los edificios y posicionando personjes y proyectiles.
  MyGameArea.prototype.start = function() {
    this.building.random();
    this.player1.position();
    this.player2.position();
    this.initialPro();
  };
  //posiciona los proyectiles y los deja en sus valores iniciales (Se utilizara despues de un impacto)
  MyGameArea.prototype.initialPro = function() {
    this.proyectile1 = null;
    this.proyectile2 = null;
    this.proyectile1 = new Proyectile(this, this.building, this.player1, 1);
    this.proyectile2 = new Proyectile(this, this.building, this.player2, 2);
    this.proyectile1.positionx = this.player1.currentBuilding.positionx+60;
    this.proyectile1.positiony = this.player1.currentBuilding.positiony-40;
    this.proyectile2.positionx = this.player2.currentBuilding.positionx+20;
    this.proyectile2.positiony = this.player2.currentBuilding.positiony-40;
    // console.log(this.proyectile1.positiony)
    // console.log(this.player1.positiony)
  };
  //Dibuja el area , los edificios y los personajes, despues de limpiar el canvas
  MyGameArea.prototype.drawArea = function() {
    this.clear();
    this.building.draw();
    this.player1.draw();
    this.player2.draw();
  };
  //Dibuja el proyectil 1, actualiza su posicion y comprueba sus colisiones
  MyGameArea.prototype.drawTurn1 = function() {
    this.proyectile1.draw();
    this.proyectile1.updateMove(this.weather.gravity, this.weather.wind);
    this.proyectile1.collisionBuild();
    this.proyectile1.collisionPlayer();
  };
  //Dibuja el proyectil 2, actualiza su posicion y comprueba sus colisiones
  MyGameArea.prototype.drawTurn2 = function() {
    this.proyectile2.draw();
    this.proyectile2.updateMove(this.weather.gravity, this.weather.wind);
    this.proyectile2.collisionBuild();
    this.proyectile2.collisionPlayer();
  };
};
