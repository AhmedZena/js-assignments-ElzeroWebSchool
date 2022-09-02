//assignment one 

let start = 10;
let end = 100;
let exclude = 40;

for ( i = start; i <= end; i=i+10) {
  if (i=== exclude) {
    continue;
  }
    console.log(i);
}

// assignment two
console.log("Assignment Two");

let start1 = 10;
let end1 = 0;
let stop1 = 3;
console.log(start1);
for ( i = start1; i >= stop1; i=i-1) {
    if (i< start1) {
        i = `0${i}`;
                console.log(i);
    }



//  i<start1 ? console.log(`${0}${i}`) : stop;
// if (i<start1) {  
//     console.log(`${end1}${i}`)
// if (i=== stop1) {
//       break;
//     }}
//   console.log(i);
}






// assignment three


let start2 = 1;
let end2 = 6;
let breaker2 = 2;


for (i = start2; i <= end2; i++) {
   
    console.log(i);
 document.write(`<h3>${i}</h3>`);
    for (j =breaker2 ; j < end2; j= j+breaker2) {
     console.log( `-- ${j}`);
        document.write(`<p>-- ${j}</p>`);
 }

}



// assignment four


let index4 = 10;
let jump4 = 2;
let end4 = 0;

i1 = index4;
for (;;) {

    if (i1 === jump4) {
        break;
    }
    console.log(i1);
    i1 = i1 - jump4;
}


// assignment five

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
// +false = 0  
let a5 = [];
for (i=+false ; i<friends.length; i++) {
    if (friends[i].charAt(+false).toLowerCase() !== letter) {
        a5.push(friends[i]);
        console.log(`"${a5.indexOf(friends[i])+ letter.length } => ${friends[i]}"`);
        // console.log(friends[i]);
    }
} // a5=['Sayed', 'Eman', 'Mahmoud', 'Osama', 'Sameh']


//  assignment six  

let start6 = 0;
let swappedName6 = "elZerO";
let swappedName66 = "";
console.log(swappedName6.length);
// console.log(swappedName6.charAt(2));
for (i=0 ; i<swappedName6.length; i++) {
 
if (swappedName6.charAt(i) === swappedName6.charAt(i).toLowerCase() ) {
swappedName66 += (`${swappedName6.charAt(i).toUpperCase()}`);
// console.log(swappedName66);
// console.log(swappedName6.charAt(i));
        
}
if (swappedName6.charAt(i) === swappedName6.charAt(i).toUpperCase() ) {
swappedName66 += swappedName6.charAt(i).toLowerCase();
// console.log(swappedName66);
// console.log(swappedName6.charAt(i));
}

}
console.log(`"${swappedName66}"`);  //"ELzERo" 
// console.log(swappedName66);




// assignment seven

let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];
//console.log(mix7.length);
//console .log(start7.toString().length );

for (i=start7; i<mix7.length; i++) {
    
    if (typeof (mix7[i]) === "number") {
        
        if (mix7[i] === parseInt(start7.toString().length) ){ continue ;}

        console.log(mix7[i]);
    }
} 




