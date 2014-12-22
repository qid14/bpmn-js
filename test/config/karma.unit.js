module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [ 'browserify', 'jasmine' ],

    files: [
      'tmp/prebundled/dependencies.js',
      'tmp/prebundled/fixtures.js',
      'test/spec/**/*Spec.js',
      'test/integration/**/*Spec.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'test/spec/**/*Spec.js': [ 'browserify' ],
      'test/integration/**/*Spec.js': [ 'browserify' ]
    },

    browsers: [ 'PhantomJS' ],

    browserNoActivityTimeout: 30000,

    singleRun: false,
    autoWatch: true,

    // browserify configuration
    browserify: {
      debug: true,
      detectGlobals: false,
      transform: [ 'brfs' ],
      configure: function(b) {

        b.external('lodash');
        b.external('sax');
        b.external('snapsvg');
        b.external('jquery');
        b.external('jquery-mousewheel');

        b.external('./test/fixtures');
      }
    }
  });
};
