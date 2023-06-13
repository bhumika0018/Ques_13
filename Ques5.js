const prompt = require("prompt-sync")({ sigint: true });
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);
