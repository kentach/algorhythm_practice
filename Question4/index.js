{
  function findMaxCharacter(S) {
    let count = {};
    for (const char of S) {
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }

    let maxCount = 0;
    let maxCharacter = ""
    for (const val in count) {
      if (count[val] > maxCount){
        maxCount = count[val]
        maxCharacter = val
      }
    }
    return maxCharacter;
  }

  console.log(findMaxCharacter("aabcccbb"));
  console.log(findMaxCharacter("abc"));
  console.log(findMaxCharacter("zzzzabc"));
  console.log(findMaxCharacter("aabb"));
}
