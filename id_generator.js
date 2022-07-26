const makeIdGenerator = () => {
  let id = 0;

  return (() => {
    id += 1;
    return id;
  });
};

const nextId = makeIdGenerator();

console.log(nextId());
console.log(nextId());
