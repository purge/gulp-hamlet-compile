var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var hamlc = require('hamlet-compiler');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-hamlet-compile';

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, "Streaming not supported"));
      return cb();
    }

    var str = file.contents.toString();
    var filePath = file.path;

    try {
      file.contents = new Buffer(hamlc.compile(str, options));
      file.path = gutil.replaceExtension(filePath, '.js');
      this.push(file);
    } catch (err) {
      err.fileName = err.fileName || filePath;
      this.emit('error', new PluginError(PLUGIN_NAME, err, {
        fileName: filePath
      }));
    }

    cb();
  });
};
