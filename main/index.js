(async function(){
  const keys = require('../keys.json')
  const authDao = require('../db/auth/dao')
  const shell = require('./childHelper')
  const extractCookie = require('./extractCookie')
  const extractEnuid = require('./extractEnuid')

  const withinNHour = (targetDate, n = 10) => {
    const ONE_HOUR = 60 * 60 * 1000; /* ms */
    return ((new Date) - targetDate) < n * ONE_HOUR
  }

  const unavailableCondition = (item) => {
    const {status, updatedAt} = item

    if(status !== 'available') return true

    if(!withinNHour(updatedAt, 10)) return true

    return false
  }

  const {count, data} = await authDao.findAndCountAll()
  console.log('[INFO] auth obj total    :', count)

  const unavailableList = data.filter(unavailableCondition)
  console.log('[INFO] unavailable total :', unavailableList.length)

  for(let i =0 ; i<unavailableList.length; i++) {
    const item = unavailableList[i]
    const {username} = item
    const password = keys[username]
    
    try {
      console.log('username: ', username)
      console.log('password: ', password)

      await shell.execPromise(`yarn start --config=./config.zd.login.js --username=${username} --password=${password}`)

      await shell.execPromise(`yarn start --config=./config.zd.scrape.js --cookies=./zd-login/cookies.json`)

      const cookies = extractCookie()
      const enuid = extractEnuid()
      const status = 'available'
      const statusNat = 'available'
      const body = {...cookies, ...enuid, status, statusNat}
      console.log(body)
      await authDao.update(body, {username})
      console.log('[INFO] update DB success')
    }
    catch(err){
      console.log('[ERROR] main/index for loop:', err)
      // throw ''
      i-=1
      continue
    }
  }
  
  process.exit()
})()