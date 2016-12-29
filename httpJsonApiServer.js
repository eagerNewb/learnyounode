const http = require('http')
const port = Number(process.argv[2])
const url = require('url')
url.parse('/api/parsetime?iso=1',true)

const server = http.createServer(function (request, reponse){
			
			if(request.method == 'GET')


}).listen(port)
