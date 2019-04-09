var cron = require('node-cron');
var cmd = require('@pscraper/cmd');


console.log('[INFO] cron job is started ...')

const AUTH_V2_CRON = '00 07 * * *'

console.log('[INFO] auth cron: ', AUTH_V2_CRON)

// run provider every 11:00
cron.schedule(AUTH_V2_CRON, function(){
  cmd("node ./main/index").then(() => {
    console.log('[INFO] auth v2 login done')
  })
});
