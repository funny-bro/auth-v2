
(async () => {
  const argv = require('optimist').argv;
  const listener = require('./listener')
  const childHelper = require('../lib/childHelper')
  const fs = require('fs')
  const puppeteer = require('puppeteer');

  const CONFIG_FILE = argv.config || './config'
  const config = require(`${__dirname}/.${CONFIG_FILE}`)

  const {
      url,
      name: projectName,
      isDeletTempDir,
      isDownloadResource,
      isDownloadCookies,
      downloadResourceType,
      beforeGotoPage,
      afterPageLoad,
      afterHtmlLoad
    } = config

  const uniqueName = () => {
    return projectName || new Date().getTime()
  }

  try {
    const tp = uniqueName()
    const dir = `${projectName}`
    try {
      fs.mkdirSync(`./${dir}`)
    }
    catch(err){
      console.log('[ERROR] file existed, going to remove')
      await childHelper.execPromise(`rm -R ./${dir}`)
      fs.mkdirSync(`./${dir}`)
    }

    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36')
    await page.setViewport({ width: 1920, height: 1080 })
    console.log('[INFO] Going to page: ', url)

    if(beforeGotoPage)
      await beforeGotoPage(page)
      
    await listener.requestInterceptor(page, {
      dir: `${dir}/`,
      isDownloadResource, downloadResourceType
    })

    await page.goto(url, {waitUntil: 'networkidle0'});

    if(afterPageLoad)
      await afterPageLoad(page);

    const html = await page.content();
    if(afterHtmlLoad)
      await afterHtmlLoad(html, page);
    

    const updatedHtml = await page.content()
    fs.writeFileSync(`./${dir}/index.html`, updatedHtml)
    console.log('[INFO] created index.html')
    fs.writeFileSync(`./${dir}/meta.json`, JSON.stringify(page.locals['reqObj']))
    console.log('[INFO] created meta.json')
    await page.screenshot({path: `./${dir}/screenshot-${tp}.png`});

    if(isDownloadCookies) {
      const cookies = await page._client.send('Network.getAllCookies');
      fs.writeFileSync(`./${dir}/cookies.json`, JSON.stringify(cookies))
    }

    await browser.close();
    console.log('[INFO] done, browser closed')

    if(isDeletTempDir) {
      await childHelper.execPromise(`rm -r ./${dir}`)
      console.log(`[INFO] removed dir : ./${dir}`)
    }
    await childHelper.execPromise(`node script/generateReport.js --meta=./${dir}/meta.json --output=./${dir}/report.json `)
  }
  catch(err){
    console.log('[ERROR] scraper base', err)
    throw '[ERROR] scraper base'
  }
})();