const fs = require('fs');

function readFss(file) {
	  
	  let data = fs.readFile(file, 'utf8', (err,data) => {
		if(err) throw err;
		return data;
		  // console.log(file);

	  })

}

let file = process.argv[2].toString();

// readFss(file).then((file) => { //promise return
// 	console.log(file);
// 	fileStr = file.toString();
// 	fileSt = file.split('\n');
// 	console.log(fileSt.length-1);
// }, function(err) {

//   console.log("it broke"); 

// });

let buffered = readFss(file);
console.log(buffered);
// let fileStr = buffered.toString();
// let	fileSt = fileStr.split('\n');
// 	console.log(fileSt.length-1);


