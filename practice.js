// "use strict";
// lol = "test";
var num = 4;

function outer() {
  let x = 0;
  for (var i = 4; i < 10; i++) {
    i += i;
  }
  console.log(i);
}

outer();
