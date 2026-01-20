function sumFibs(num) {
    let sum = 0;
    let a = 1;
    let b = 1;
    while (a <= num) {
    if (a % 2 !== 0) {
    sum += a;
    }
    let temp = a;
    a = b;
    b = temp + b;
    }
    return sum;
    }