function factorialize(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorialize(n - 1);
  }
  
  console.log(factorialize(5)); // Output: 120
  