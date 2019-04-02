const {verifyImage} = require('./lib/visionApi/verifyImage')

const argv = require('optimist').argv;
const USERNAME = `${argv.username}`
const PASSWORD = `${argv.password}`
const name = `zd-login`
console.log(' -=-=-=-=-=-=zd.login')
console.log(USERNAME)
console.log(PASSWORD)

const sleep = (s) => new Promise((resolve)=> setTimeout(resolve, s*1000))

module.exports = {
  name,
  url: `https://${process.env.NAT_ENTRY}/SSO/SSOcombineXml.aspx?url=GAIAS`,
  isDownloadResource: true,
  isDownloadCookies: true,
  downloadResourceType: ['document'],
  beforeGotoPage: async function(page){
    try {
      await page.setViewport({ width: 1920, height: 1080 })
      await page.goto(`https://${process.env.NAT_ENTRY}/Default.aspx?view=0`);
  
      const frames = await page.frames();
      const tryItFrame = frames.find(f => f.name() === 'IFRAME1');    
  
      await tryItFrame.type('input[name="aa-uid"]', USERNAME);
      await tryItFrame.type('input[name="aa-passwd"]', PASSWORD);
      await page.screenshot({path: 'loginPage.png'});
  
      const verifyCode = await verifyImage(`loginPage.png`, `loginPageCrop.png`, 885,673,96,30)
      await tryItFrame.type('input[name="aa-captchaID"]', verifyCode);
  
      await tryItFrame.click('#submit_hn a');
  
      page.on('dialog', async dialog => {
        const msg = dialog.message()
        console.log('[INFO] dialog : ', msg);
        await dialog.dismiss();
  
        if(!msg.includes('登入成功!!')) {
          throw 'Login fail'
        }
      });
      page.evaluate(() => alert('1'));
      await sleep(2)
    }
    catch(err){
      console.log('[ERROR] beforeGotoPage :', err)
    }
  },
  afterPageLoad: async function(page){
    await sleep(5)
  },
}