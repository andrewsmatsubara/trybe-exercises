let n = 7;
let string = "";

for(let i = 0; i <= n - 3; i += 1){
    for(let j = 0; j < n - i; j += 1){
        string += " ";
    }
    for(let k = 0; k < 2 * i - 1; k += 1){
        string += "*";
    }
    string += "\n";
}
console.log(string);