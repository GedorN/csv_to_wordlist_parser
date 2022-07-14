/**
 * Developed by Gedor Neto
 * Email: gedor.silvaneto@gmail.com
 */
const csv=require('csvtojson')
var fs = require('fs');

var args = process.argv
let csvFilePath = args[2]
const verbose = args.indexOf("--non-verbose") !== -1 ? false : true



async function main() {
    let paramsSearched = new Array();
    for (let i = 3; i < args.length; i++) {
        paramsSearched.push(args[i]);
    }
    const paramsLen = paramsSearched.length;
    let jsonArray;
    const length =  jsonArray.length
    let writeString = '';
    try {
        jsonArray=await csv().fromFile(csvFilePath);
        console.log("[+] Total lines length: ", length)
    } catch (e) {
        console.log("[-] Cannot open file:  ", csvFilePath);
        console.log(e)
    }
    for (let i = 0; i < length; i++) {
        if (verbose) {
            console.log(`[${i + 1}/${csvLen}] Processing...`)
        } else {
            const percentage = ((i/length) * 100);
            if ((percentage % 10) == 0) {
                console.log(`${((i/length) * 100)}% Processed`)
            }
        }
        for (let j = 0; j < paramsLen; j++) {
            writeString+= jsonArray[i][paramsSearched[j]]
            writeString+='\n';
        }

    }
    fs.writeFile('output.txt', writeString, function (err) {
        if (err) return console.log(err);
        console.log('[+] File created: output.txt');
    });
}


main();