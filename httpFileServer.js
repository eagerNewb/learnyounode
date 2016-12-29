const fs = require('fs')
const http = require('http')
const port = Number(process.argv[2])
const fileLoc = process.argv[3]

let server = http.createServer(function (request,response){
   let src = fs.createReadStream(fileLoc, 'utf8');
   			src.pipe(response) 

     	   // the response is the destination 
		   // you read the file from the source  - src
		   // and you pass the info from the file 
		   // as a http server response  


})
server.listen(port)

