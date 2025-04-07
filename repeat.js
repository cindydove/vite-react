const {Jimp} = require('jimp');

async function overlayImages(backgroundPath, foregroundPath, outputPath) {
    try {
        // 读取背景图片
        const background = await Jimp.read(backgroundPath);
        const bgWidth = background.bitmap.width;
        const bgHeight = background.bitmap.height;

        // 读取前景图片
        const foreground = await Jimp.read(foregroundPath);
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

// 使用示例
overlayImages('纯色图.jpeg', '20241217-105802.png', 'output-repeat.jpg');
