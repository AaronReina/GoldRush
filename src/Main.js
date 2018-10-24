//Espera a que cargue la pagina y arranca.
window.onload = function() {
  var inicio = document.getElementsByTagName("button");
  var choose = document.getElementsByTagName("h2");
  var choose2 = "SELECT PLAYER TWO";
  var play = "PRESS START";
  var player = 1;
  var player1;
  var player2;
  inicio[0].onclick = function() {
    if (player === 1) {
      player1 = "./img/Clay";
      player++;
      choose[0].innerText = choose2;
    } else if (player === 2) {
      player2 = "./img/Clay";
      player++;
      inicio[4].classList.remove("buttonsOf");
      choose[0].innerText = play;
    }
  };
  inicio[1].onclick = function() {
    if (player === 1) {
      player1 = "./img/Jane";
      player++;
      choose[0].innerText = choose2;
    } else if (player === 2) {
      player2 = "./img/Jane";
      player++;
      inicio[4].classList.remove("buttonsOf");
      choose[0].innerText = play;
    }
  };
  inicio[2].onclick = function() {
    if (player === 1) {
      player1 = "./img/Jebediah";
      player++;
      choose[0].innerText = choose2;
    } else if (player === 2) {
      player2 = "./img/Jebediah";
      player++;
      inicio[4].classList.remove("buttonsOf");
      choose[0].innerText = play;
    }
  };
  inicio[3].onclick = function() {
    if (player === 1) {
      player1 = "./img/Ahusaka";
      player++;
      choose[0].innerText = choose2;
    } else if (player === 2) {
      player2 = "./img/Ahusaka";
      player++;
      inicio[4].classList.remove("buttonsOf");
      choose[0].innerText = play;
    }
  };

  inicio[4].onclick = function() {
    var gameHtml =
      '<div class="back1"><div id="total"> <div id="player1"><div><input type="number" class="strenghtPlayer1" placeholder="Strenght 0 to 700"></div><div><input type="number" class="anglePlayer1" placeholder="Angle 0 to 90"></div><button type="button" class="AttackPlayer1 buttonFinal"> Attack!!! </button></div><div id="BackCanvas"><canvas id="Canvas" width="1000" height="800"></canvas></div><div id="player2" class="buttonsOf"><div><input type="number" class="strenghtPlayer2" placeholder="Strenght 0 to 700"></div><div><input type="number" class="anglePlayer2" placeholder="Angle 0 to 90"></div><button type="button" class="AttackPlayer2 buttonFinal"> Attack!!! </button></div></div></div>';

    var gameShow = document.getElementsByTagName("body");
    gameShow[0].innerHTML = "";
    gameShow[0].innerHTML = gameHtml;

    //Declara el area de juego dentro de la cual se instancia todas los demas objetos

    var gameArea = new MyGameArea(player1, player2);
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
