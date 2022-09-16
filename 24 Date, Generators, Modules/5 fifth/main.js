//using performance.now() to measure time

let start1 = performance.now();

for (let i = 0; i < 99999; i++) {
  //   div = document.createElement("div");

  //   div.innerHTML = `i am div from performance.now() ${i}`;
  //   document.body.appendChild(div);
  console.log(i);
}

let end1 = performance.now();

// console.log(`Time taken: ${end1 - start1}ms`);
console.log(`Loop Took ${parseInt(end1 - start1)} Milliseconds.`);
