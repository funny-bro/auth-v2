module.exports = function(){
  const str = require('fs').readFileSync(`${__dirname}/../zd-enuid/index.html`, 'utf8')

  const ensid = str.split("init_data.ENSID='")[1].split("';")[0]
  const enuid = str.split("init_data.ENUID='")[1].split("';")[0]
  
  return {ensid, enuid}
}