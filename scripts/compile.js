var Compiler = require("es6-module-transpiler").Compiler,
    fs = require('fs'),
    filenames = [ 'presto', 'presto/util'];

var outputs = [];

filenames.forEach(function(filename) {
  console.log('Compiling', filename);

  var source = fs.readFileSync('lib/'+filename+'.js'),
      compiler = new Compiler(source, filename);

  outputs.push(compiler.toAMD());
});

fs.writeFileSync('dist/presto.js', outputs.join("\n"));
