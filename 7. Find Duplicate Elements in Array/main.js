// 7. Find Duplicate Elements in Array

let arr = [1, 2, 3, 2, 4, 5, 1];

function checkDuplicates(arr) {
  const seen = new Set();
  const ans = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      ans.add(num);
    }

    seen.add(num);
  }

  return [...ans];
}

console.log(checkDuplicates(arr));
