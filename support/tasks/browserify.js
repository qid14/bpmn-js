var _ = require('lodash'),
    path = require('path'),
    browserify = require('browserify');

module.exports = function(grunt) {

  function browserifyTask(config, done) {

    var defaults = {
      builtins: false,
      detectGlobals: false,
      insertGlobalVars: []
    };

    var bopts = _.merge({}, config.options, defaults);

    var b = browserify(bopts);

    _.forEach(config.ignore, function(i) {
      b.ignore(i);
    });

    _.forEach(config.files, function(f) {
      b.add(f);
    });

    _.forEach(config.require, function(r) {

      if (!_.isArray(r)) {
        r = [ r ];
      }

      var file = r[0],
          opts = _.assign({ expose: file }, r[1]);

      b.require.call(b, file, opts);
    });

    _.forEach(config.transform, function(t) {
      if (!_.isArray(t)) {
        t = [ t ];
      }

      b.transform.call(b, t[0], t[1]);
    });

    b.bundle(function(err, contents) {

      if (bopts.standalone) {
        var derequire = require('derequire');
        contents = derequire(contents.toString('utf8'));
      }

      grunt.file.write(config.output, contents);

      done(err);
    });
  };

  return function(target) {

    var config = grunt.config('browserify.' + target);
    if (!config) {
      throw new Error('no configuration for browserify:' + target + ' task');
    }

    browserifyTask(config, this.async());
  };
};