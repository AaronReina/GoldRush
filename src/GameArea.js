var MyGameArea = function(turn) {
  (this.canvas = document.querySelector("#Canvas")),
    (this.ctx = this.canvas.getContext("2d"));
    this.tocho = "./img/Tocho";
    this.lady = "./img/Lady"
  //pasar objetos al final n lugar de parametros sueltos
this.turn= turn
  this.weather = new Weather();
  this.building = new Building(this.ctx);
  this.player1 = new Character(this, this.building, 1,2,1,this.tocho);
  this.player2 = new Character(this, this.building, 1,2,2,this.lady);
  this.playersArray= [this.player1,this.player2]
  this.proyectile1 = new Proyectile(this, this.building, this.player1, 1);
  this.proyectile2 = new Proyectile(this, this.building, this.player2, 2);
  MyGameArea.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  MyGameArea.prototype.start = function() {
    this.building.random();
    this.player1.position();
    this.player2.position();
    this.initialPro()
    
    
  };
  MyGameArea.prototype.initialPro = function() {
    this.proyectile1.positionx=this.player1.positionx;
    this.proyectile1.positiony=this.player1.positiony;
    this.proyectile2.positionx=this.player2.positionx;
    this.proyectile2.positiony=this.player2.positiony;
    this.proyectile1.impactBuild=false
    this.proyectile2.impactBuild=false;
    this.proyectile1.accelerationy = 0; 
    this.proyectile1.accelerationx = 0;
    this.proyectile2.accelerationy = 0; 
    this.proyectile2.accelerationx = 0;
    

    
  };
  MyGameArea.prototype.drawArea = function() {
    this.clear();
    this.building.draw();
    this.player1.draw();
    this.player2.draw();
    
  


};
MyGameArea.prototype.drawTurn1 = function() {
  this.proyectile1.draw();
  this.proyectile1.updateMove(this.weather.gravity, this.weather.wind);
  this.proyectile1.collisionBuild();
  this.proyectile1.collisionPlayer()
};
MyGameArea.prototype.drawTurn2 = function() {
  this.proyectile2.draw();
  this.proyectile2.updateMove(this.weather.gravity, this.weather.wind);
  this.proyectile2.collisionBuild();
  this.proyectile2.collisionPlayer()
};
}