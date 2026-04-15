const person = {
    firstName: 'John',
    lastName: 'Smith',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Calling the getter (No parentheses needed)
console.log(person.fullName); // "John Smith"

// Calling the setter
person.fullName = 'Jane Doe';
console.log(person.firstName); // "Jane"