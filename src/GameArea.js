var MyGameArea = function(){
this.canvas  = document.querySelector('#Canvas'),
this.ctx = this.canvas.getContext("2d");
this.player= new Character(this.ctx,2)
//pasar objetos al final n lugar de parametros sueltos
this.proyectile= new Proyectile(this.ctx,1,this.player.positionx,this.player.positiony,2)
this.weather = new Weather();
this.building= new Building(this.ctx);

MyGameArea.prototype.clear = function() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    )
  }
  MyGameArea.prototype.start = function() {
    this.building.random()
   this.proyectile.settings()
   this.proyectile.physics()
  }
  MyGameArea.prototype.draw = function() {
    this.clear();
    this.player.draw()
    this.proyectile.draw()
    this.building.draw()
    this.proyectile.updateMove(this.weather.gravity,this.weather.wind)
    
  }
}