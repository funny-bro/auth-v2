echo '[INFO] going to fetch cookie'
yarn start --config=./config.zd.login.js
echo '[INFO] fetch cookie success, and save to ./zd-login/cookies.json'

# yarn start --cookies=./zd-login/cookies --config=./config.zd.scrape.js
yarn start --config=./config.zd.scrape.js --cookies=./zd-login/cookies.json 
