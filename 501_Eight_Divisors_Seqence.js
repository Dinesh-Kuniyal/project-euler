let numberFound = 0;
const primeNumbersSetLimit = 10000;
const primeNumbersSet = [2, 3];

const checkIfPrime = (numberToCheck) => {
    let hasPrimeNotFound = true;
    let numbersLimit = Math.round(Math.sqrt(numberToCheck)) + 1;
    for (let divisiblityChecker = 3; divisiblityChecker < numbersLimit; divisiblityChecker += 2) {
        if (numberToCheck % divisiblityChecker === 0) {
            hasPrimeNotFound = false;
            break;
        }
    }
    return hasPrimeNotFound;
}

const storePrimes = (numberOfPrimeToStore) => {

    let primesCounted = 2;
    let limit = numberOfPrimeToStore;
    let lastCheckedNumber;

    let indexToCheck = 1;
    while (primesCounted < limit) {

        let firstCandidate = (6 * indexToCheck) - 1;
        let secondCandidate = (6 * indexToCheck) + 1;

        if (checkIfPrime(firstCandidate)) {

            lastCheckedNumber = firstCandidate;
            primeNumbersSet.push(lastCheckedNumber);
            primesCounted++;
        }

        if (primesCounted >= limit) break;

        if (checkIfPrime(secondCandidate)) {

            lastCheckedNumber = secondCandidate;
            primeNumbersSet.push(lastCheckedNumber);
            primesCounted++;
        }

        indexToCheck++;

    }

    return lastCheckedNumber;
}

storePrimes(primeNumbersSetLimit);
console.log('====================================');
console.log(`Primes Generated`);
console.log('====================================');

let primeCounter = 0;
let hasNotLimitExceeds = true;
const limitToReach = 100;

let numbersGotIt = 0;

let cubePrimeCounter = 0;
while (hasNotLimitExceeds) {
    cubePrimeCounter++;

    let innerPrimeIterator = 0;
    let hasNotInnerLimitReached = true;
    let cubePrimeValue = primeNumbersSet[cubePrimeCounter - 1];

    while (hasNotInnerLimitReached) {
        innerPrimeIterator++;

        let innerPrimeIteratorValue = primeNumbersSet[innerPrimeIterator - 1];

        if (cubePrimeValue === innerPrimeIteratorValue) continue;

        const numberFound = (cubePrimeValue ** 3) * innerPrimeIteratorValue;
        if (numberFound > limitToReach) break;

        numbersGotIt++;
    }

    let conditionController = (limitToReach / 2) < (cubePrimeValue ** 3);
    if (conditionController) break;

}

let hasANotFound = true;
let candidateAIndex = 0;

let numbersChecked = [];

while (hasANotFound) {

    candidateAIndex++;
    const firstCandidateToProcess = primeNumbersSet[candidateAIndex - 1];
    if (firstCandidateToProcess > Math.round(limitToReach / firstCandidateToProcess)) break;

    let hasBNotFound = true;
    let candidateBIndex = 0;

    while (hasBNotFound) {
        candidateBIndex++;
        const secondCandidateToProcess = primeNumbersSet[candidateBIndex - 1];
        if (secondCandidateToProcess > Math.round(limitToReach / (firstCandidateToProcess * secondCandidateToProcess))) break;
        if(firstCandidateToProcess > Math.round(limitToReach / (firstCandidateToProcess * secondCandidateToProcess))) break;
        if(firstCandidateToProcess * secondCandidateToProcess > limitToReach) break;
        let hasCNotFound = true;
        let candidateCIndex = 0;

        while (hasCNotFound) {

            candidateCIndex++;
            const thirdCandidateToProcess = primeNumbersSet[candidateCIndex - 1];
            if (secondCandidateToProcess > Math.round(limitToReach / 6)) break;

            let productOfPrimes = firstCandidateToProcess * secondCandidateToProcess * thirdCandidateToProcess;
            // console.log(`${firstCandidateToProcess} ${secondCandidateToProcess} ${thirdCandidateToProcess} ${productOfPrimes}`);
            if (productOfPrimes > limitToReach) break;

            if (firstCandidateToProcess === secondCandidateToProcess) continue;
            if (secondCandidateToProcess === thirdCandidateToProcess) continue;
            if (thirdCandidateToProcess === firstCandidateToProcess) continue;

            if (numbersChecked.includes(productOfPrimes)) continue;
            numbersChecked.push(productOfPrimes);
            numbersGotIt++;
        }

    }

}

let primeNumbersIndex = 1;
let hasCheckedAllPowers = true;
while(hasCheckedAllPowers) {
    const numberToCheck = primeNumbersSet[primeNumbersIndex - 1] ** 7;
    if(numberToCheck > limitToReach) break;

    numbersGotIt++;
    primeNumbersIndex++;
}

console.log(`Number got it ${numbersGotIt}`);
// console.log(`Number got it ${numbersChecked}`);