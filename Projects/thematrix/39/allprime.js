function sumPrimes(num) {
    function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
    }
    return number > 1;
    }
    
    let sum = 0;
    for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
    sum += i;
    }
    }
    return sum;
    }