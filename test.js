function isPrime(number) {
    if (number < 2) return false; 
    let i = 2;
    while (i < number) {
        if (number % i === 0) {
            return false; 
        }
        i++;
    }
    return true; 
}
    let n = 2; 
    while (n <= 20) {
    if (isPrime(n)) { 
        console.log(n);
    }
    n++; 
}


