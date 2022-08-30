//first assignment 

let username= "Elzero";
console.log  (username.charAt(0).toLowerCase() ) ;
console.log  (username.substring(0,1).toLowerCase() ) ;
console.log  (username.substr(0,1).toLowerCase() ) ;
console.log  (username.slice(0,1).toLowerCase() ) ;
console.log (username.replace("Elzero","e"))
console.log  (username[0].toLowerCase().repeat(3) ) ;


console.log ("__________________________________________")
// that is outbox sol that can access Ram very slow than others but still sol 
// i split word from that to output as ['E', ''] then took firstCh then smalled it 
let EE = username.split("lzero");
let firstCh = EE[0];
//console.log ( EE) ;
console.log ( firstCh.toLowerCase()) ;





// second assignment 
let word ="Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log (word.includes(letterZ));

// js is case sensitive so wee need to capital and small letters when needed 
console.log (word.startsWith(letterE.toUpperCase()));
console.log (word.endsWith(letterO.toLowerCase()));







