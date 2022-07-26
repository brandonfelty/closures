// const rollDie = () => {
//   return Math.floor(1 + Math.random() * 6);
// };

// console.log(rollDie());

const makeLoadedDie = () => {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = 0;
  const increment = () => {
    i++
  }

  return () => {
    let rollResult = list[i];
    increment();
    return rollResult; 
  };
};

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
