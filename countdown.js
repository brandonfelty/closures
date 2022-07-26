const countdownGenerator = (x) => {
  let count = x;
  const subtract = () => {
    count--;
  }

  let message = "";

  return () => {
    if (count > 0) {
      message = "T-minus " + count + "...";
      subtract();
      return console.log(message);
    }

    if (count === 0) {
      message = "Blast Off!";
      subtract();
      return console.log(message);
    }

    if (count < 0) {
      message = "Rockets already gone, bub!"
      return console.log(message);
    }
  }

};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
