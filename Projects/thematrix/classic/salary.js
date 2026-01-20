class UserInfo {
    constructor(id, userName, salary, experience, age) {
      this.id = id;
      this.userName = userName;
      this.salary = salary + 500;
      this.experience = experience;
      this.age = age;
    }
  
    bounce() {
      const baseSalary = this.salary;
  
      const contractType =
        this.age < 25
          ? 'Part-time work'
          : this.experience <= 10
          ? 'Full-time contract (less than 10 years exp.)'
          : 'Full-time contract (more than 10 years exp.)';
  
      return `${contractType}. Salary: $${baseSalary * (this.experience <= 10 ? 1.1 : 1.2)}`;
    }
  }
  
  const userOne = new UserInfo(1, 'hassan', 2000, 2, 23);
  const userTwo = new UserInfo(2, 'aicha', 2100, 5, 30);
  const userThree = new UserInfo(3, 'gabor', 2200, 12, 28);
  
  console.log(userOne.bounce()); // Part-time work
  console.log(userTwo.bounce()); // Full-time contract (less than 10 years exp.)
  console.log(userThree.bounce()); // Full-time contract (more than 10 years exp.)
  