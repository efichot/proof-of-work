import CryptoJS from 'crypto-js';

let timestamp = Date.now().toString();
let message = "this is a random message";
let payload = timestamp + message;

// the important thing about proof-of-work is that it has to be difficult for the client but easy for the system to check.
// only the nonce change which each guess
let nonce = 0;
let guess = 999999999999;
let throttle = 100000000; //difficulty of the algorithm
let target = 2**64/ throttle // the maximum value of eight bytes divided by the difficulty
// --> so the nonce is going to be increase be one each time and it's gonna count how many guesses the computer makes

let payloadHash = CryptoJS.SHA512(payload).toString();

let start = Date.now();

// the proof of work is a simple loop

while (guess > target) {
    nonce++;
    guess = unpack(CryptoJS.SHA512(CryptoJS.SHA512(pack(nonce) + payloadHash).toString()).toString());
}

let end = Date.now();