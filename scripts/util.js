var fs = require('fs'),
    Compiler = require('es6-module-transpiler').Compiler;

var copy = function(from, to) {
  console.log('Copying', from, 'to', to);
  var src = fs.readFileSync(from);
  fs.writeFileSync(to, src);
};

var compile = function(name, src) {
  console.log('Compiling', name);
  var compiler = new Compiler(src, name);
  return compiler.toAMD();
};

var compileFile = function(name, path) {
  var src = fs.readFileSync(path+'.js');
  return compile(name, src);
};

var compileManyFiles = function(files) {
  var outputs = [];

  files.forEach(function(file) {
    outputs.push(compileFile(file[0], file[1]));
  });

  return outputs.join("\n");
};

exports.copy = copy;
exports.compile = compile;
exports.compileFile = compileFile;
exports.compileManyFiles = compileManyFiles;
exports.write = fs.writeFileSync;
exports.read = fs.readFileSync;
