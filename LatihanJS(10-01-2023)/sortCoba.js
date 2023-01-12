const rows = [
  { id: 1, name: 'sabrina', age: 36 },
  { id: 2, name: 'andika', age: 29 },
  { id: 3, name: 'rizki', age: 28 },
];

const result = rows.sort((a, b) => {
  const nameA = a.name.toLowerCase(); // ignore upper and lowercase
  const nameB = b.name.toLowerCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(result);
