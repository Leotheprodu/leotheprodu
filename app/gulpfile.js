const { src, dest, watch, parallel } = require('gulp');

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const cache =require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif =require('gulp-avif');

function css(done) {
    src('build/scss/**/*.scss') //ideantificar archivo de sass
        .pipe(plumber()) //para que siga ejecutando aunque hayan errores
        .pipe(sass()) //compilarlo
        .pipe(dest('src/')) //almacenar en hd

    done();
}

function dev(done){
    watch('build/scss/**/*.scss',css)
    done()
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('build/img/**/*.{jpg,png}')
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('src/assets/img'))

    done()
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    };
    
    src('build/img/**/*.{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('src/assets/img'))

    done()
}
function versionAvif(done) {
    const opciones = {
        quality: 50
    };
    
    src('build/img/**/*.{jpg,png}')
        .pipe(avif(opciones))
        .pipe(dest('src/assets/img'))

    done()
}



exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(css, dev);
exports.img = parallel(imagenes, versionWebp, versionAvif);


