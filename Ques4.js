const prompt = require("prompt-sync")({ sigint: true });
var a = prompt("Enter a value: ");
var b, sum = 0;
var z = a;
while (a > 0) {
    b = a % 10;
    sum = sum * 10 + b;
    a = parseInt(a / 10);
}
console.log(sum);