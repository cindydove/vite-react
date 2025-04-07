const sharp = require('sharp');

// 假设你有一个816x816的纯色图片文件名为'original.jpg'
const inputFile = '纯色图.jpeg';
const outputFile = '纯色图612*612.jpeg';

// 使用sharp进行裁剪
sharp(inputFile)
    .extract({ width: 612, height: 612, left: 102, top: 102 }) // 裁剪参数
    .toFile(outputFile, (err, info) => {
        if (err) {
            console.error('Error cropping image:', err);
        } else {
            console.log('Image cropped successfully:', info);
        }
    });
