const rangeStartAt = 100;
const rangeEndAt = 999;

const checkIfPalindrome = (numberToCheck) => {
    let numberToReverse = numberToCheck;
    let reversedNumber = 0;

    while (numberToReverse > 0) {
        let remainder = numberToReverse % 10;
        reversedNumber = (reversedNumber * 10) + remainder;
        numberToReverse = (numberToReverse - remainder) / 10;
    }

    const isPalindrome = reversedNumber === numberToCheck;
    return isPalindrome;
}


let largestPossiblePalindrome = 0;

let iterations = 0;
for (let firstPossible = rangeEndAt; firstPossible >= rangeStartAt; firstPossible--) {
    
    for (let secondPossible = c; secondPossible >= rangeStartAt; secondPossible--) {
        iterations++;
        const productOfNumbers = firstPossible * secondPossible;
        const isPalindrome = checkIfPalindrome(productOfNumbers);
        
        if(isPalindrome && (productOfNumbers > largestPossiblePalindrome)){
            largestPossiblePalindrome = productOfNumbers;
            break;
        }
    }
}

console.log(largestPossiblePalindrome);
console.log(iterations);
