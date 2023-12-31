var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

function css_style(done) {
    gulp.src('./style/scss/style.scss')
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./style/css/'))
        .pipe(browserSync.stream());
    done();
}

function watchFiles() {
    gulp.watch("./style/scss/**/*", css_style)
    gulp.watch("./style/**/*.css", browserReload)
    gulp.watch("./style/**/*.js", browserReload)
    gulp.watch("./style/**/*.html", browserReload);
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "http://localhost:5173/"
        },
        port: 3000
    });
    done();
}

function browserReload (done) {
    browserSync.reload();
    done();
}

gulp.task('default', gulp.parallel(sync, watchFiles));
