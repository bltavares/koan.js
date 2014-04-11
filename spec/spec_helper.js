var __ = 'Fill me in';

(function (env) {
  var shouldDisable;

  env.addReporter({
    specStarted: function (spec) {
      shouldDisable && spec.disabled();
    },
    specDone: function (spec) {
      shouldDisable = spec.status === 'failed';
    }});
})(jasmine.getEnv());
