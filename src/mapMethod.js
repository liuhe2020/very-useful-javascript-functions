// make your own Array.map method

// higher order function
function mapMethod(array, generalizer) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const transformed = generalizer(array[i]);
    newArray.push(transformed);
  }
  return newArray;
}

// callback function
function generalizer(obj) {
  const { name, age } = obj;
  return { name, age: age + 1 };
}

console.log(
  mapMethod(
    [
      { name: 'Mormont', age: 20 },
      { name: 'Lannister', age: 30 },
    ],
    generalizer
  )
);
