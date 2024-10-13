
// a * b * c
let hasANotFound = true;
let candidateAIndex = 0;

while (hasANotFound) {
    console.log(`I am at first`);

    candidateAIndex++;
    const firstCandidateToProcess = primeNumbersSet[candidateAIndex - 1];
    let hasBNotFound = true;
    let candidateBIndex = 0;
    let maxGotB = 0;

    while (hasBNotFound) {
        console.log(`I am at second`);
        candidateBIndex++;
        const secondCandidateToProcess = primeNumbersSet[candidateBIndex - 1];
        let hasCNotFound = true;
        let candidateCIndex = 0;
        let maxGotC = 0;

        while (hasCNotFound) {
            
            candidateCIndex++;
            console.log(`Candidate A Index ${candidateAIndex}`);
            console.log(`Candidate B Index ${candidateBIndex}`);
            console.log(`Candidate C Index ${candidateCIndex}`);
            const thirdCandidateToProcess = primeNumbersSet[candidateCIndex - 1];
            if (maxGotC < thirdCandidateToProcess) maxGotC = thirdCandidateToProcess;
            console.log(`I am at innermost`);
            console.log(`First candidate ${firstCandidateToProcess}`);
            console.log(`Second candidate ${secondCandidateToProcess}`);
            console.log(`Third candidate ${thirdCandidateToProcess}`);
            console.log(`Max Got C ${maxGotC}`);
            

            let productOfPrimes = firstCandidateToProcess * secondCandidateToProcess * thirdCandidateToProcess;
            if (productOfPrimes > limitToReach) break;

            if (firstCandidateToProcess === secondCandidateToProcess) continue;
            if (secondCandidateToProcess === thirdCandidateToProcess) continue;
            if (thirdCandidateToProcess === firstCandidateToProcess) continue;

            numbersGotIt++;
        }

        const isBLimitReached = (firstCandidateToProcess * maxGotC) > limitToReach;
        if (isBLimitReached) break;
        if (maxGotB < secondCandidateToProcess) maxGotB = secondCandidateToProcess;
    }

    const isCLimitReached = (firstCandidateToProcess * maxGotB) > limitToReach;
    if (isCLimitReached) break;
}





let productsChecked = [];

for (let numberToCheck = 111; numberToCheck < 999; numberToCheck++) {

    const conversionToString = numberToCheck.toString();

    const firstCharToProcess = conversionToString[0];
    const secondCharToProcess = conversionToString[1];
    const thirdCharToProcess = conversionToString[2];

    if (firstCharToProcess === secondCharToProcess) continue;
    if (secondCharToProcess === thirdCharToProcess) continue;
    if (thirdCharToProcess === firstCharToProcess) continue;

    if (firstCharToProcess === "0" || secondCharToProcess === "0" || thirdCharToProcess === "0") continue;

    const firstNumberToProcess = parseInt(firstCharToProcess);
    const secondNumberToProcess = parseInt(secondCharToProcess);
    const thirdNumberToProcess = parseFloat(thirdCharToProcess);

    const firstPrimeValue = primeNumbersSet[firstNumberToProcess - 1];
    const secondPrimeValue = primeNumbersSet[secondNumberToProcess - 1];
    const thirdPrimeValue = primeNumbersSet[thirdNumberToProcess - 1];

    const productOfCurrentPrime = firstPrimeValue * secondPrimeValue * thirdPrimeValue;
    console.log(`${firstNumberToProcess} ${secondNumberToProcess} ${thirdNumberToProcess} ${productOfCurrentPrime}`);
    
    if (productsChecked.includes(productOfCurrentPrime)) continue;
    if (productOfCurrentPrime > limitToReach) continue;

    productsChecked.push(productOfCurrentPrime)
    numbersGotIt++;

}

console.log(`Numbers Found ${numbersGotIt}`);
// console.log(productsChecked);

