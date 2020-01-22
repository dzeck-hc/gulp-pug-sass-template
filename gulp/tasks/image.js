const
	imgPATH 			= {
									"input": ["./dev/static/images/**/*.{png,jpg,gif,ico,svg}"],
									"output": "./build/images/"
									};

module.exports = function () {
		$.gulp.task('img', () => {
				return $.gulp.src(imgPATH.input)
						.pipe($.gulp.dest(imgPATH.output));
		});
};

