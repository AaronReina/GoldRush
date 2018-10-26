var Character = function(gameArea, Building, SelectDom, player, image) {
  this.selectDom = SelectDom;
  this.player = player;
  this.currentBuilding;
  this.positionx;
  this.positiony;
  this.building = Building.randomBuilding;
  this.context = gameArea.ctx;
  this.life = 1;
  this.img = new Image();
  this.img.src = "./img/" + image + player + ".png";
  this.winner;
};
//this function give a random position to the character relative to the mountains.
Character.prototype.position = function() {
  var that = this;
  var random1 = Math.floor(Math.random() * 3 + 0);
  var random2 =
    Math.floor(
      Math.random() * (that.building.length - that.building.length - 3)
    ) +
    that.building.length -
    3;
  if (that.player === 1) {
    that.currentBuilding = that.building[random1];
  } else if (that.player === 2) {
    that.currentBuilding = that.building[random2];
  }
};
//this function draw the character
Character.prototype.draw = function() {
  this.context.drawImage(
    this.img,
    this.currentBuilding.positionx + 20,
    this.currentBuilding.positiony - 40,
    40,
    40
  );
};
//this function change the music and swap the dom case2(game) to the dom case 3(win)
Character.prototype.die = function() {
  if (this.player === 1) {
    this.winner = this.selectDom.player2;
  } else {
    this.winner = this.selectDom.player1;
  }
  this.selectDom.case2.classList.add("caseOf");
  this.selectDom.winner.classList.add(this.winner);
  this.selectDom.case3.classList.remove("caseOf");
  this.selectDom.audioGame.pause();
  this.selectDom.audioGame.currentTime = 0;
  this.selectDom.audioFinal.play();
};
