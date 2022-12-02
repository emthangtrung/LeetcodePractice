// compare 2 string
// return true if 2 string is anagram
// return false if 2 string is not anagram
// s1 : "anagram"         s2: "nagaram"       => true
// s1 : "rat"             s2: "car"           => false

let s1 = "danh";
let s2 = "hnbd";

const map = new Map();

const isAnagram = (s1, s2) => {
  if (s1.length != s2.length) return false; // if dif length false right away

  // get freqency of char in s1
  for (let i = 0; i < s1.length; i++) {
    let char = s1.charAt(i);

    if (map.has(char)) {
      let value = map.get(char);
      map.set(char, value + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    // subtract value from key char in s2
    let char = s2.charAt(i);

    if (map.has(char)) {
      let value = map.get(char);
      map.set(char, value - 1);
    }
  }

  //check if map has all value == 0
  for (const [char, count] of map) {
    // O(n)
    const isEmpty = count === 0;
    if (!isEmpty) return false;
  }
  return true;
};

let c = isAnagram(s1, s2);

console.log(c);
