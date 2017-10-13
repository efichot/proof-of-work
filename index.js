import CryptoJS from 'crypto-js';

let timestamp = Date.now().toString();
let message = "this is a random message";
let payload = timestamp + message;