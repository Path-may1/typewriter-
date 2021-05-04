
// setTimeout function to print the sentence in animated and the same line
//process.stdout.write
const sentence = "hello there from lighthouse labs\n";
let i =0;
for (const letter of sentence) {
  setTimeout (() => {process.stdout.write(letter)}, ++i * 50);
}





// const h = function(){
//   console.log("h")
//   };
// setTimeout(h, 0);


// const e = function(){
//   console.log("e")
//   };
// setTimeout(e, 50);

// const l = function(){
//   console.log("l")
//   };
// setTimeout(l, 100);

// const l = function(){
//   console.log("l")
//   };
// setTimeout(l, 150);

// const 0 = function(){
//   console.log("0")
//   };
// setTimeout(ThirdOneSec, 0);

