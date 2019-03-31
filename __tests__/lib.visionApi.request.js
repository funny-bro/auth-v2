const {getDigitVerify} = require('../lib/visionApi/request')

describe('getDigitVerify', ()=>{
  it('happy path',(done)=>{
    return getDigitVerify(`${__dirname}/../mock/b235r.jpg`)
    .then((res)=>{
      expect(res.includes('b235r')).toBe(true)
      done()
    })
  })
})