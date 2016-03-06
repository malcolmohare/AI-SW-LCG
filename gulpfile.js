var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', ['ts', 'watch']);


gulp.task('buildServer', function() {
	var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
	return gulp.src(path.resolve('./server/**/*.ts'))
	           .pipe(ts(tsProject))
			   .js
			   .pipe(gulp.dest(path.resolve('./server')))
});

// Compile typescript sources
gulp.task('ts', function() {
    gulp.src(['src/**/*.ts'])
	    .pipe(ts({module: 'commonjs'}))
		.js
		.pipe(gulp.dest('./wwwroot'));
});

gulp.task('watch', function() {
    gulp.watch('./server/**/*.ts', ['ts']);
});

var nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['ts', 'watch'], function() {
    nodemon({script: './server/app.js'});
});