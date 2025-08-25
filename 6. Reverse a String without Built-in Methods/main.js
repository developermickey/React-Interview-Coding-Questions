// Reverse a String without Built-in

function strReverse(str) {
  //   let ans = [];
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     ans += str[i];
  //   }
  //   return ans;

  return str.split("").reverse().join("");
}

console.log(strReverse("hello world"));
