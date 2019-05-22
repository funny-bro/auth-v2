var cron = require('node-cron');
var cmd = require('@pscraper/cmd');


console.log('[INFO] cron job is started ...')

const AUTH_V2_CRON_1 = '00 07 * * *'
const AUTH_V2_CRON_2 = '00 19 * * *'

console.log('[INFO] auth cron: ', AUTH_V2_CRON_1)
console.log('[INFO] auth cron: ', AUTH_V2_CRON_2)

cron.schedule(AUTH_V2_CRON_1, function(){
  cmd("node ./main/index").then(() => {
    console.log('[INFO] auth v2 login done')
  })
});

cron.schedule(AUTH_V2_CRON_2, function(){
  cmd("node ./main/index").then(() => {
    console.log('[INFO] auth v2 login done')
  })
});
