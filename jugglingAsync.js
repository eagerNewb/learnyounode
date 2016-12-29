const http = require('http')
const concatStream = require('concat-stream')

const urlF = process.argv[2] //First
const urlS = process.argv[3] //Second
const urlT = process.argv[4] //Third

let data = function (url){
	  return new Promise((resolve,reject)=>{
		http.get(url, function callback(response){
    		  response.setEncoding('utf8')
			  response.on("error", (error) => reject(error))
			  response.pipe(concatStream( function (data){
			  	 resolve(data)
			  }))
		})
	})
}

Promise.all([data(urlF),data(urlS),data(urlT)]).then(arr => {
	arr.forEach((string) => { console.log(string)} )
}) 
