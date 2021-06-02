const { src, watch, dest} = require('gulp');
const sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
const browserSync = require ('browser-sync').create(); 

function style () {
        return src('./css/**/*.scss')     // берём все SASS-файлы 
        .pipe(sassGlob())
        .pipe(sass())                    // компилируем SASS в CSS 
        .pipe(dest('./css/')) // выгружаем результат
        .pipe(browserSync.stream());
}

function watcher () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./css/**/*.scss', style);
    watch('./*html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watcher;