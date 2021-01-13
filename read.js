const path = require('path');
const fs = require('fs');
const util = require('util');

const sourcePath = path.resolve('./mydata.txt');

const read = util.promisify(fs.readFile);

async function main(path) {
	const data = JSON.parse(await read(path, 'utf8'));

	console.table(data);
}

main(sourcePath);
