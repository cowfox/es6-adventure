
var gulp = require('gulp');
//var traceur = require('gulp-traceur');
var karma = require('karma').server;

/**
 * Task - traceur transpiler
 *
 * No need to run traceur here.
 * traceur has been handled by Karma.
 */

//gulp.task('traceur', function () {
//    return gulp.src(
//        'test/es6/**/*.js'
//        )
//        .pipe(traceur())
//        .pipe(gulp.dest('test/es5'))
//})

/**
 * Run test once and exit
 */
gulp.task('single-run-test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', [],function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

gulp.task('default', ['tdd']);