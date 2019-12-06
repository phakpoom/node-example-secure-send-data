const encoder = require('./lib/encoder');

const encryptText = encoder.encrypt('MethodName=LoginRequest&Key=FR5XFTE1S8LA0SX4TKS2W37Z9LVTL371&Time=20191206163925&Username=ezp2p000001');

console.log(encryptText);

const decryptText = encoder.decrypt(encryptText);

console.log(decryptText);