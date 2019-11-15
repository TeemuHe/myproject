export class Person {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;

  constructor(firstName?: string, lastName?: string, email?: string, username?: string, password?: string, passwordConfirm?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
}
