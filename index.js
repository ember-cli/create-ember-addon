#!/usr/bin/env node

var execa = require('execa');
var whoRanMe = require('who-ran-me');

var args = ['addon'];

// yarn reports the bin script from who-ran-me
if (['yarn', 'create-ember-addon'].includes(whoRanMe())) {
  args.push('--yarn');
}

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

execa('ember', args, { stdio: 'inherit' });
