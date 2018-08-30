#! /usr/bin/env node

require('shelljs/global');
var exec = require('child_process').exec;
var name = process.argv[2];
var shell = require("shelljs");
console.log('hello ,' + name);

var child = exec('echo hello ' + name, function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});

mkdir('-p', 'out/Release');

shell.exec('echo hello' + name);
