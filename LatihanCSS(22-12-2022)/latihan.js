const oddDisplay = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

// console.log(oddDisplay(200));

const rankProgrammer = (salary) => {
  let rank = '';
  if (salary < 12000000 && salary >= 6000000) {
    rank = 'Junior Programmer';
  } else if (salary < 20000000 && salary >= 12000000) {
    rank = 'Mid Programmer';
  } else if (salary < 35000000 && salary >= 20000000) {
    rank = 'Senior Programmer';
  } else if (salary <= 50000000 && salary >= 35000000) {
    rank = 'Lead Programmer';
  } else {
    rank = 'Not Ranked';
  }
  return rank;
};

// console.log(rankProgrammer(19000000));

const arithmeticProgression = (a, b) => {
  let result = [];
  for (let i = a; i <= b; i++) {
    let pushNum = 1 + (i * (i - 1)) / 2;
    result.push(pushNum);
  }
  return result;
};

console.log(arithmeticProgression(1, 3), 'Contoh 1');
console.log(arithmeticProgression(1, 5), 'Contoh 2');
console.log(arithmeticProgression(222, 232), 'Contoh 3');
