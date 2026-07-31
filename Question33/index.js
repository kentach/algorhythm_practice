{
  function findDuplicateWord(S) {
    let count = {};
    for (const char of S) {
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
      
    }

    let result = "";
      for (const key in count) {
        if (count[key] >= 2) {
          result += key;
        }
      }
      return result ? result[0] : -1;
    }

  console.log(findDuplicateWord("aab"));
  console.log(findDuplicateWord("abc"));
  console.log(findDuplicateWord("ppp"));
  console.log(findDuplicateWord("aabb"));

}
