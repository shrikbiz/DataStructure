/*
given a string with parenthises, determine if it has closing parentheses for respective opening parentheses;
{}{}{{{]}}
false

{ [ ( < > ) ] }

true

rough work area:

trverse through the string;
if the brac is opening, we pop
if brac is closiong, we check the top value
    if brac is the oprning one for that brac, we pop;

if stack is empty return true; else we return false;

{{{( }}

stack =  { { { 
let stack = [];
for(i= 0; i < str.length; i++){
    let openingBrac = ''
    if (str[i] === '{' || str[i] === '[' || str[i] === '(' || str[i] === '<'){
        stack.push(str[i]);
    } else {
        if (str[i] ==='}' ) openingBrac = '{';
        if (str[i] ===']' ) openingBrac = '[';
        if (str[i] ===')' ) openingBrac = '(';
        if (str[i] ==='>' ) openingBrac = '<';
        if (stack[1] === openingBrac) { 
            stack.pop()
        } else if (openingBrac){
            return false;
        }
    }
}
return (stack.length) false : true;
*/

// try 1

// let string = ")(";

// let balanceExpression = (str) => {
//   let stack = [];
//   for (i = 0; i < str.length; i++) {
//     let openingBrac = "";
//     console.log(str[i]);
//     if (str[i] === "{" || str[i] === "[" || str[i] === "(" || str[i] === "<") {
//       stack.push(str[i]);
//     } else {
//       if (str[i] === "}") openingBrac = "{";
//       if (str[i] === "]") openingBrac = "[";
//       if (str[i] === ")") openingBrac = "(";
//       if (str[i] === ">") openingBrac = "<";
//       if (stack[stack.length - 1] === openingBrac) {
//         stack.pop();
//       } else if (openingBrac) {
//         return false;
//       }
//     }
//   }
//   console.log("balanceExpression -> stack.length", stack.length);
//   return stack.length ? false : true;
// };

// console.log(balanceExpression(string));

// try 2 imporving code a bit

let string = "(((((ask'(<>)'ga)af{}af)d)))";

let closeCheck = (item, stackTop) => {
  if (item === "}") item = "{";
  else if (item === "]") item = "[";
  else if (item === ")") item = "(";
  else if (item === ">") item = "<";
  return (item = stackTop);
};

let balanceExpression = (str) => {
  let stack = [];
  let open = new Set(["{", "[", "<", "("]);
  let close = new Set(["}", ")", ">", "]"]);

  for (i = 0; i < str.length; i++) {
    if (open.has(str[i])) {
      stack.push(str[i]);
    } else if (close.has(str[i])) {
      let item = str[i];
      if (closeCheck(item, stack[stack.length - 1])) stack.pop();
    }
  }

  return !stack.length;
};

console.log(balanceExpression(string));
