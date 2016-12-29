const http = require('http')
const sumStream = require('concat-stream')
const url = process.argv[2]

let data = http.get(url, function callback(response){
	response.setEncoding('utf8')
	response.on("error", (error) => console.log(error))
	response.pipe(sumStream(function (data){
				console.log(data.length)
			console.log(data)
	}))
})