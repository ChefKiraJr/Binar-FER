class Row {
  constructor(makeRow) {
    this.rows = makeRow;
  }
  getIndexOf(array) {
    return array.map((num) => this.rows.indexOf(num));
  }
  getValue(index) {
    return this.rows[index];
  }
  sortDescending() {
    return this.rows.sort((a, b) => b - a);
  }
}

const makeRow = () => {
  let arr = [];
  for (let i = 1; i <= 500; i++) {
    arr.push(i * 2 - 1);
  }
  return arr;
};

const numArray = new Row(makeRow());

console.log(numArray.getIndexOf([52, 55, 57, 68, 77]));
console.log(numArray.getValue(250));
console.log(numArray.sortDescending());
