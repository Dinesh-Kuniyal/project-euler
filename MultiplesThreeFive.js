const firstNumberToCheck = 3;
const secondNumberToCheck = 5;

let sumOfMultiples = 0;

for(let numberToCheck = 3; numberToCheck < 1000; numberToCheck++){
    if(numberToCheck % 3 === 0 || numberToCheck % 5 === 0){
        sumOfMultiples += numberToCheck;
    }
}

console.log(sumOfMultiples);

