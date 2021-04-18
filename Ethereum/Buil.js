const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


const buildPath = path.resolve(__dirname,'newsbuild');
fs.removeSync(buildPath);

const pathA = path.resolve(__dirname,'Contract', 'Newsletter.sol');
const solA = fs.readFileSync(pathA, 'utf8');


const input = {
  sources: {
    'Newsletter.sol': solA,
  }
};

const output = solc.compile(input, 1).contracts;

fs.ensureDirSync(buildPath);

for (let c in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, c.replace(':','') + '.json' ),
        output[c]
    );
}