var cron = require('node-cron');
var cmd = require('@pscraper/cmd');


console.log('[INFO] cron job is started ...')

// run provider every 11:00
cron.schedule('00 13 * * *', function(){
  cmd("node ./main/index").then(() => {
    console.log('[INFO] auth v2 login done')
  })
});
