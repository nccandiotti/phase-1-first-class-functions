"strict";

// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }
// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }
// function Monday() {
//   exerciseRoutine(liftWeights);
// }
// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   //   postRunActivity();
// }
/////////////////////////////////////////
// inline functions
// exerciseRoutine(function () {
//   console.log("Stretch! Work that core!");
// });
// exerciseRoutine(() => console.log("Stetch! Work that core!"));

// Because we only need to use our function this one time, there's no need to give it a name or assign it to a variable. Instead, we define it inline as an anonymous function, passing it as the argument when we call exerciseRoutine().
//receivesAFunction
// function receives (aFunction) {
//     console.log(`I received a function!`)}
function hello() {
  console.log("Hello");
}
function receivesAFunction() {
  return receives();
}

// function returnsaNamedFunction (){
function returnsANamedFunction() {
  return function receives() {
    return "HI";
  };
}

function returnsAnAnonymousFunction() {
  return function () {};
}
