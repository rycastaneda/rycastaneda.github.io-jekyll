/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('lint', function() {
    return gulp.src('app/{scripts,elements}/**/{*.js,*.html}')
      .pipe(jshint.extract())
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

// Watch files for changes & reload
gulp.task('default', ['lint'], function () {
    browserSync.init({
        port: 5000,
        logPrefix: 'PSK',
        snippetOptions: {
            rule: {
                match: '<span id="browser-sync-binding"></span>',
                fn: function (snippet) {
                    return snippet;
                }
            }
        },
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    // gulp.watch(['app/**/*.html'], reload);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch(['app/styles/**/*.css'], [reload]);
    gulp.watch(['app/elements/**/*.css'], ['', reload]);
    gulp.watch(['app/{scripts,elements}/**/{*.js,*.html}'], ['lint', reload]);
    gulp.watch(['app/images/**/*'], reload);
});

