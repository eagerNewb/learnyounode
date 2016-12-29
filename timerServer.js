const net = require('net')
const port = Number(process.argv[2])
let date = new Date() // "2013-07-06 17:42" format
let month = date.getMonth()+1
date = date.getFullYear()+"-"+zeroFill(month)+"-"+zeroFill(date.getDate())+" "+zeroFill(date.getHours())+":"+zeroFill(date.getMinutes());
// console.log(date.slice("\n"))
server = net.createServer(function (socket) {

     socket.write(date.toString()+ '\n');
     // socket.write("\n") 
     socket.end();

}).listen(port) // analogous to server.listen(port) on a new line without .
 
 function zeroFill (i) {
   return (i < 10 ? '0' : '') + i //concatenates the separete date pieces with a 0 as the first char -02-07 -mm- -dd-
 }