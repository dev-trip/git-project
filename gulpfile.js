var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync');

gulp.task('sass', function(){
	gulp.src(['app/sass/blocks/blocks.sass', 'app/sass/reset.sass'])
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}, 
		notify: false
	});
});


gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch(['app/sass/**/*.sass', 'app/sass/reset.sass'], ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});