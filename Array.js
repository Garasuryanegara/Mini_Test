const primeNumber = (value) => {
  if (value <= 1) {
    return false;
  }
  if (value <= 3) {
    return true;
  }
  if (value % 2 === 0 || value % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= value) {
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

let output = "";
for (let i = 100; i >= 1; i--) {
  if (!primeNumber(i)) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FooBar";
    } else if (i % 5 === 0) {
      output += "Bar";
    } else if (i % 3 === 0) {
      output += "Foo";
    } else {
      output += i;
    }
    output += ", ";
  }
}
console.log(output);
