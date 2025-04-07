const yauzl = require('yauzl');
const fs = require("fs");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function zipToCsv(zipFilePath, csvFilePath) {
    const fileEntries = [];
    return new Promise((resolve, reject) => {
        yauzl.open(zipFilePath, {lazyEntries: true}, (err, zipfile) => {
            if (err) {
                return reject(err);
            }
            zipfile.readEntry();
            zipfile.on('entry', (entry) => {
                const parts = entry.fileName.split('/');
                const level = parts.length - 1;

                const fileNameList = entry.fileName.split('/')
                if( fileNameList.length === 4 &&  fileNameList[3]){
                    const entryObj = {
                        oneLevel: fileNameList[0],
                        twoLevel: fileNameList[1],
                        threeLevel: fileNameList[2],
                        fourLevel: fileNameList[3],
                        // 可以根据需要添加更多属性，如文件大小等
                    };
                    fileEntries.push(entryObj);
                }
                zipfile.readEntry();


            });
            zipfile.on('end', (jsonData) => {
                console.log("dx---jsonData",jsonData)
                const csvWriter = createCsvWriter({
                    path: csvFilePath,
                    header: [
                        {id: 'oneLevel', title: 'oneLevel'},
                        {id: 'twoLevel', title: 'twoLevel'},
                        {id: 'threeLevel', title: 'threeLevel'},
                        {id: 'fourLevel', title: 'fourLevel'},
                        // 如果有更多属性，可以添加更多的header对象
                    ]
                });
                csvWriter.writeRecords(fileEntries).then(() => {
                    resolve('CSV file has been created successfully.');
                }).catch((csvErr) => {
                    reject(csvErr);
                    console.log("dx--error",csvErr)
                });
                fs.writeFileSync('output-path.json', JSON.stringify(jsonData, null, 2));
            });
        });
    });
}

const zipFilePath = '抖音_version30.3.0_iPhoneX_正常模式.zip';
const csvFilePath = 'output-path.csv';
zipToCsv(zipFilePath, csvFilePath).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

