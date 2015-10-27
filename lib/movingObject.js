(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Mo = window.Asteroids.MovingObject = function(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.rad = params.rad;
    this.col = params.col;
    this.game = params.game;
  };

  Mo.prototype.draw = function(ctx) {
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.rad,
      0,
      2 * Math.PI,
      false
  );

  ctx.fill();
};

var isCollidedWith = function(otherMovingObject){};

Mo.prototype.move = function(){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  window.Asteroids.Game.wrap(this.pos);
};

})();
