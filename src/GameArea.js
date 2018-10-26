//this object initialize all the rest except the SelectDom
//also save some general variables
var MyGameArea = function(SelectDom) {
  this.selectDom = SelectDom;
  this.canvas = SelectDom.canvas;
  this.ctx = SelectDom.ctx;
  this.player1Img = this.selectDom.player1;
  this.player2Img = this.selectDom.player2;
  this.turn = new Turn(this);
  this.weather = new Weather(this);
  this.building = new Building(this);
  this.player1 = new Character(
    this,
    this.building,
    this.selectDom,
    1,
    this.player1Img
  );
  this.player2 = new Character(
    this,
    this.building,
    this.selectDom,
    2,
    this.player2Img
  );
  this.playersArray = [this.player1, this.player2];
  this.proyectile1 = new Proyectile(this, this.building, this.player1, 1);
  this.proyectile2 = new Proyectile(this, this.building, this.player2, 2);
  this.startExplosion = false;
  this.startBigExplosion = false;
  this.lastPositionX;
  this.lastPositionY;
  //this function clear the canvas
  MyGameArea.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  //this function call the initial function of the other classes
  MyGameArea.prototype.start = function() {
    this.building.random();
    this.player1.position();
    this.player2.position();
    this.initialPro();
  };
  //this function restart players and proyectiles
  MyGameArea.prototype.initialPro = function() {
    this.proyectile1 = null;
    this.proyectile2 = null;
    this.proyectile1 = new Proyectile(this, this.building, this.player1, 1);
    this.proyectile2 = new Proyectile(this, this.building, this.player2, 2);
    this.proyectile1.positionx = this.player1.currentBuilding.positionx + 60;
    this.proyectile1.positiony = this.player1.currentBuilding.positiony - 40;
    this.proyectile2.positionx = this.player2.currentBuilding.positionx + 20;
    this.proyectile2.positiony = this.player2.currentBuilding.positiony - 40;
  };
  //this function draws the static images and sprites
  MyGameArea.prototype.drawArea = function() {
    this.clear();
    this.building.draw();
    this.player1.draw();
    this.player2.draw();
    this.weather.drawClouds();
    this.weather.updateClouds();
    if (this.startExplosion === true) {
      this.proyectile1.explosion();
    }
    if (this.startExplosion === true) {
      this.proyectile2.explosion();
    }
    if (this.startBigExplosion === true) {
      this.proyectile1.bigExplosion();
    }
    if (this.startBigExplosion === true) {
      this.proyectile2.bigExplosion();
    }
  };
  //this function draws the turn 1 proyectile and check collisions
  MyGameArea.prototype.drawTurn1 = function() {
    this.proyectile1.draw();
    this.proyectile1.updateMove(this.weather.gravity, this.weather.wind);
    this.proyectile1.collisionBuild();
    this.proyectile1.collisionPlayer();
  };
  //this function draws the turn 2 proyectile and check collisions
  MyGameArea.prototype.drawTurn2 = function() {
    this.proyectile2.draw();
    this.proyectile2.updateMove(this.weather.gravity, this.weather.wind);
    this.proyectile2.collisionBuild();
    this.proyectile2.collisionPlayer();
  };
};
