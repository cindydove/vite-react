const sharp = require('sharp');
const fs = require('fs');

// 假设你有一个图片文件路径
const imagePath = './20241217-110021.png';

// 定义你想要的固定长和宽（以像素为单位）
const width = 816;
const height = 816;

// 使用sharp处理图片
sharp(imagePath)
    .resize(816, 816, { fit: 'cover' }) // 调整图片大小
    .toFile('./output.png', (err, info) => {
        if (err) {
            console.error('处理图片时发生错误:', err);
        } else {
            console.log('图片处理成功！新图片保存到:', info.path);
        }
    });

