module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch(['./dev/static/images/**/*.{png,jpg,gif}'], $.gulp.series('img'));
        $.gulp.watch('./dev/static/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('libsJS:dev','js:dev'));
    });
};
