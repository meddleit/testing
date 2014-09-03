var gulp = require("gulp");
var concat = require("gulp-concat");
var prettify = require("gulp-js-prettify");

gulp.task("concat", function() {
	return
	gulp.src("tests/**/*.js")
		.pipe(concat("all.js"))
		.pipe(prettify())
		.pipe(gulp.dest("./"));
});