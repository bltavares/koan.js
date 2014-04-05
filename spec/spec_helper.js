(function (env) {
  var failed;
  env.addReporter({ 
    specStarted: function (spec) {
      if (failed) {
        spec.disabled();
      }
    },
    specDone: function (spec) {
      if (spec.status === 'failed') {
        failed = true;
      };
    }});
})(jasmine.getEnv());
