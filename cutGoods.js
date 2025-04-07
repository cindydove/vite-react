const tf = require('@tensorflow/tfjs');
const cocossd = require('@tensorflow-models/coco-ssd');
const {Jimp} = require('jimp');
require('@tensorflow/tfjs-backend-cpu')
require('@tensorflow/tfjs-backend-webgl')

// 定义输入图片路径和输出图片路径
const inputImagePath = './20241217-154623.jpeg';
const outputImagePath = 'output-cutgoods.jpeg';


async function detectAndCropObject(inputPath, outputPath) {
    try {
       await tf.ready();
        // 加载 COCO-SSD 模型
        const model = await cocossd.load();

        // 使用 Jimp 读取图片
        const jimpImage = await Jimp.read(inputPath);

        // 将 Jimp 图像转换为 Tensor
        const tensor = tf.browser.fromPixels(jimpImage.bitmap);
console.log("dx---将 Jimp 图像转换为 Tensor")
        // 进行对象检测
        const predictions = await model.detect(tensor);

        // 找到商品类别的预测结果（假设商品类别为 'bottle', 'cell phone', 'book' 等）
        const productPredictions = predictions.filter(prediction =>
            ['bottle', 'cell phone', 'book', 'laptop', 'tv', 'remote', 'keyboard', 'mouse', 'cup', 'knife', 'spoon', 'fork', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake'].includes(prediction.class)
        );

        if (productPredictions.length === 0) {
            console.log('未检测到商品');
            return;
        }

        // 找到置信度最高的商品预测
        const bestPrediction = productPredictions.reduce((best, prediction) =>
            prediction.score > best.score ? prediction : best
        );

        // 获取边界框坐标
        const [x, y, width, height] = bestPrediction.bbox;
        console.log("dx---获取边界框坐标")

        // 裁剪图像
        const croppedJimpImage = jimpImage.clone().crop(x, y, width, height);
        console.log("dx---裁剪图像")
        // 保存裁剪后的图像
        await croppedJimpImage.write(outputPath);
        console.log('图片裁剪成功');
    } catch (error) {
        console.error('处理图片时出错:', error);
    }
}
// async function predictionImage(){
//     let img = new Image()
//     img.crossOrigin = 'anonymous'
//     img.src = './机油商品主图/1.png'
//     img.onload = async function () {
//         const model = await cocossd.load({
//             base: 'lite_mobilenet_v2',
//             modelUrl: import.meta.env.VITE_BASE_URL + '/model/model.json'
//         })
//         let predictions = await model.detect(img)
//     }
// }


// 使用示例
detectAndCropObject(inputImagePath, outputImagePath);
