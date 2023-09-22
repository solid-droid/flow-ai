const fs = require('fs');
let rawdata = fs.readFileSync('dataset_user.json');
let raw_datset = JSON.parse(rawdata);
const output_file = '../server_gptBased/context_data/dataset.txt';

//clearing and initializing file writer
fs.writeFileSync(output_file, '');
let file = fs.createWriteStream(output_file, {flags: 'a'});

//parsing and adding random data
raw_datset.forEach(x => {
    x.inp.forEach(y => {
        file.write(`Question: ${y} \nAnswer: ${x.cmd} \n\n`)      
    })
});

