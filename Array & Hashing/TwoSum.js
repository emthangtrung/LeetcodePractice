let nums = [11, 15, 2, 7];

const twoSum = (nums, target) => {
  //O(n) + O(n) = O(n^2)
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    for (let j = i + 1; j < nums.length; j++) {
      // O(n)
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "can't find";
};

const twoSumMap = (nums, target) => {
  // O(n)
  const map = new Map(); // get element in map = O(1) = >> overall = O(n)
  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i];
    let getindexOfRemain = map.get(remain);
    if (map.has(remain)) {
      return [getindexOfRemain, i];
    }
    map.set(nums[i], i);
  }
  return "can't find";
};

console.log(twoSum(nums, 9));
console.log(twoSumMap(nums, 9));

