const fs = require('fs');

fs.exists('display.js',(data)=>{
	console.log(data);
});

fs.stat('display.js',(err,data)=>{
	console.log(data);
});

fs.readFile('display.js',(err,data)=>{
	console.log(data);
});

fs.readFile('display.js',(err,data)=>{
	console.log(data.toString());
});

fs.writeFile('second.js','Krisha',(err,data)=>{ 
});

fs.appendFile('second.js',' Busa',(err,data)=>{
});

fs.unlink('first.txt',()=>{
});

fs.rename('app.js','displayer.js',()=>{
});

console.log("File_System !!");