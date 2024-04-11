const gulp = require('gulp');
const replace = require('gulp-replace');
const { exec } = require('child_process');
const rename = require('gulp-rename');


// Tarea para ejecutar npm run prod
gulp.task('run-prod', function (cb) {
    exec('npm run prod', function (err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        cb(err);
    });
});

// Tarea para editar el archivo index.html
gulp.task('edit-index', function () {
    return gulp.src('./dist/index.html') // Ruta al archivo index.html
        .pipe(replace(/<title>.*<\/title>/g, function (match) {
            return match + '\n<meta name="description" content="Explora mi web personal para obtener información detallada sobre mi experiencia, habilidades y proyectos pasados. Descubre cómo puedo ayudarte en tu próximo proyecto. ¡Contáctame hoy para empezar!">';
        }))
        .pipe(gulp.dest('./dist/')); // Ruta de destino del archivo editado
});

// Tarea para mover archivos existentes de ./dist/* a ../page/*
gulp.task('move-files', function () {
    return gulp.src(['./dist/**/*', // Ruta de origen
    //carpetas excluidas:
    '!./dist/img/**', 
    '!./dist/fonts/**', 
    '!./dist/favicon.ico']
)
        .pipe(rename(function (path) {
            // Cambia el directorio base a ../page/
            path.dirname = '../page/' + path.dirname;
        }))
        .pipe(gulp.dest('./')); // Ruta de destino
});

// Tarea predeterminada que ejecuta las tareas edit-index y run-prod en secuencia
gulp.task('default', gulp.series(
    'run-prod',
    'edit-index',
    'move-files'
));
