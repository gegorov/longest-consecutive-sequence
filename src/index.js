module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length === 0) {
    return 0;
  }
  const set = new Set(array);
  let longestSeq = 0;
  for (const number of set) {
    if (!set.has(number - 1)) {
      let current = number;
      let counter = 1;

      while (set.has(current + 1)) {
        current += 1;
        counter += 1;
      }

      longestSeq = longestSeq >= counter ? longestSeq : counter;
    }
  }
  // set.forEach((number) => {
  //   if (!set.has(number - 1)) {
  //     let current = number;
  //     let counter = 1;

  //     while (set.has(current + 1)) {
  //       current += 1;
  //       counter += 1;
  //     }

  //     longestSeq = longestSeq >= counter ? longestSeq : counter;
  //   }
  // });
  return longestSeq;
};
