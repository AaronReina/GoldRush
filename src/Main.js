//inicializa personaje
//inicializa objeto
//inicializa array edificios
//inicializa edificios







// pinta todo


window.onload = function() {
    var gameArea= new MyGameArea();
    var player1 = new Character(gameArea.ctx,2)
   var proyectile1= new Proyectile(gameArea.ctx,1,player1.positionx,player1.positiony,2)
   var weather1 = new Weather();
   var building1= new Building(gameArea.ctx)
   proyectile1.settings()
   proyectile1.physics()
    var interavalo =  setInterval(function() {
        gameArea.clear();

        player1.draw()
        proyectile1.draw()
        building1.draw()
        proyectile1.updateMove(weather1.gravity,weather1.wind)
      }, 100);
    }; 
  
//llama metodo ataque
//llama metodos proyectil
//comprueba colisiones
//actua contra colisiones
//comprueba fin