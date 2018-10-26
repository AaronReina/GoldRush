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
  this.case1 = document.getElementById("Case1");
  this.case2 = document.getElementById("Case2");
  this.case3 = document.getElementById("Case3");
  this.winner = document.getElementById("winner");
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
    this.case1.classList.add("caseOf");
    this.case2.classList.remove("caseOf");
  this.audioGame.play()
  }
}