const {fileToBase64} = require('../lib/visionApi/file')

describe('', ()=>{
  it('', ()=>{
    const base64 = fileToBase64(`${__dirname}/../mock/b235r.jpg`)
    expect(base64).toMatchSnapshot();
  })
})