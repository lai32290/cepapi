const csvtojson = require('csvtojson')
	, fs = require('fs')
	, converter = new csvtojson.Converter()
	, file = './cep(formated).csv'
	;

converter.fromFile(file, (err, res) => {
	var writeStream = fs.createWriteStream('./cep.json');

	var jsons = res.map(item => JSON.stringify(item)).join('');
	jsons = `${jsons}`;

	fs.writeFile('./cep.json', jsons, () => {
		console.log('Convert completed!');
	});	
});