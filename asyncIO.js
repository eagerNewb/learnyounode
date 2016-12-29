function readFss(file) {
	return new Promise((resolve, reject) => {
		const fs = require('fs');

		data = fs.readFile(file, 'utf8',function callback(err, data){
		 	if(err){ console.log(err)}else{resolve(data);}
		})
	})
}

let file = process.argv[2];

readFss(file).then((file) => { //promise return
	let fileSt = file.split('\n');
	console.log(fileSt.length-1);
}, function(err) {

  console.log("it broke"); 

});

