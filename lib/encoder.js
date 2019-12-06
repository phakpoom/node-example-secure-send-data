const crypto = require('crypto');
const constants = require('constants');
const METHOD = 'DES-CBC';
const SECRET = 'g8G19nEz'; // Must be 256 bytes (32 characters)

module.exports = {
    encrypt: function (text) {
        let cipher = crypto.createCipheriv(METHOD, new Buffer(SECRET), SECRET, {
            authTagLength: 16
        });
        let encrypted = cipher.update(text, 'utf8');

        encrypted = Buffer.concat([encrypted, cipher.final()]);

        return Buffer.from(encrypted).toString('base64');
    },
    decrypt: function (text) {
        let encryptedText = Buffer.from(text, 'base64');

        let decipher = crypto.createDecipheriv(METHOD, new Buffer(SECRET), SECRET);
        let decrypted = decipher.update(encryptedText);

        decrypted += decipher.final('utf8');

        return decrypted.toString('hex');
    }
};
