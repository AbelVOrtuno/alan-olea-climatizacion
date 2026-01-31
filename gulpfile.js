
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compilar SASS
function css() {
  return src('src/sass/app.scss')
    .pipe(sass({ outputStyle: 'expanded', quietDeps: true }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

// Vigilar cambios (solo desarrollo)
function dev() {
  watch('src/sass/**/*.scss', css);
}

// 🔑 TAREA BUILD (la que Netlify necesita)
function build() {
  return css();
}

exports.css = css;
exports.dev = dev;
exports.build = series(css); // 👈 CLAVE
exports.default = build;     // opcional pero recomendado 
