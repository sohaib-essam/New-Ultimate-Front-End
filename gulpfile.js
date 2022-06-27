// Gulp Packs
let gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer"),
    pug = require("gulp-pug"),
    sassCompile = require("gulp-sass")(require("sass")),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify"),
    zip = require('gulp-zip'),
    imagemin = require('gulp-imagemin');

//HTML
gulp.task("html", function () {
  return gulp
    .src("project/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(notify("HTML Updated"))
});

// CSS
gulp.task("css", function () {
  return gulp
    .src(["project/css/**/*.css", "project/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sassCompile({ outputStyle: "compressed" }))
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify({message: 'CSS Updated', onLast: true}))
});

// JS
gulp.task("js", function () {
  return gulp
    .src("project/js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("JS Updated"))
});

// Minify Images
gulp.task("minimgs", function () {
  return gulp
    .src('project/imgs/*')
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
    ]))
    .pipe(gulp.dest('dist/imgs'))
    .pipe(notify({message: "JS Updated", onlast: true}))
})

// Compress Files
gulp.task("compress", function () {
  return gulp.src('dist/**/*.*')
  .pipe(zip('dist.zip'))
  .pipe(gulp.dest('.'))
  .pipe(notify("Files Compressed"))
})

// Watch
gulp.task("watch", function () {
  gulp.watch('project/**/*.pug', gulp.series('html'));
  gulp.watch('project/css/**/*.scss', gulp.series('css'));
  gulp.watch('project/js/*.js', gulp.series('js'));
});