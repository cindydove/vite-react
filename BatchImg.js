const fs = require('fs');
const path = require('path');
const {Jimp} = require('jimp');

// 定义图片文件夹路径和输出文件夹路径
const inputFolderPath = './抠图后';
const outputFolderPath = './output/机油商品主图V2';

batchImg(inputFolderPath,outputFolderPath)

function batchImg(inputPath, outputFolderPath) {
    // 确保输出文件夹存在
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

// 遍历文件夹中的所有文件
    fs.readdir(inputFolderPath, (err, files) => {
        if (err) {
            return console.error('无法扫描目录: ' + err);
        }

        files.forEach((file,index) => {
            const filePath = path.join(inputFolderPath, file);
            const fileExt = path.extname(file).toLowerCase();

            // 检查文件是否为图片（支持的格式：jpg, jpeg, png）
            if (['.jpg', '.jpeg', '.png'].includes(fileExt)) {
                processImage(filePath, outputFolderPath);
            }

        });
    });
}

async function processImage(inputPath, outputFolderPath) {
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

        // 构建输出文件路径
        const fileName = path.basename(inputPath);
        const outputPath = path.join(outputFolderPath, fileName);

        overlayImages('纯色图.jpeg',image,outputPath)

        // // 保存缩放后的图片
        // await image.write(outputPath);
        // console.log(`图片 ${fileName} 处理成功`);
    } catch (error) {
        console.error(`处理图片 ${inputPath} 时出错:`, error);
    }
}

async function overlayImages(backgroundPath, foregroundImg, outputPath) {
    try {
        // 读取背景图片
        const background = await Jimp.read(backgroundPath);
        const bgWidth = background.bitmap.width;
        const bgHeight = background.bitmap.height;

        // 读取前景图片

        console.log("dx---foregroundImg",foregroundImg)
        const foreground = foregroundImg
        const fgWidth = foreground.bitmap.width;
        const fgHeight = foreground.bitmap.height;

        // 计算前景图片在背景图片上的位置，使其中心点重合
        const x = (bgWidth - fgWidth) / 2;
        const y = (bgHeight - fgHeight) / 2;

        // 将前景图片绘制到背景图片上
        background.composite(foreground, x, y);

        // 保存结果图片
        await background.write(outputPath);
        console.log('图片堆叠成功');
    } catch (error) {
        console.error('处理图片时出错:', error);
    }
}
