const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', () => gulp.src('**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build')));

gulp.task('financs', ['build', 'testServerJS'], () => {
  process.exit(0);
});
