const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
    // 无头模式：无图形用户界面
    const browser = await puppeteer.launch({headless:'new',  slowMo: 100});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1512,
            height: 556
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://www.baidu.com/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await targetPage.waitForFunction('new Promise(resolve => setTimeout(() => resolve(true), 2000))', { timeout });
    }

    {
        // 在一个默认的浏览器上下文中被创建一个新页面
        // 截屏操作，使用Page.screenshot函数
        // 截取整个页面:Page.screenshot函数默认截取整个页面，加上fullPage参数就是全屏截取
        await page.screenshot({
            path: `./src/imgs/full-${new Date().getTime()}.png`,
            fullPage: true,
            type: "jpeg",
            quality: 100,
        })

        // 截取屏幕中一个区域的内容
        const res = await page.screenshot({
            path: `./src/imgs/intercept-${new Date().getTime()}.png`,
            type: "jpeg",
            quality: 80,
            clip: {
                x: 0,
                y: 0,
                width: 375,
                height: 300,
            },
        })
        await page.pdf({ path: `./src/imgs/pdf-${new Date().getTime()}.pdf`, format: 'A4'})

        console.log('dx----res',res)
    }


    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
