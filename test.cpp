#include <iostream>
#include <cmath>
#include <vector>
#include <unordered_set>

bool checkIfPrime(int numberToCheck) {
    if (numberToCheck < 2) return false;
    if (numberToCheck == 2) return true;
    if (numberToCheck % 2 == 0) return false;

    int numbersLimit = std::round(std::sqrt(numberToCheck)) + 1;
    for (int divisibilityChecker = 3; divisibilityChecker < numbersLimit; divisibilityChecker += 2) {
        if (numberToCheck % divisibilityChecker == 0) {
            return false;
        }
    }
    return true;
}

int storePrimes(int numberOfPrimeToStore, std::vector<int>& primeNumbersSet) {
    int primesCounted = 2;
    int lastCheckedNumber;

    int indexToCheck = 1;
    while (primesCounted < numberOfPrimeToStore) {
        int firstCandidate = (6 * indexToCheck) - 1;
        int secondCandidate = (6 * indexToCheck) + 1;

        if (checkIfPrime(firstCandidate)) {
            lastCheckedNumber = firstCandidate;
            primeNumbersSet.push_back(lastCheckedNumber);
            primesCounted++;
        }

        if (primesCounted >= numberOfPrimeToStore) break;

        if (checkIfPrime(secondCandidate)) {
            lastCheckedNumber = secondCandidate;
            primeNumbersSet.push_back(lastCheckedNumber);
            primesCounted++;
        }

        indexToCheck++;
    }

    return lastCheckedNumber;
}

int main() {
    long primeNumbersSetLimit = 10000000000;
    std::vector<int> primeNumbersSet;
    primeNumbersSet.push_back(2);
    primeNumbersSet.push_back(3);

    storePrimes(primeNumbersSetLimit, primeNumbersSet);

    int numbersGotIt = 0;
    long limitToReach = 1000000000000;
    int cubePrimeCounter = 0;

    while (true) {
        cubePrimeCounter++;
        int cubePrimeValue = primeNumbersSet[cubePrimeCounter - 1];

        for (int innerPrimeIterator = 0; innerPrimeIterator < primeNumbersSet.size(); innerPrimeIterator++) {
            int innerPrimeIteratorValue = primeNumbersSet[innerPrimeIterator];

            if (cubePrimeValue == innerPrimeIteratorValue) continue;

            long long numberFound = static_cast<long long>(std::pow(cubePrimeValue, 3)) * innerPrimeIteratorValue;
            if (numberFound > limitToReach) break;

            numbersGotIt++;
        }

        if ((limitToReach / 2) < std::pow(cubePrimeValue, 3)) break;
    }

    std::cout << "Numbers Found: " << numbersGotIt << std::endl;

    std::unordered_set<long long> numbersChecked;

    for (int candidateAIndex = 0; candidateAIndex < primeNumbersSet.size(); candidateAIndex++) {
        int firstCandidateToProcess = primeNumbersSet[candidateAIndex];
        if (firstCandidateToProcess > std::round(limitToReach / 6)) break;

        for (int candidateBIndex = 0; candidateBIndex < primeNumbersSet.size(); candidateBIndex++) {
            int secondCandidateToProcess = primeNumbersSet[candidateBIndex];
            if (secondCandidateToProcess > std::round(limitToReach / 6)) break;
            if (firstCandidateToProcess * secondCandidateToProcess > limitToReach) break;

            for (int candidateCIndex = 0; candidateCIndex < primeNumbersSet.size(); candidateCIndex++) {
                int thirdCandidateToProcess = primeNumbersSet[candidateCIndex];
                if (secondCandidateToProcess > std::round(limitToReach / 6)) break;

                long long productOfPrimes = static_cast<long long>(firstCandidateToProcess) * secondCandidateToProcess * thirdCandidateToProcess;
                if (productOfPrimes > limitToReach) break;

                if (firstCandidateToProcess == secondCandidateToProcess || secondCandidateToProcess == thirdCandidateToProcess || thirdCandidateToProcess == firstCandidateToProcess) continue;

                if (numbersChecked.find(productOfPrimes) != numbersChecked.end()) continue;

                numbersChecked.insert(productOfPrimes);
                numbersGotIt++;
            }
        }
    }

    int finalStart = 1;
    while (true) {
        long long numberToCheck = static_cast<long long>(std::pow(primeNumbersSet[finalStart - 1], 7));
        if (numberToCheck > limitToReach) break;

        numbersGotIt++;
        finalStart++;
    }

    std::cout << "Number got it: " << numbersGotIt << std::endl;

    return 0;
}
