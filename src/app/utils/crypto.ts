import * as CryptoJS from 'crypto-js';

export class CryptoUtil {
  static CryptoPassword (password: string) {
    const hash = CryptoJS.HmacSHA256("SECRETCARSHARINGJAEINKONG", password);
    const passwordHash = CryptoJS.enc.Base64.stringify(hash);
    return passwordHash;
  }
}