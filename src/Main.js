//Espera a que cargue la pagina y arranca.
window.onload = function() {
  //Declara el area de juego dentro de la cual se instancia todas los demas objetos
  var gameArea = new MyGameArea();
  //Genera las posiciones iniciales, y el array de edificios.
  gameArea.start();
  gameArea.weather.randomWind();
  gameArea.turn.turnos(1);

  loop();
  
  function loop() {
    
    //dibuja edificios y personajes.
    gameArea.drawArea();
    if (gameArea.turn.draw1 === true) {
      gameArea.drawTurn1();
      gameArea.turn.check1();
    } else if (gameArea.turn.draw2 === true) {
      gameArea.drawTurn2();
      gameArea.turn.check2();
    }
    window.requestAnimationFrame(loop);
  }
};
