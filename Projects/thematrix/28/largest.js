function thirdHighest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
  
      // Update the third highest number if the current number is higher
      if (num > third) {
        third = num;
      }
      // Update the second highest number if the current number is higher than the second highest but not the highest
      else if (num > second && num <= third) {
        second = num;
      }
    }
  
    return third;
  }
  
  const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
  console.log(thirdHighest(arr)); // Output: 11
  