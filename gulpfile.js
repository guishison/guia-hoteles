'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

    gulp.task('sass', function(){
        gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
        done();
    })

    gulp.task('sass:watch', function(){
        gulp.watch('./css/*.scss', ['sass']);
    });


    
    gulp.task('browser-sync', function(){
        var files = ['./*.html', './css/*.css', './img/*.{png, jpg, gif}','./js/*.js']
        browserSync.init(files, {
            server: {
                baseDir: './'
            }
        });
    });

    
    gulp.task('sass:watch', function(){
        gulp.watch('./css/*.scss', ['sass']);
    });

  
    
    gulp.task('default', gulp.series('sass', function(){
        var files = ['./*.html', './css/*.css', './img/*.{png, jpg, gif}', './js/*.js']
        browserSync.init(files, {
            server: {
                baseDir: './'
            }
        });
    
        gulp.watch("./css/*.scss", gulp.series('sass'));
        gulp.watch('*.html').on('change', browserSync.reload);
    }));