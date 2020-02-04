class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.firstName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); 
      this.phone = phone;
      this.membership = membership;
    }

    static getMembershitCost() {
      return 500;
    }
  }


const john = new Customer('john', 'doe', '818', 'black card')

console.log(Customer.getMembershitCost());