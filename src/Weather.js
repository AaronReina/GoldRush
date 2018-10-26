var Weather = function(gameArea) {
  //this class includes gravity and wind
  this.wind = 20;
  this.gravity = 20;
  this.img = new Image();
  this.img.src = "./img/cloud.png";
  this.gameArea = gameArea;
  this.positionx = 400;
};
//this function give a random value to the wind
Weather.prototype.randomWind = function() {
  var num = Math.floor(Math.random() * 20);
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  this.wind = num;
};
//this function draw the cloud
Weather.prototype.drawClouds = function() {
  this.gameArea.ctx.drawImage(this.img, this.positionx, 100, 200, 80);
};
//this function update the cloud position depending of the wind value
Weather.prototype.updateClouds = function() {
  this.positionx -= this.wind / 10;
  if (this.wind < 0) {
    if (this.positionx > 1000) {
      this.positionx = -200;
    }
  } else if (this.wind > 0) {
    if (this.positionx < -200) {
      this.positionx = 1000;
    }
  }
};
