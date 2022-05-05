
import gulp from 'gulp';
import uglifycss from 'gulp-uglifycss';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import connect from 'gulp-connect';
import tempSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(tempSass);

function uglyCss() {
	return gulp
		.src('src/style/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		// giv et andet navn under develpoment
		.pipe(gulp.dest('build/style'))
		.pipe(connect.reload());
};
function buildCss() {
	return gulp
		.src('src/style/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/style'))
};

function uglyJS() {
	return gulp
		.src('src/scripts/**/*.js')
		.pipe(concat('script.js'))
		.pipe(uglify())
		// giv et andet navn under develpoment
		.pipe(gulp.dest('build/scripts'))
		.pipe(connect.reload());
};
function uglyJSDOM() {
	return gulp
		.src('src/scripts/api/*.js')
		.pipe(concat('productDOM.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/scripts'))
		.pipe(connect.reload());
};

function minifyImg() {
	return gulp
		.src('src/images/**/*')
		.pipe(imagemin())
		// giv et andet navn under develpoment
		.pipe(gulp.dest('build/images'))
		.pipe(connect.reload());
};
function buildImages() {
	return gulp
		.src('src/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'))
};

function minifyHtml() {
	return gulp
		.src('src/pages/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		// giv et andet navn under develpoment
		.pipe(gulp.dest('build'))
		.pipe(connect.reload());
};
function buildHtml() {
	return gulp
		.src('src/pages/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('build'))
};

function startConnection(cb) {
	connect.server({
		root: 'build',
		livereload: true,
		port: 3000,
	});
};

function watchStyle() {
	gulp.watch(
		'src/style/**/*.scss',
		{ events: 'all', ignoreInitial: false },
		function (cb) {
			uglyCss()
			cb()
		}
	);
};

function watchScript() {
	gulp.watch(
		'src/scripts/**/*.js',
		{ events: 'all', ignoreInitial: false },
		function (cb) {
			uglyJS()
			uglyJSDOM()
			cb()
		}
	);
};

function watchPages() {
	gulp.watch(
		'src/pages/*.html',
		{ events: 'all', ignoreInitial: false },
		function (cb) {
			minifyHtml()
			cb()
		}
	);
};

function watchImages() {
	gulp.watch(
		'src/images/**/*',
		{ events: 'all', ignoreInitial: false },
		function (cb) {
			minifyImg()
			cb()
		}
	);
};

export { uglyCss, uglyJS, uglyJSDOM, minifyImg, minifyHtml, startConnection };

export const watcher = gulp.parallel(
	watchStyle,
	watchScript,
	watchPages,
	watchImages
);

export default gulp.parallel(watcher, startConnection);
export const build = gulp.parallel(buildHtml, buildCss, buildJS, buildImages)