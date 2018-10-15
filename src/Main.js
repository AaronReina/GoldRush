//inicializa personaje
//inicializa objeto
//inicializa array edificios
//inicializa edificios

// pinta todo

//Da los datos de angulo y potencia al proyectil
window.onload = function() {
  var gameArea = new MyGameArea();
  gameArea.start();
  loop();
  function loop() {
    gameArea.drawArea();
    requestAnimationFrame(loop);
  }

  var buttons = document.getElementsByTagName("button");
  var inputs = document.getElementsByTagName("input");
  var player1Node= document.querySelector("#player1");
  var player2Node= document.querySelector("#player2");
  var turn = function(option, area) {
    switch (option) {
      case 1:
      area.proyectile1.physics();
      player1Node.classList.remove("buttonsOf");
        buttons[0].onclick = function() {
          area.proyectile1.strenght = parseInt(inputs[0].value);
        };
        buttons[1].onclick = function() {
          area.proyectile1.angle = parseInt(inputs[1].value)
        };
        buttons[2].onclick = function() {
          area.proyectile1.physics();
          loop1();
          function loop1() {
            area.drawTurn1();
            if (area.proyectile1.impactBuild  === true) {
              window.cancelAnimationFrame(loop1);
              area.initialPro();
              player1Node.classList.add("buttonsOf");
              turn(2,gameArea)
            }
            else if (area.proyectile1.impactPlayer1 === true) {
              window.cancelAnimationFrame(loop1);
              area.player1.life--
              if (area.player1.life<1){
                area.player1.die()
                
              }
             
            } 
            else if (area.proyectile1.impactPlayer2 === true) {
              window.cancelAnimationFrame(loop1);
              area.player2.life--
              if (area.player2.life<1){
                area.player2.die()
                
              }
             
            }
            
            else {
              window.requestAnimationFrame(loop1);
            }
          }
        };
        break;
      case 2:
   
      player2Node.classList.remove("buttonsOf");
        buttons[3].onclick = function() {
          area.proyectile2.strenght = parseInt(inputs[2].value);
        };
        buttons[4].onclick = function() {
          area.proyectile2.angle = parseInt(inputs[3].value)
        };
        buttons[5].onclick = function() {
          area.proyectile2.physics();
          loop2();
          function loop2() {
            area.drawTurn2();
            if (area.proyectile2.impactBuild === true) {
              window.cancelAnimationFrame(loop2);
              area.initialPro()
              player2Node.classList.add("buttonsOf");
              turn(1,gameArea)
            }
            else if (area.proyectile2.impactPlayer2 === true) {
              window.cancelAnimationFrame(loop2);
              area.player2.life--
              if (area.player2.life<1){
                area.player2.die()
              }
            }
            else if (area.proyectile2.impactPlayer1 === true) {
              window.cancelAnimationFrame(loop2);
              area.player1.life--
              if (area.player1.life<1){
                area.player1.die()
              }
            }
            else {
              window.requestAnimationFrame(loop2);
            }
          }
        };
    }
  };
  turn(1,gameArea)
};

//llama metodo ataque
//llama metodos proyectil
//comprueba colisiones
//actua contra colisiones
//comprueba fin
