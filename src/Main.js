//Espera a que cargue la pagina y arranca.
window.onload = function() {
  var selectionDom = new SelectDom();
  selectionDom.inicio[0].onclick = function() {
    selectionDom.selection1();
  };
  selectionDom.inicio[1].onclick = function() {
    selectionDom.selection2();
  };
  selectionDom.inicio[2].onclick = function() {
    selectionDom.selection3();
  };
  selectionDom.inicio[3].onclick = function() {
    selectionDom.selection4();
  };
  selectionDom.inicio[4].onclick = function() {
    selectionDom.selection5();
    var gameArea = new MyGameArea(selectionDom);
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
};
