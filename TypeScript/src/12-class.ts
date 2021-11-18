let prenom!: string;

class Person {
  name!: string;

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

// class Contact {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   hello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const romain = new Contact('Romain');
// romain.name = 'toto';


class Contact {
  constructor(private name: string) {}

  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

class Employee extends Contact {
  constructor(name: string, private employeeNumber: number) {
    super(name);
  }

  hello() {
    super.hello();
    console.log('My number is ' + this.employeeNumber);
  }
}

interface Writable {
  write(msg: string): void;
}

class FileWriter implements Writable {
  contact!: Contact;

  write(msg: string): void {
    // TODO fs.appendFile...
  }
}
