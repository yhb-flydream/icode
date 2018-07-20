const gulp = require('gulp'),
    clean = require('gulp-clean'),
    webpack = require('webpack');

// 清理
gulp.task('clean', function() {
    return gulp.src(['disk'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('default', ['clean'], function(done) {
    webpack(require('./webpack.production.config.js'), function(err, stats) {
        console.log(stats.toString());
    });
});
