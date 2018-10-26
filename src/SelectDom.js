var SelectDom = function() {
  this.audioClay = new Audio("./sounds/Clay.mp3");
  this.audioJane = new Audio("./sounds/Jane.mp3");
  this.audioAhusaka = new Audio("./sounds/Ahusaka.mp3");
  this.audioJebediah = new Audio("./sounds/Jebediah.mp3");
  this.audioGame = new Audio("./sounds/Selection.mp3");
  this.audioGame.loop=true;
  this.audioGame.volume=0.1;
  this.inicio = document.getElementsByTagName("button");
  this.choose = document.getElementsByTagName("h2");
  this.gameShow = document.getElementsByTagName("body");
  this.choose2 = "SELECT PLAYER TWO";
  this.play = "PRESS START";
  this.player = 1;
  this.player1;
  this.player2;
  this.startGame= false

  SelectDom.prototype.selection1 = function() {
  
    this.audioClay.play()
    if (this.player === 1) {
      console.log("algo2")
      this.player1 = "Clay";
      this.player++;
      this.choose[0].innerText = this.choose2;
    } else if (this.player === 2) {
      this.player2 = "Clay";
      this.player++;
      this.inicio[4].classList.remove("buttonsOf");
      this.choose[0].innerText = this.play;
    }
  }

  SelectDom.prototype.selection2 = function() {
       this.audioJane.play()
    if (this.player === 1) {
      this.player1 = "Jane";
      this.player++;
      this.choose[0].innerText = this.choose2;
    } else if (this.player === 2) {
      this.player2 = "Jane";
      this.player++;
      this.inicio[4].classList.remove("buttonsOf");
      this.choose[0].innerText = this.play;
    }
  }
  SelectDom.prototype.selection3 = function() {
  
    this.audioJebediah.play()
        if (this.player === 1) {
          this.player1 = "Jebediah";
          this.player++;
          this.choose[0].innerText = this.choose2;
        } else if (this.player === 2) {
          this.player2 = "Jebediah";
          this.player++;
          this.inicio[4].classList.remove("buttonsOf");
          this.choose[0].innerText = this.play;
        }
  }

  SelectDom.prototype.selection4 = function() {
    this.audioAhusaka.play()
        if (this.player === 1) {
          this.player1 = "Ahusaka";
          this.player++;
          this.choose[0].innerText = this.choose2;
        } else if (this.player === 2) {
          this.player2 = "Ahusaka";
          this.player++;
          this.inicio[4].classList.remove("buttonsOf");
          this.choose[0].innerText = this.play;
        }
  }
  SelectDom.prototype.selection5 = function() {
    var gameHtml =
    '<div class="back1"><div id="total"> <div id="player1"><div><input type="number" class="strenghtPlayer1" placeholder="Strenght 0 to 700"></div><div><input type="number" class="anglePlayer1" placeholder="Angle 0 to 90"></div><button type="button" class="AttackPlayer1 buttonFinal"> Attack!!! </button></div><div id="BackCanvas"><canvas id="Canvas" width="1000" height="800"></canvas></div><div id="player2" class="buttonsOf"><div><input type="number" class="strenghtPlayer2" placeholder="Strenght 0 to 700"></div><div><input type="number" class="anglePlayer2" placeholder="Angle 0 to 90"></div><button type="button" class="AttackPlayer2 buttonFinal"> Attack!!! </button></div></div></div>';
    this.audioGame.play()
  this.startGame = true;
  this.gameShow[0].innerHTML = "";
  this.gameShow[0].innerHTML = gameHtml;}


  
}