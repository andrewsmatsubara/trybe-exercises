let n = 7;
let center = (n + 1) / 2;
let controlRight = center;
let controlLeft = center;
let symbol = "*";

for(let line = 1; line <= center; line += 1){
    let outputLine = "";

    for(let col = 1; col <= n; col += 1){
        if(col == controlLeft || col == controlRight || line == center){
            outputLine += symbol;
        }else{
            outputLine += ' ';
        }
    }
    controlLeft -= 1;
    controlRight += 1;
    console.log(outputLine);
}