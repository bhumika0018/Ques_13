const prompt = require("prompt-sync")({ sigint: true });
let Input = prompt("Enter a string: ");
let countVowel = 0;
let str = Input.toLowerCase();
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        countVowel += 1;
    }
}
console.log(countVowel);