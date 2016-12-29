const map = require('through2-map')
const http = require('http')
const port = Number(process.argv[2])

let server = http.createServer(function (request,response){
	if(request.method == 'POST') {
	  request.pipe(map(function (fileChunk){
	  	 let stringified = fileChunk.toString()
		 return stringified.toUpperCase() 	
		 // return transformed file and 
		 //pipe it to destination - response
	  })).pipe(response)
	}else{
		request.end('send some POSTs my way\n')
	}

})
server.listen(port)

