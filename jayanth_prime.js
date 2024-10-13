// for (let j = 4; j < 100; j++) {
    const numberToCheck = 999;

    let i = 1;
    let isPrime = true;

    while (6 * i <= Math.round(Math.sqrt(numberToCheck))) {
        const k1 = i * 6 - 1;
        const k2 = i * 6 + 1;
        console.log(`k1 ${k1}`);
        console.log(`k2 ${k2}`);
        if (numberToCheck % k1 === 0 || numberToCheck % k2 === 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime) {
        console.log(numberToCheck);
    }
// }