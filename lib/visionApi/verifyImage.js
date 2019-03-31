const {getDigitVerify} = require('./request')
const path = require("path");
const Jimp = require('jimp');
const sleep = (n) => new Promise((res)=> setTimeout(res, n*1000))


const verifyImage = async (fromFileName, toFileName, x, y , w, h) => {
  const lenna = await Jimp.read(`${__dirname}/../../${fromFileName}`)

  await lenna.crop(x, y , w, h).write(`${__dirname}/../../${toFileName}`); 
  await sleep(2) //wait a bit
  
  const verifyResult = await getDigitVerify(`${__dirname}/../../${toFileName}`)
  return verifyResult
}
module.exports = {verifyImage}