var MyGameArea = function(){
this.canvas  = document.querySelector('#Canvas'),
this.ctx = this.canvas.getContext("2d");

MyGameArea.prototype.clear = function() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}