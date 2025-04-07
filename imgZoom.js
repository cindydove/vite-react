const {Jimp} = require('jimp');
const fs = require("fs");

async function resizeImage(inputPath, outputPath) {
    try {
        // 读取图片
        const image = await Jimp.read(inputPath);

        // 获取图片的宽度和高度
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        console.log(`原始宽度: ${width}, 原始高度: ${height}`);

        // 计算新的宽度和高度，使较长的一边等比缩放到 612 像素
        let newWidth, newHeight;
        if (width > height) {
            newWidth = 612;
            newHeight = Math.round((height / width) * 612);
        } else {
            newHeight = 612;
            newWidth = Math.round((width / height) * 612);
        }

        console.log(`新的宽度: ${newWidth}, 新的高度: ${newHeight}`);

        // 等比缩放图片
        image.resize({w:newWidth, h:newHeight});

        // // 保存缩放后的图片
        await image.write(outputPath);
        console.log('图片缩放成功');
    } catch (error) {
        console.error('处理图片时出错:', error);
fs.writeFileSync('output-error.json', JSON.stringify(error, null, 2));

    }
}

// 使用示例
resizeImage('test-zoom.jpeg', 'zoom-img.jpeg');
