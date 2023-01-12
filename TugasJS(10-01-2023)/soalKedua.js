class FinalValue {
  constructor(value) {
    this.value = value;
  }
  getFinalValue() {
    const arr = this.value;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'X--' || arr[i] === '--X') {
        count--;
      } else {
        count++;
      }
    }
    return count;
  }
  showIndexValue(index) {
    const arr = this.value;
    const result =
      arr[index] === 'X--' || arr[index] === '--X' ? 'decrement' : 'increment';
    return result;
  }
}

const operation = new FinalValue(['X++', '++X', '--X', '++X', 'X--', 'X++']);

console.log(operation.getFinalValue());
console.log(operation.showIndexValue(4));
