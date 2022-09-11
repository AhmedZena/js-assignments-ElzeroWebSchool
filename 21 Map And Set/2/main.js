//second assignment

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

//make new set from the sorted array
let myFriendsSet = new Set(myFriends.sort());
console.log(myFriendsSet);

//another way to make set from array
//another way to sort array
myFriends.sort((a, b) => a.localeCompare(b));
let myFriendsSet2 = new Set(myFriends);
console.log(myFriendsSet2);

//  Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];
