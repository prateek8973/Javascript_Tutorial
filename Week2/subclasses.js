class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1.getSummary()); // Output: Mag One was written by John Doe in 2018
// The Magazine class inherits the properties and methods of the Book class.
// The Magazine class has its own constructor that calls the parent constructor using super.
// The Magazine class has its own getSummary method, but it can also use the getSummary method from the Book class.
// The Magazine class has its own month property.