/* 
-- Generate the prime numbers and store it in the set
-- Count all the possible numbers formed by a^3 * b * c (a, b and c are prime numbers)
-- Count all the possible numbers formed by a * b * c (a, b, and c are prime numbers)
-- Count all the possible numbers formed by a ^ 7
*/

const primeNumbersRequired: number = 1000000;
const primeNumbersGeneratedSet: number[] = [2, 3];

const checkIfPrime = (numberToCheck: number): boolean => {
    let isPrimeFound: boolean = true;
    const numbersLimitToCheck: number = Math.round(Math.sqrt(numberToCheck)) + 1;

    for (let divisiblityChecker: number = 3; divisiblityChecker < numbersLimitToCheck; divisiblityChecker += 2) {
        if (numberToCheck % divisiblityChecker === 0) {
            isPrimeFound = false;
            break;
        }
    }

    return isPrimeFound;
}

const storePrimeInSet = (countOfPrimeToStore: number): void => {
    let primesCounted: number = 2;
    let primesLimitToCheck: number = countOfPrimeToStore;
    let lastCheckedNumber: number;

    let indexToCheck: number = 1;
    while (primesCounted < primesLimitToCheck) {

        let firstCandidate: number = (6 * indexToCheck) - 1;
        let secondCandidate: number = (6 * indexToCheck) + 1;

        if (checkIfPrime(firstCandidate)) {
            lastCheckedNumber = firstCandidate;
            primeNumbersGeneratedSet.push(lastCheckedNumber);
            primesCounted++;
        }

        if (primesCounted >= primesLimitToCheck) break;

        if (checkIfPrime(secondCandidate)) {

            lastCheckedNumber = secondCandidate;
            primeNumbersGeneratedSet.push(lastCheckedNumber);
            primesCounted++;
        }

        indexToCheck++;

    }
}

storePrimeInSet(primeNumbersRequired);


let numbersFound: number = 0;
const limitToReach: number = 1000000;
let cubePrimeCounter: number = 0;
let hasNotLimitExceeds: boolean = true;

while (hasNotLimitExceeds) {
    cubePrimeCounter++;

    let innerPrimeIterator: number = 0;
    let hasNotInnerLimitReached: boolean = true;
    const cubePrimeValue: number = primeNumbersGeneratedSet[cubePrimeCounter - 1];

    while (hasNotInnerLimitReached) {
        innerPrimeIterator++;
        let innerPrimeIteratorValue: number = primeNumbersGeneratedSet[innerPrimeIterator - 1];

        if (cubePrimeValue === innerPrimeIteratorValue) continue;

        const cubeAndProductOfPrime = (cubePrimeValue ** 3) * innerPrimeIteratorValue;
        if (cubeAndProductOfPrime > limitToReach) break;

        numbersFound++;
    }

    let conditionController = (limitToReach / 2) < (cubePrimeValue ** 3);
    if (conditionController) hasNotLimitExceeds = false;
}


let hasANotFound: boolean = true;
let candidateAIndex: number = 0;

let productsCheckedSet: Set<number> = new Set();

while (hasANotFound) {

    candidateAIndex++;
    const firstCandidateToProcess = primeNumbersGeneratedSet[candidateAIndex - 1];
    if (firstCandidateToProcess > Math.round(limitToReach / firstCandidateToProcess)) break;

    let hasBNotFound = true;
    let candidateBIndex = 0;

    while (hasBNotFound) {

        candidateBIndex++;
        const secondCandidateToProcess = primeNumbersGeneratedSet[candidateBIndex - 1];

        if (secondCandidateToProcess > Math.round(limitToReach / (firstCandidateToProcess * secondCandidateToProcess))) break;
        if (firstCandidateToProcess > Math.round(limitToReach / (firstCandidateToProcess * secondCandidateToProcess))) break;
        if (firstCandidateToProcess * secondCandidateToProcess > limitToReach) break;

        let hasCNotFound = true;
        let candidateCIndex: number = 0;

        while (hasCNotFound) {

            candidateCIndex++;
            const thirdCandidateToProcess = primeNumbersGeneratedSet[candidateCIndex - 1];
            if (secondCandidateToProcess > Math.round(limitToReach / 6)) break;

            let productOfPrimes = firstCandidateToProcess * secondCandidateToProcess * thirdCandidateToProcess;
            if (productOfPrimes > limitToReach) break;

            if (firstCandidateToProcess === secondCandidateToProcess) continue;
            if (secondCandidateToProcess === thirdCandidateToProcess) continue;
            if (thirdCandidateToProcess === firstCandidateToProcess) continue;

            if (productsCheckedSet.has(productOfPrimes)) continue;
            productsCheckedSet.add(productOfPrimes);

            numbersFound++;
        }
    }
}


let indexForPrimeNumbers: number = 1;
let hasNotReachedLimit: boolean = true;

while (hasNotReachedLimit) {
    const numberToCheck: number = primeNumbersGeneratedSet[indexForPrimeNumbers - 1] ** 7;

    if (numberToCheck > limitToReach) break;

    numbersFound++;
    indexForPrimeNumbers++;
}


console.log(`Numbers found ${numbersFound}`);
