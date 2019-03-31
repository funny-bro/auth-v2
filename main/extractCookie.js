module.exports = function(){
  const cookies = require('../zd-login/cookies').cookies
  const cookiesEnuid = require('../zd-enuid/cookies').cookies

  const cftoken = cookies.find(item => item.name==='CFTOKEN').value
  const cfid = cookies.find(item => item.name==='CFID').value

  const value = cookiesEnuid.find(item => item.name==='JSESSIONID' && item.domain === process.env.NAT_COOKIE_DOMAIN).value

  return {cftoken, cfid, value}
}