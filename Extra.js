//Detect if a number is prime
function detectPrime(number) {
    if (number<2) {
        return false
    }

    for (let i = 2; i < number; i++) {
        if (number%i==0) {
            return false
        }
    }
    return true;
}

console.log(detectPrime(23));;