const sharp = require('sharp');
const fs = require('fs');

// 读取图像
sharp('20241217-154623.jpeg')
    .raw()
    .toBuffer((err, buffer, { width, height }) => {
        if (err) {
            console.error(err);
            return;
        }

        // 这里简单进行阈值处理来近似边缘检测（实际可能需要更复杂的算法）
        const threshold = 128;
        const pixels = new Uint8ClampedArray(buffer);
        let left = width;
        let right = 0;
        let top = height;
        let bottom = 0;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const offset = (y * width + x) * 4;
                const gray = (pixels[offset] + pixels[offset + 1] + pixels[offset + 2]) / 3;
                if (gray < threshold) {
                    if (x < left) {
                        left = x;
                    }
                    if (x > right) {
                        right = x;
                    }
                    if (y < top) {
                        top = y;
                    }
                    if (y > bottom) {
                        bottom = y;
                    }
                }
            }
        }

        const boxWidth = right - left + 1;
        const boxHeight = bottom - top + 1;

        // 裁剪图像
        sharp('20241217-154623.jpeg')
            .extract({ left, top, width: boxWidth, height: boxHeight })
            .toFile('output-11.png', (cropErr) => {
                if (cropErr) {
                    console.error(cropErr);
                } else {
                    console.log('图像裁剪成功');
                }
            });
    });