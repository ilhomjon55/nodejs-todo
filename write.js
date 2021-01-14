const path = require('path');
const fs = require('fs');
const util = require('util');

const { data } = require('./index.js');

const sourcePath = path.resolve('./mydata.txt');

const write = util.promisify(fs.writeFile);

async function main(path, data) {
	write(path, JSON.stringify(data));
}

main(sourcePath, data);
