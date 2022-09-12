// Edit The Class
class User {
  //define private c card
  #c;

  //construstor for properties
  constructor(username, card) {
    this.u = username;
    this.#c = card;

    //make regular expression for card to check if it is nums have the symbol - after 4 nums
    let d = /\d{4}-/gi;

    //that match the card
    this.dd = this.#c.toString().match(d);

    //if dd is not null => that mean the card hve the symbol - after 4 nums
    if (this.dd) {
      this.trial = this.#c.toString();
    } else {
      //here i made a property that make symbol - after 4 nums
      this.trial = this.#c
        //first i convert the card to string
        .toString()
        //that regular expression make arr of 4 nums each others
        .match(/.{1,4}/g)
        //here i join the arr with symbol -
        .join("-");
    }

    //i made showDate as a property
    // this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.trial}`;
  }
  //there is a way to make it with method by get and set
  //we must put it in the class not in the constructor like the above
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.trial}`;
  } //we will call it as a property not as a method
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
