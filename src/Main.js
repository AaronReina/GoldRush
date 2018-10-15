//Espera a que cargue la pagina y arranca.
window.onload = function() {
  //Declara el area de juego dentro de la cual se instancia todas los demas objetos
  var gameArea = new MyGameArea();
  //Genera las posiciones iniciales, y el array de edificios.
  gameArea.start();
  loop();
  function loop() {
    //dibuja edificios y personajes.
    gameArea.drawArea();
    requestAnimationFrame(loop);
  }
  //Seleccion diversos nodos del DOM (deberia ir en otro sitio, hay que revisarlo)
  var buttons = document.getElementsByTagName("button");
  var inputs = document.getElementsByTagName("input");
  var player1Node = document.querySelector("#player1");
  var player2Node = document.querySelector("#player2");
  //Se genera una funcion que cambia segun el turno
  var turn = function(option, area) {
    switch (option) {
      case 1:
        //En el primer turno actualiza las fisicas e inicia los eventos click que asignan valores de fuerza y angulo
        area.proyectile1.physics();
        player1Node.classList.remove("buttonsOf");
        buttons[0].onclick = function() {
          area.proyectile1.strenght = parseInt(inputs[0].value);
        };
        buttons[1].onclick = function() {
          area.proyectile1.angle = parseInt(inputs[1].value);
        };
        buttons[2].onclick = function() {
          //se vuelven a actualizar las fisicas con los nuevos valores
          area.proyectile1.physics();
          //inicia un loop
          loop1();
          function loop1() {
            //pinta el area y comprueba los impactos
            area.drawTurn1();
            if (area.proyectile1.impactBuild === true) {
              //si se produce el impacto se cancela la animacion , se reinician valores, se ocultan
              //inputs y botones, y se llama a la funcion con el siguiente turno
              window.cancelAnimationFrame(loop1);
              area.initialPro();
              player1Node.classList.add("buttonsOf");
              turn(2, gameArea);
            } else if (area.proyectile1.impactPlayer1 === true) {
              window.cancelAnimationFrame(loop1);
              area.player1.life--;
              //comprueba la muerte y la llama
              if (area.player1.life < 1) {
                area.player1.die();
              }
            } else if (area.proyectile1.impactPlayer2 === true) {
              window.cancelAnimationFrame(loop1);
              area.player2.life--;
              if (area.player2.life < 1) {
                area.player2.die();
              }
            } else {
              window.requestAnimationFrame(loop1);
            }
          }
        };
        break;
      case 2:
        //realiza el mismo proceso que en el caso uno pero con las referencias del caso 2
        player2Node.classList.remove("buttonsOf");
        buttons[3].onclick = function() {
          area.proyectile2.strenght = parseInt(inputs[2].value);
        };
        buttons[4].onclick = function() {
          area.proyectile2.angle = parseInt(inputs[3].value);
        };
        buttons[5].onclick = function() {
          area.proyectile2.physics();
          loop2();
          function loop2() {
            area.drawTurn2();
            if (area.proyectile2.impactBuild === true) {
              window.cancelAnimationFrame(loop2);
              area.initialPro();
              player2Node.classList.add("buttonsOf");
              turn(1, gameArea);
            } else if (area.proyectile2.impactPlayer2 === true) {
              window.cancelAnimationFrame(loop2);
              area.player2.life--;
              if (area.player2.life < 1) {
                area.player2.die();
              }
            } else if (area.proyectile2.impactPlayer1 === true) {
              window.cancelAnimationFrame(loop2);
              area.player1.life--;
              if (area.player1.life < 1) {
                area.player1.die();
              }
            } else {
              window.requestAnimationFrame(loop2);
            }
          }
        };
    }
  }
  //inicia por primera vez la funcion de turnos
  turn(1, gameArea);
};

