var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs');

gulp.task('sass', function(){
	gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(concat('main.css'))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src([
			'app/libs/jquery/jquery.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}, 
		notify: false
	});
});


gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});