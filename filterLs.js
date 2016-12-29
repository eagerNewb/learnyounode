var file = process.argv[2];
var ext = "."+process.argv[3];
var fs = require('fs');
var path =require('path');

fs.readdir(file, function callback(err,list){
	if(err) return err;
	else{ 
		// cosnsole.log(list);
		list.forEach(function(val){
			if(path.extname(val) === ext){
				console.log(val);
			}
		})
	}
})
