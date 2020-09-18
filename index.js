let sumItems = function (array) {
  //base case: we are at the end of the array.
  let sum = 0;
    array.forEach((i) => {
      if (Array.isArray(i)) {
        sum += sumItems(i);
      } else {
        sum = sum + i;
      }
      });
     
      return sum;
};

console.log(sumItems([5, 4, 6, [6, 5], 7]));

module.exports = sumItems;