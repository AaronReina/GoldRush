//inicializa personaje
//inicializa objeto
//inicializa array edificios
//inicializa edificios







// pinta todo


window.onload = function() {
    var gameArea= new MyGameArea();
    var player1 = new Character(gameArea.ctx,2)
   var proyectile1= new Proyectile(gameArea.ctx,1,player1.positionx,player1.positiony)
   proyectile1.physics(1000, 45)
    var interavalo =  setInterval(function() {
        gameArea.clear();

        player1.draw()
        proyectile1.draw()
        proyectile1.updateMove(20,20)
      }, 100);
    }; 
  
//llama metodo ataque
//llama metodos proyectil
//comprueba colisiones
//actua contra colisiones
//comprueba fin