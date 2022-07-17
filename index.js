import { existsSync, mkdirSync, appendFile, copyFile } from 'fs';

let dir  = 'C:\\Saya\\'
let file = 'D:\\'

if(!existsSync(dir)){
    mkdirSync(dir)
    appendFile(`${dir}message.txt`, 'data to append', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
}
if(existsSync(dir) === true){
    copyFile(`${file}saya.txt`, `${dir}saya.txt`, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
}else{
    copyFile(`${dir}saya.txt`, `${file}saya.txt`, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
}
 