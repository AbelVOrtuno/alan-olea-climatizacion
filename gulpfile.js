const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Copiar HTML
function html() {
  return src('src/**/*.html')
    .pipe(dest('dist'));
}

// Compilar SASS
function css() {
  return src('src/sass/app.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
        quietDeps: true
      }).on('error', sass.logError)
    )
    .pipe(dest('dist/css'));
}

// Desarrollo
function dev() {
  watch('src/**/*.html', series(html));
  watch('src/sass/**/*.scss',series(css));
  watch('src/js/**/*.js', js);
}

function js() {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js'));
}

// Build
exports.build = series(html, css, js);
exports.dev = dev;
exports.default = exports.build;
