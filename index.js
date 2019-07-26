const sumItems = function(array) {
  let sum = 0;
  array.forEach(e => {
    if (Array.isArray(e) === true) {
      sum += sumItems(e);
    } else {
      sum += e;
    }
  });
  return sum;
};

module.exports = sumItems;