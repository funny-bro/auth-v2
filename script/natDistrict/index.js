const cityA = require('./cityA')
const cityH = require('./cityH')
const cityF = require('./cityF')

require('fs').writeFileSync(__dirname + '/../../nat.district.json', JSON.stringify({
  A: {
    name: '臺北市',
    town: cityA.town
  },
  H: {
    name: '新北市',
    town: cityH.town
  },
  F: {
    name: '桃園市',
    town: cityF.town
  },
}))
