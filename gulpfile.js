const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compilar SASS
function css() {
  return src('src/sass/app.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sass({ quietDeps: true }))
    .pipe(dest('dist/css'));
} 

// Vigilar cambios
function dev() {
  watch('src/sass/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;
