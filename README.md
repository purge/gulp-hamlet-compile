# gulp-hamlet-compiler
> A hamlet-compoler plugin for gulp

Compile your [hamlet](http://hamlet.coffee/) templates with ease!

## Usage
```javascript
var gulp = require('gulp');
var hamlc = require('gulp-hamlet-compile');

gulp.task('hamlet', function () {
	gulp.src('./templates/**/*.haml')
		.pipe(hamlc())
		.pipe(gulp.dest('./build'));
});
```

## API

### hamlc(options)

#### options.exports

Type: ``String``

Export compiled template as (default ``module.exports``).

#### options.runtime

Type: ``String``

Runtime provider (default [hamlet-runtime](https://github.com/inductor-labs/hamlet-runtime)).

## References

See more examples on how to use hamlet [here](https://github.com/inductor-labs/hamlet#getting-started). Also check official tutorials [here](https://github.com/inductor-labs/hamlet-tutorials).

## License

[MIT](http://opensource.org/licenses/MIT)
