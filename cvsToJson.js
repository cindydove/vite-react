const csv = require('csv-parser');
const fs = require('fs');

function convertCSVToJSON(csvFilePath, jsonFilePath) {
    const jsonArray = [];
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
            console.log("data",Object.keys(data)[0],data[Object.keys(data)[0]])
            jsonArray.push(data[Object.keys(data)[0]]);
        })
        .on('end', () => {
            fs.writeFileSync(jsonFilePath, JSON.stringify(GroupedArray(jsonArray), null, 2));
            console.log(`CSV 文件 ${csvFilePath} 已成功转换为 JSON 文件 ${jsonFilePath}`);
        });
}

const csvFilePath = './1734437290354.csv'; // 替换为你的 CSV 文件路径
const jsonFilePath = 'output-urlPath.json'; // 替换为你想要保存的 JSON 文件路径

convertCSVToJSON(csvFilePath, jsonFilePath);

function GroupedArray(jsonArray) {
    const groupedArray = [];
    for (let i = 0; i < jsonArray.length; i += 5) {
        groupedArray.push(jsonArray.slice(i, i + 5));
    }
    return groupedArray
}
