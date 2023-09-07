const fs = require('fs');
let rawdata = fs.readFileSync('dataset_user.json');
let raw_datset = JSON.parse(rawdata);
let index = 0;
const randomCount = 1;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_';
const symbolMap = {
    '=' : ['=','==','equals', 'equal to', 'same', 'same as' ],
    '>' : ['>', 'greater than', 'more than', 'bigger than'],
    '<' : ['<', 'less than', 'fewer than', 'lesser than' ,'smaller than'],
    '!=': ['!=', '!==' , 'not equals' , 'not same as', 'not same'],
    '>=': ['>=', '>==', 
            'greater than or equals to' , 'greater or equals', 'greater or same as', 
            'same or greater than', 'equals or greater than','equal to or greater than',
            'more than or equals', 'equals or more than' ],
    '<=': ['<=', '<==', 
           'less than or equals to' , 'lesser or equals', 'smaller or same as', 
           'same or smaller than', 'equals or less than','equal to or less than',
           'fewer than or equals', 'equals or smaller than' ],
}

//clearing and initializing file writer
fs.writeFileSync('dataset.json', '');
let file = fs.createWriteStream('dataset.json', {flags: 'a'});
file.write('[')

//parsing and adding random data
raw_datset.forEach(x => {
    x.inp.forEach(y => {
        writeToFile({id: index++, "translation" : {cmd:x.cmd, inp:y}});
        if(x.cmd.includes("'")){
            createRandomData(x.cmd, y);
        }
        
    })
});

file.write(']')

/////////supporting methods//////////
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
       writeToFile({id: index++, "translation" : {cmd:newCMD, inp:newInp}});
       i++;
    }
}

function writeToFile(dat){
    const finalDat = {
        text : `### input: "${dat.translation.inp}" ### output: "${dat.translation.cmd}"`
    }
    file.write((index == 1 ? '' : ', ')+JSON.stringify(finalDat));
}

