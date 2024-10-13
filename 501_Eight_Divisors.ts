const eightDivisors: number[] = [24, 30, 40, 42, 54, 56, 66, 70, 78, 88];
const numberToSkip: number [] = [24, 30, 40, 42, 54, 56, 66, 70, 78, 88];

let numbersChecked: number = 0;
let iterationsDone: number = 0;

for (let numberToCheck = 101; numberToCheck < 1000; numberToCheck++) {

    let isPerfectDividend: boolean = false;
    for (let alreadyDiviorsIterator: number = 0; alreadyDiviorsIterator < numberToSkip.length; alreadyDiviorsIterator++) {
        if (numberToCheck % numberToSkip[alreadyDiviorsIterator] === 0) {
            numberToSkip.push(numberToCheck);
            isPerfectDividend = true;
            // console.log(`Numbers Skipped ${numberToCheck}`);
            
            break;
        }
    }
    
    if (isPerfectDividend) continue;
    numbersChecked++;

    let factorsCount = 2;
    for (let factorsIterator = factorsCount; factorsIterator < numberToCheck; factorsIterator++) {
        iterationsDone++
        if (numberToCheck % factorsIterator === 0) factorsCount++;
    }

    if (factorsCount === 8) eightDivisors.push(numberToCheck);
}

console.log(`Numbers found ${eightDivisors}`);
console.log(`Numbers Checked ${numbersChecked}`);
console.log(`Iterations Done ${iterationsDone}`);