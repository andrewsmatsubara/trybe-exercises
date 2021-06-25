let n = 5;
let string = "";

for(let i = 0; i <= n; i += 1){
    for(let j = 0; j < n - i; j += 1){
        string += " ";
    }
    for(let k = 0; k < i; k += 1){
        string += "*";
    }
    string += "\n";
}
console.log(string);