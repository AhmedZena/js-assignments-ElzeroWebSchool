

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;

let counter = 0;
console.log(friends);

while (index < friends.length) {
    // console.log(friends[index][counter]);
   maincondition: if (friends[index][counter] !== "A") {
    
     typecondition: if (typeof(friends[index]) != "string") {
            break maincondition;
        }
        console.log(friends[index]);
    }
    index++;    
}

