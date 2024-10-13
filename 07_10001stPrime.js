let primesCounted = 2;
let limit = 100000000;
let lastCheckedNumber;
let iterations = 0;
let innerChecks = 0;


const checkIfPrime = (numberToCheck) => {
    iterations++;
    let hasPrimeNotFound = true;
    let numbersLimit = Math.round(Math.sqrt(numberToCheck)) + 1;
    // let numbersLimit = numberToCheck;
    for (let divisiblityChecker = 3; divisiblityChecker < numbersLimit; divisiblityChecker += 2) {
        innerChecks++
        if (numberToCheck % divisiblityChecker === 0) {
            hasPrimeNotFound = false;
            break;
        }
    }
    return hasPrimeNotFound;
}

let indexToCheck = 1;
while (primesCounted < limit) {

    let firstCandidate = (6 * indexToCheck) - 1;
    let secondCandidate = (6 * indexToCheck) + 1;    
    
    if (checkIfPrime(firstCandidate)) {
        
        lastCheckedNumber = firstCandidate;
        primesCounted++;
    }
    
    if (primesCounted >= limit) break;
    
    if (checkIfPrime(secondCandidate)) {
        lastCheckedNumber = secondCandidate;
        primesCounted++;
    }

    indexToCheck++;

}

console.log(lastCheckedNumber);
console.log(`Number checked ${iterations}`);
console.log(`Inner checks ${innerChecks}`);

