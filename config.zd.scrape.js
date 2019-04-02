const argv = require('optimist').argv;

const sleep = (s) => new Promise((resolve)=> setTimeout(resolve, s*1000))

console.log('argv.cookies: ', argv.cookies)

const cookies = require(argv.cookies).cookies
const name = `zd-enuid`

module.exports = {
  name,
  url: `https://${process.env.NAT_ENTRY}/Default.aspx?view=24`,
  isDownloadResource: true,
  downloadResourceType: ['document'],
  isDownloadCookies: true,
  beforeGotoPage: async function(page){
    await page.setCookie(...cookies);
  },
  afterPageLoad: async function(page){
    await sleep(2)
    await page.goto(`https://${process.env.NAT_ENTRY}/SSO/SSOcombineXml.aspx?url=QT`)
    await sleep(2)
  },
  afterHtmlLoad: async function(html, page){
  }
}