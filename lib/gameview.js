(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    setInterval(function(){
      this.game.moveObjects(this.ctx);
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };
})();
