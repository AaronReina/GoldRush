var Weather = function() {
  //se declaran valores iniciales para gravedad y viento
  this.wind = 20;
  this.gravity = 20;
};

Weather.prototype.wind = function() {
  //genera aleatoriamente el viento en incio
};
Weather.prototype.drawClouds = function() {
  //pintara nubes para indicar la direccion y potencia del viento
};
Weather.prototype.updateClouds = function() {
  //actualizara la posicion de las nubes
};
