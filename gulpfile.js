const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('src', () => {
    return gulp.src([
    	'src/**/*.js'
    	])
        .pipe(babel({
            presets: ['es2016']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task("libs", () => {
    return gulp.src([
            'material-design-lite/**/*',
            'requirejs/require.js',
            'knockout/build/output/knockout-latest.js'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task('default',['src', 'libs']);