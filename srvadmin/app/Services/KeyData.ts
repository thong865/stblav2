import CryptoJS from 'crypto-js'
class KeyData {
    getWebTextPaint = (plaint)=> {
        var bytes  = CryptoJS.AES.decrypt(plaint || '', 'secret key 123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText
    }
}

export default new KeyData;