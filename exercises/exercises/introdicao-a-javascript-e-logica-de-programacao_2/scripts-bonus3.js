let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let res = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
        if(index == (numbers.length) - 1){
            res = numbers[index] * 2;
        }else{
            res = numbers[index] * numbers[index + 1];
        }
        console.log(res);
    }


    
