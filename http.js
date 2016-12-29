const http = require('http')
const url = process.argv[2]

let data = http.get(url, function callback(response){
	response.setEncoding('utf8')
	response.on("error", (error) => console.log(error))
	response.on("data" , (data) => console.log(data))
})