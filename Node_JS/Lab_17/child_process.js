const child_process = require('child_process');

child_process.exec('dir',(err,stdout,stdin)=>{
    console.log(stdout);
});

child_process.execFile('node',['--version'],(error,stdout,stderr)=>{
    console.log(stdout);
});