import '../scss/user.scss';

export default class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hi, ${this.firstName} ${this.lastName}`;
    }
}