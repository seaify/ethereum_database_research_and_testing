//The following is an example of how to add and retrieve json data from leveldb via the nodejs high level leveldb wrapper
//Firstly reference the node library
var level = require('level')

var db = level('./tpmccallum')

var valueStream = db.createValueStream()
valueStream.on('data', function (data){
	console.log("value=", data);
});