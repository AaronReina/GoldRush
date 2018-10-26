var Turn = function(gameArea) {
  this.area = gameArea;
  this.draw1 = false;
  this.draw2 = false;
  this.buttons = this.area.selectDom.inicio;
  this.inputs = this.area.selectDom.inputs;
  this.player1Node = this.area.selectDom.player1Node;
  this.player2Node = this.area.selectDom.player2Node;
  //this function start turns
  Turn.prototype.turnos = function(option) {
    switch (option) {
      case 1:
        //restart the draw flags and remove toher player buttons
        var that = this;
        that.draw1 = false;
        that.draw2 = false;
        that.player1Node.classList.remove("buttonsOf");
        //take the values of the inputs on click only if they are inside the selected parameters
        that.buttons[5].onclick = function() {
          if (
            that.inputs[0].value != "" &&
            that.inputs[1].value != "" &&
            that.inputs[0].value > -1 &&
            that.inputs[0].value < 701 &&
            that.inputs[1].value > -1 &&
            that.inputs[1].value < 91
          ) {
            that.area.proyectile1.angle = parseInt(that.inputs[1].value);
            that.area.proyectile1.strenght = parseInt(that.inputs[0].value);
            //restart the proyectile physics and set the draw turn 1 flag on true
            that.area.proyectile1.physics();
            that.draw1 = true;
          }
        };
        break;
      case 2:
        //a clone of turn 1 calling the options of turn 2
        var that = this;
        that.draw1 = false;
        that.draw2 = false;
        that.player2Node.classList.remove("buttonsOf");
        that.buttons[6].onclick = function() {
          if (
            that.inputs[2].value != "" &&
            that.inputs[3].value != "" &&
            that.inputs[2].value > -1 &&
            that.inputs[2].value < 701 &&
            that.inputs[3].value > -1 &&
            that.inputs[3].value < 91
          ) {
            that.area.proyectile2.strenght = parseInt(that.inputs[2].value);
            that.area.proyectile2.angle = parseInt(that.inputs[3].value);
            that.area.proyectile2.physics();
            that.draw2 = true;
          }
        };
        break;
    }
  };
  //check flags of impacts and call the necesary functions in every case
  Turn.prototype.check1 = function() {
    if (this.area.proyectile1.impactBuild === true) {
      this.area.initialPro();
      this.player1Node.classList.add("buttonsOf");
      this.turnos(2);
    } else if (this.area.proyectile1.impactPlayer2 === true) {
      this.area.initialPro();
      this.area.player2.life--;
      this.area.proyectile1.impactPlayer2 === false;
      if (this.area.player2.life < 1) {
        this.area.player2.die();
      }
    }
  };
  //check flags of impacts and call the necesary functions in every case
  Turn.prototype.check2 = function() {
    if (this.area.proyectile2.impactBuild === true) {
      this.player2Node.classList.add("buttonsOf");
      this.turnos(1);
      this.area.initialPro();
    } else if (this.area.proyectile2.impactPlayer1 === true) {
      this.area.initialPro();
      this.area.proyectile2.impactPlayer1 === false;
      this.area.player1.life--;
      if (this.area.player1.life < 1) {
        this.area.player1.die();
      }
    }
  };
};
