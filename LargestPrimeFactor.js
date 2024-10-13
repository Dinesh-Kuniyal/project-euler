const numberToCheck = 600851475143;


const checkIfPrime = (number) => {
    let isPrime = true;

    if(number === 0 || number === 1) return false;

    for (let primeCheckCounter = 2; primeCheckCounter < number; primeCheckCounter++) {
        if (number % primeCheckCounter === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

for (let largestPrimeCandidate = Math.round(numberToCheck / 2); largestPrimeCandidate >= 1; largestPrimeCandidate -= 2) {

    if(numberToCheck % largestPrimeCandidate === 0){
        if(checkIfPrime(largestPrimeCandidate)){
            console.log(largestPrimeCandidate);
            break;
        }
    }

}