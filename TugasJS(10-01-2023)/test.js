const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};

// myFunc(1, 2, 3);

const val = [1, 2];
// Check
val.push(3);
// Error
// val = 3;
// Check
val[1] = 3;
// Check
Object.assign(val, [...val]);

// console.log(val);

const data = { name: 'John' };
const newData = data;
data.age = 25;

// console.log(newData.age);

const square = (n) => {
  n * n;
};

// console.log(square(5));

const createName = (params) => ({ name: 'John' });
const createName2 = (params) => {
  name: 'John';
};

console.log(createName());
console.log(createName2());
