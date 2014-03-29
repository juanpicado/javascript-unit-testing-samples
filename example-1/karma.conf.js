module.exports = function(config) {
  config.set({
    basePath: './',
    autoWatch: true,
    frameworks: ['mocha'],
    files: [
      '../src/js/*.js',
      './test/*.js'
    ],
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],

    reporters: ['progress', 'coverage'],
    preprocessors: { '../src/js/*.js': ['coverage'] },

    singleRun: true
  });
};
