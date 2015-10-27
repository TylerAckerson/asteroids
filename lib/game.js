(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function() {
    var DIM_X = window.canvasEl.height;
    var DIM_Y = window.canvasEl.width;
    var NUM_ASTEROIDS = 20;

    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < 20; i++) {
      var astPos = window.Asteroids.Util.randomPos(500, 500);
      console.log(this);
      this.asteroids.push(new window.Asteroids.Asteroid( {pos: astPos, game: window.Asteroids.game } ));
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, window.canvasEl.width, window.canvasEl.height);
    this.asteroids.forEach(function(asteroid) { asteroid.draw(ctx); });
  };

  Game.prototype.moveObjects = function(ctx) {
    this.asteroids.forEach(function(asteroid) { asteroid.move(); } );
  };

  Game.wrap = function(pos) {
    var posX = pos[0];
    var posY = pos[1];

    if (posX === window.canvasEl.width){
      pos[0] = 0;
    } else if (posX === 0) {
      pos[0] = window.canvasEl.width;
    }

    if (posY === window.canvasEl.height){
      pos[1] = 0;
    } else if (posY === 0) {
      pos[1] = window.canvasEl.height;
    }
  };

})();
