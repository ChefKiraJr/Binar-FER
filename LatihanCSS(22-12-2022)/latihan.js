const oddDisplay = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(oddDisplay(200));

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

console.log(rankProgrammer(19000000));
