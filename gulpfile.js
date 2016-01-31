var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', ['ts', 'watch']);

// Compile typescript sources
gulp.task('ts', function() {
    gulp.src(['src/**/*.ts'])
	    .pipe(ts({module: 'commonjs'}))
		.js
		.pipe(gulp.dest('./wwwroot'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.ts', ['ts']);
});

var nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['ts', 'watch'], function() {
    nodemon({script: './wwwroot/app.js'});
});