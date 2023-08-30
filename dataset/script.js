const fs = require('fs');
let rawdata = fs.readFileSync('dataset_user.json');
let raw_datset = JSON.parse(rawdata);
let dataset = [];
let index = 0;
raw_datset.forEach(x => {
    x.inp.forEach(y => {
        dataset.push({id: index++, "translation" : {cmd:x.cmd, inp:y}})
    })
});
let data = JSON.stringify(dataset);
fs.writeFileSync('dataset.json', data);