
/*const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compilar SASS
function css() {
  return src('src/sass/app.scss')
    .pipe(sass({ outputStyle: 'expanded', quietDeps: true }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

// Vigilar cambios (solo desarrollo)
function dev() {
  watch('src/sass/*.scss', css); 
}

// 🔑 TAREA BUILD (la que Netlify necesita)
/*function build() {
  return css();
}

exports.css = css;
exports.dev = dev;
exports.build = series(css); // 👈 CLAVE
exports.default = build;     // opcional pero recomendado */

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// CSS
function css() {
  return src('src/sass/app.scss')
    .pipe(sass({ outputStyle: 'expanded', quietDeps: true }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

// HTML
function html() {
  return src('src/**/*.html')
    .pipe(dest('dist'));
}

// DEV
function dev() {
  watch('src/sass/**/*.scss', css);
  watch('src/**/*.html', html);
}

// BUILD
exports.build = series(html, css);
exports.dev = dev;
exports.default = exports.build;
