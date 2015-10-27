(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

    var Asteroid = window.Asteroids.Asteroid = function(params) {
      Asteroid.COLOR = "#ADADAD";
      Asteroid.RADIUS = 20;
      Asteroid.VELOCITY = window.Asteroids.Util.randomVel();

      window.Asteroids.MovingObject.call(this, { col: Asteroid.COLOR,
                                rad: Asteroid.RADIUS,
                                vel: Asteroid.VELOCITY,
                                pos: params['pos'] } );

    };
    window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);
})();
