var Turn = function(MygameArea) {
  //Seleccion diversos nodos del DOM (deberia ir en otro sitio, hay que revisarlo)
  this.area = MygameArea;
  this.draw1 = false;
  this.draw2 = false;
  this.buttons = document.getElementsByTagName("button");
  this.inputs = document.getElementsByTagName("input");
  this.player1Node = document.querySelector("#player1");
  this.player2Node = document.querySelector("#player2");

  //Se genera una funcion que cambia segun el turno
  Turn.prototype.turnos = function(option) {
    switch (option) {
      case 1:
       
        var that = this;
        that.draw1 = false;
        that.draw2 = false;
        //En el primer turno actualiza las fisicas e inicia los eventos click que asignan valores de fuerza y angulo

        that.player1Node.classList.remove("buttonsOf");
        that.buttons[0].onclick = function() {
          that.area.proyectile1.strenght = parseInt(that.inputs[0].value);
          
        };
        that.buttons[1].onclick = function() {
          that.area.proyectile1.angle = parseInt(that.inputs[1].value);
          
        };
        that.buttons[2].onclick = function() {
          //se vuelven a actualizar las fisicas con los nuevos valores
          that.area.proyectile1.physics();
          that.draw1 = true;

       
          //inicia un loop
          //pinta el area y comprueba los impactos
        };
        break;

      case 2:
        
        //realiza el mismo proceso que en el caso uno pero con las referencias del caso 2
        var that = this;
        that.draw1 = false;
        that.draw2 = false;
        that.player2Node.classList.remove("buttonsOf");
        that.buttons[3].onclick = function() {
          that.area.proyectile2.strenght = parseInt(that.inputs[2].value);
          
        };
        that.buttons[4].onclick = function() {
          that.area.proyectile2.angle = parseInt(that.inputs[3].value);
          
        };
        that.buttons[5].onclick = function() {
          that.area.proyectile2.physics();
          that.draw2 = true;
          
        };
        break;
    }
  };
  Turn.prototype.check1 = function() {
    if (this.area.proyectile1.impactBuild === true) {
      this.area.initialPro();
      this.player1Node.classList.add("buttonsOf");
      this.turnos(2);
    } else if (this.area.proyectile1.impactPlayer2 === true) {
      this.area.player2.life--;
      this.area.proyectile1.impactPlayer2 === false;
      if (this.area.player2.life < 1) {
        this.area.player2.die();
      }
    }
  };
  Turn.prototype.check2 = function() {
    if (this.area.proyectile2.impactBuild === true) {
      this.area.initialPro();
      this.player2Node.classList.add("buttonsOf");
      this.turnos(1);
    } else if (this.area.proyectile2.impactPlayer1 === true) {
      this.area.proyectile2.impactPlayer1 === false;
      this.area.player1.life--;
      if (this.area.player1.life < 1) {
        this.area.player1.die();
      }
    }
  };
};
