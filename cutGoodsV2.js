const cv = require('@u4/opencv4nodejs');
const axios = require('axios');
const fs = require('fs');

// 从 URL 读取图片
async function readImageFromUrl(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data, 'binary');
        const image = cv.imdecode(buffer);
        return image;
    } catch (error) {
        console.error('读取图片时出错:', error);
        throw error;
    }
}

// 边缘检测并获取矩形框
function detectEdgesAndGetRect(image) {
    // Convert to grayscale
    const gray = image.cvtColor(cv.COLOR_BGR2GRAY);

    // Blur the image
    const blurred = gray.gaussianBlur(new cv.Size(5, 5), 0);

    // Edge detection using Canny
    const edges = blurred.canny(50, 150);

    // Find contours
    const contours = edges.findContours(cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    const rects = [];
    for (const contour of contours) {
        const rect = contour.boundingRect();
        rects.push([rect.x, rect.y, rect.width, rect.height]);
    }

    return rects;
}

// 根据矩形框截取图像
function cropImage(image, rect) {
    const [x, y, width, height] = rect;
    const croppedImage = image.getRegion(new cv.Rect(x, y, width, height));
    return croppedImage;
}

// 主函数
async function main() {
    const url = "https://lf3-icem.bytetos.com/obj/worktime/199ad9cc-988c-4fa1-a03c-70962affd15a_10006-removebg-preview(2).png";
    try {
        const image = await readImageFromUrl(url);
        const rects = detectEdgesAndGetRect(image);

        if (rects.length > 0) {
            const croppedImage = cropImage(image, rects[0]);
            cv.imwrite('cropped_image.png', croppedImage);
            console.log('图像裁剪成功，保存为 cropped_image.png');
        } else {
            console.log('未检测到任何矩形框');
        }
    } catch (error) {
        console.error('处理图片时出错:', error);
    }
}

main();
