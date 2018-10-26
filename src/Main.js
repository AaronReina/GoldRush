window.onload = function() {
  //initialize the SelectDom
  var selectionDom = new SelectDom();
  //if one of the buttons are pushed it calls to theyr function
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
    //initialize the gameArea with all the objects inside
    var gameArea = new MyGameArea(selectionDom);
    //call the first functions to start the game
    gameArea.start();
    gameArea.weather.randomWind();
    gameArea.turn.turnos(1);
    loop();
    function loop() {
      //draw turns and make checks
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
