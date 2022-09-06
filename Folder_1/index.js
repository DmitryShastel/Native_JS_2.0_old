let arr = [1, 2, 3, 4, 5, 6];

let arr2 = arr.filter((e) => {
  if (e % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(arr2);
