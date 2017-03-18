var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, function(err, contents){
	if (err) {
		console.log('error');
	}
	else {
		var getline = contents.toString().split('\n');
	}
	console.log(getline.length-1);
});

