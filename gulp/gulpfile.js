var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-ruby-sass')
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var files = {
    src: {
    	img: './src/img/*.*',
        sass: './src/sass/*.scss',
        less: './src/less/*.less'
    },
    dist: {
    	img: './dist/img',
        css: './dist/styles'
    }
}
gulp.task('less', function() {
    gulp.src(files.src.less)
        .pipe(less())
        .pipe(gulp.dest(files.dist.css))
        .pipe(reload({
            stream: true
        }));
})
gulp.task('sass', function() {
    gulp.src(files.src.sass)
        .pipe(less())
        .pipe(gulp.dest(files.dist.css))
        .pipe(reload({
            stream: true
        }));
})
gulp.task('images', function () {
    gulp.src(files.src.img)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(files.dist.img))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist'
        }
    })
    gulp.watch(files.src.img, ['images']);
    gulp.watch(files.src.sass, ['sass']);
    gulp.watch(files.src.less, ['less']);
});
gulp.task('auto', function() {
	gulp.watch(files.src.img, ['images']);
    gulp.watch(files.src.sass, ['sass']);
    gulp.watch(files.src.less, ['less']);
});

gulp.task('default', ['auto']);