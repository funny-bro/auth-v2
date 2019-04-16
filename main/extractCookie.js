module.exports = function(){
  // const cookies = require('../zd-login/cookies.json').cookies
  // const cookiesEnuid = require('../zd-enuid/cookies.json').cookies
  const cookiesString =require('fs').readFileSync(`${__dirname}/../zd-login/cookies.json`, 'utf8')
  const cookiesEnuidString =require('fs').readFileSync(`${__dirname}/../zd-enuid/cookies.json`, 'utf8')
  const cookies = JSON.parse(cookiesString)
  const cookiesEnuid = JSON.parse(cookiesEnuidString)

  const cftoken = cookies.cookies.find(item => item.name==='CFTOKEN').value
  const cfid = cookies.cookies.find(item => item.name==='CFID').value

  const cookieValue = cookiesEnuid.cookies.find(item => item.name==='JSESSIONID' && item.domain === process.env.NAT_COOKIE_DOMAIN).value

  return {cftoken, cfid, cookieValue}
}