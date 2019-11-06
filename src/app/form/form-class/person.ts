export class Person {
  firstName: string;
  lastName: string;
  personId: string;
  email: string;
  username: string;
  password: string;

  constructor(firstName: string, lastName: string, personId: string, email: string, username: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personId = personId;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
