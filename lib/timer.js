var Timer = function(delay, done) {
  var timeout
    , started
    , remaining = delay
    , running;

  this.start = function() {
    running = true;
    started = new Date();
    timeout = setTimeout(done, remaining);
  };

  this.stop = function() {
    if (timeout) clearTimeout(timeout);
    running = false;
    remaining -= new Date() - started;
  };

  this.remaining = function() {
    if (running) {
      this.stop();
      this.start();
    }

    return Math.ceil(remaining / 1000);
  };

  this.running = function() {
    return running;
  };

  this.start();
};

module.exports = Timer;