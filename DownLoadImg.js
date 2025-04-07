const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 图片URL列表和对应的新的文件名
// const images =  [
//     {
//         "original_url": "https://lf3-icem.bytetos.com/obj/worktime/2e8f4840-61d2-49cb-bce6-a7ba87ae9083_机油商品主图/351.png",
//         "cutout_url": "https://s.coze.cn/t/CnYC3J5sMNzIZcka/"
//     },
//     {
//         "original_url": "https://lf3-icem.bytetos.com/obj/worktime/7927ee27-5808-41ce-86be-87a8837f8f94_机油商品主图/345.png",
//         "cutout_url": "https://s.coze.cn/t/CqEXta2DioXCbosc/"
//     },
//     {
//         "original_url": "https://lf3-icem.bytetos.com/obj/worktime/74d16a5c-f29b-40ed-add6-3f7746d48b6b_机油商品主图/423.png",
//         "cutout_url": "https://s.coze.cn/t/CnqN97EOvwULhYoW/"
//     },
//     {
//         "original_url": "https://lf3-icem.bytetos.com/obj/worktime/5c6d8a6b-7e7f-4e8d-8b6c-7c4f8d5d7d8e_机油商品主图/427.png",
//         "cutout_url": "https://s.coze.cn/t/Cmg6kvFRaeKhCYge/"
//     }
// ]

const images = [
    {
        "original_url": "https://lf3-icem.bytetos.com/obj/worktime/4e39918d-ab6b-49df-93ea-fda6146b9a0b_机油商品主图/201.png",
        "cutout_url": "https://s.coze.cn/t/Cm-9iXNEShX8i0sw/"
    },
    {
        "original_url": "https://lf3-icem.bytetos.com/obj/worktime/5671d375-f47c-4d68-a53c-74181699e3ef_机油商品主图/215.png",
        "cutout_url": "https://s.coze.cn/t/CqWpTm2OEKO--PMU/"
    },
    {
        "original_url": "https://lf3-icem.bytetos.com/obj/worktime/ea47ffbe-742f-424d-b669-ac3cf3d1cc7b_机油商品主图/214.png",
        "cutout_url": "https://s.coze.cn/t/CoVJGoR3k_uJfbcE/"
    },
    {
        "original_url": "https://lf3-icem.bytetos.com/obj/worktime/f415dc31-f005-4e36-adf0-4533848f62d1_机油商品主图/228.png",
        "cutout_url": "https://s.coze.cn/t/CsUkSI1WqKfTQAQQ/"
    },
    {
        "original_url": "https://lf3-icem.bytetos.com/obj/worktime/30cdeaeb-0d47-4896-8719-8114bef8c3a2_机油商品主图/200.JPG",
        "cutout_url": "https://s.coze.cn/t/CkXpGWKRGUaYaVsc/"
    }
]

async function downloadImage(url, filePath) {
    const response = await axios({
        url,
        responseType: 'stream',
    });

    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filePath))
            .on('finish', () => {
                console.log("dx----url",url)
                resolve()
            })
            .on('error', reject);
    });
}

async function downloadAndRenameImages(images, destinationFolder) {
    images.forEach(({original_url,cutout_url}, index) => {

        const newName = original_url.split('/').at(-1);
        const filePath = path.join(destinationFolder, newName);
        console.log("dx---filePath",filePath)
        downloadImage(cutout_url, filePath).then(()=>{
            console.log(`已下载 并将 ${cutout_url} 重命名为 ${filePath}`);

        }).catch((error)=>{console.log("下载出错 errors",error)});
    });

}

// 使用示例
const destinationFolder = './抠图后';
if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
}

downloadAndRenameImages(images, destinationFolder);
