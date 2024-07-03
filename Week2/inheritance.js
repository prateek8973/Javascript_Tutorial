function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

//this keyword is similar to self in python

//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
//Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);