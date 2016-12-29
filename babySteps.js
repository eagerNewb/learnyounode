// console.log(process.argv);
var karlos = 0;
for(var i = 0; i < process.argv.length; i++){
	 // if(process.argv[i] > 2){
	 karlos += Number(process.argv[i]);
	// }
}
console.log(karlos);

