let previousTerm = 1;
let currentTerm = 2;

let sumOfEvenTerms = 0;
let hasNotLimitReached = true;

while (hasNotLimitReached) {
    if (previousTerm > 4000000) {
        hasNotLimitReached = false;
    }

    if (previousTerm % 2 === 0) {
        sumOfEvenTerms += previousTerm;
    }

    const nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
}

console.log(sumOfEvenTerms);