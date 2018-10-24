var Weather = function(gameArea) {
  //se declaran valores iniciales para gravedad y viento
  this.wind = 20;
  this.gravity = 20;
  this.img = new Image();
  this.img.src = "./img/cloud.png";
  this.gameArea = gameArea

  this.positionx = 400
};

Weather.prototype.randomWind = function() {

  var num = Math.floor(Math.random() * 20) 
  num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  this.wind = num
  //genera aleatoriamente el viento en incio
};
Weather.prototype.drawClouds = function() {
  this.gameArea.ctx.drawImage(this.img, this.positionx, 100, 200, 80);
  //pintara nubes para indicar la direccion y potencia del viento
};
Weather.prototype.updateClouds = function() {
 
  this.positionx -= this.wind/10;
  
  if (this.wind<0){
  if(this.positionx>1000){this.positionx=-200}}

 else if (this.wind>0){
  if(this.positionx<-200){this.positionx=1000}}

  //actualizara la posicion de las nubes
};
