'use strict';

var gulp = require("gulp"),
	pug = require("gulp-pug"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	// connect = require("gulp-connect");
	browserSync  = require('browser-sync');

	sass.compiler = require("node-sass");

// gulp.task("connect", function () {
// 	connect.server({
// 		port: 1337,
// 		livereload: true,
// 		root: './dist/'
// 	});
// });

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };

gulp.task("pug", function () {
	return gulp.src("src/*.pug")
		.pipe(pug({pretty: '	'}))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({ stream: true }))
		// .pipe(connect.reload());
});



gulp.task("sass", function () {
	return gulp.src('src/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({ stream: true }))
		// .pipe(connect.reload());
});


gulp.task('compress', function() {
	return  gulp.src('src/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({ stream: true }))

});


gulp.task("watch", function () {
	gulp.watch("src/**/*.pug", gulp.parallel('pug'));
	gulp.watch("src/**/*.scss", gulp.parallel('sass'));
	gulp.watch("src/**/*.js", gulp.parallel('compress'));
});


gulp.task("default", gulp.parallel("pug", "sass", "compress", "browser-sync", "watch") );
