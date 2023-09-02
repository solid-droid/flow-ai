const fs = require('fs');
let rawdata = fs.readFileSync('dataset_user.json');
let raw_datset = JSON.parse(rawdata);
let dataset = [];
let index = 0;
const randomCount = 1;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_';

raw_datset.forEach(x => {
    x.inp.forEach(y => {
        dataset.push({id: index++, "translation" : {cmd:x.cmd, inp:y}})
        if(x.cmd.includes("'")){
            createRandomData(x.cmd, y);
        }
    })
});

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomString(length) {
    var result  = '';
    for (var i = 0; i < length; ++i) {
        result += characters[Math.floor(characters.length * Math.random())];
    }
    return result;
}

function createRandomData(cmd,inp){
    let i =0;
    let strings = cmd.match(/'.*?'/g)
    while(i < randomCount){
       let newStrings = strings.map(()=> randomString(randomNum(3,30)));
       let newCMD = cmd;
       let newInp = inp;
       newStrings.forEach((str,_ind)=>{
            newCMD = newCMD.replaceAll(`${strings[_ind]}`, `'${str}'`);
            newInp = newInp.replaceAll(`${strings[_ind]}`, `'${str}'`);
       })
       dataset.push({id: index++, "translation" : {cmd:newCMD, inp:newInp}})
       i++;
    }
}

let data = JSON.stringify(dataset);
fs.writeFileSync('dataset.json', data);