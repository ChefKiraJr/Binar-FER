class Row {
  constructor(number) {
    this.rowNumber = number;
  }
  displayArray() {
    return console.log(this.rowNumber);
  }
  rowSorting() {
    return console.log(this.rowNumber.sort((a, b) => b - a));
  }
}

const array = new Row([1, 3, 5, 7, 11]);

array.rowSorting();
