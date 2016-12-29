const moduled = require('./modules/mymodule.js');
const dir = process.argv[2];
const ext = process.argv[3];

 


	// let reduced = data.reduce(callbackfn: Function, initialValue?: any)
moduled(dir,ext, function callback(err, data) {
		if(err){
		  console.log(err,data);
		}else{
		  // console.log(data);
		  data.reduce(function(ab,ba) {
				let elem = ba.split(".");
				if(elem[1] == ext) console.log(elem[0].toString()+"."+elem[1].toString().split("\n"));
			},0);

		}
});


