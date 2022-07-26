// const outer = () => {
//   const x = 10;

//   const inner = () => {
//     console.log("The value of x is: " + x);
//   }
//   return inner;
// };

// const foo = outer();
// foo();

const foo = (() => {
  const x = 10;

  const inner = () => {
    console.log("Value of x is: " + x);
  }

  return inner;
})();

foo();
