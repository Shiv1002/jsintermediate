let s = () => {
  this.b = "a";
  console.log(this === globalThis); //false
};
let sm = function () {
  this.a = "a";
  console.log(this === globalThis); //true
};

s();
sm();

console.log(this === globalThis); // false

//aisa kyu ho raha nahi pata
