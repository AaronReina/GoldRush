//inicializa personaje
//inicializa objeto
//inicializa array edificios
//inicializa edificios

// pinta todo

window.onload = function() {
  var gameArea = new MyGameArea();
  gameArea.start();
  loop();
  function loop() {
    gameArea.draw();
    gameArea.proyectile.collision();

    requestAnimationFrame(loop);
  }
};

//llama metodo ataque
//llama metodos proyectil
//comprueba colisiones
//actua contra colisiones
//comprueba fin
