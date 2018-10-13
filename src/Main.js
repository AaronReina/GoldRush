//inicializa personaje
//inicializa objeto
//inicializa array edificios
//inicializa edificios







// pinta todo


window.onload = function() {
    var gameArea= new MyGameArea();
    gameArea.start()
    console.log(gameArea.building.randomBuilding)

    var interavalo =  setInterval(function() {
       
        gameArea.draw();
    
      }, 100);
    }; 
  
//llama metodo ataque
//llama metodos proyectil
//comprueba colisiones
//actua contra colisiones
//comprueba fin