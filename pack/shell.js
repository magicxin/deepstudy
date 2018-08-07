const shell = require('shelljs');
//const signale = require('signale');
//const { Signale } = signale;
const tasks = [
  'build-js',
  'build-css'
];

tasks.forEach(task => {
//signale.start(task);
//const interactive = new Signale({ interactive: true });
//interactive.pending(task);
  shell.exec(`npm run ${task}`); //  --silent 无提示
//interactive.success(task);
});
