let rangeEnd = 20;
let hasNotMultipleFound = true;
let multipleCandidate = 2520;

while (hasNotMultipleFound) {
    let candidateFound = true;

    for (let divisiblityCounter = 2; divisiblityCounter <= rangeEnd; divisiblityCounter++) {
        if (multipleCandidate % divisiblityCounter !== 0) {
            candidateFound = false;
            break;
        }
    }

    if (candidateFound) {
        hasNotMultipleFound = false;
        console.log(multipleCandidate);
    }

    multipleCandidate++;
}