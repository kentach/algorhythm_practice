{
  function findMaxCharacter (S) {
    let maxNum = 0;
    let maxCharacter = ""
    const count = {};

    // count[n]は、{count: n}
    // nは個々の文字

    for (const n of S) {
      if (count[n]) {
        count[n]++
      } else {
        count[n] = 1
      }
    }
    
    for (const n of S) {
      if (count[n] > maxNum) {
        maxNum = count[n]
        maxCharacter = n
      }
    }
    return maxCharacter

  }
  console.log(findMaxCharacter("aabcccbb"));
  console.log(findMaxCharacter("abc"));
  console.log(findMaxCharacter("zzzzabc"));
  console.log(findMaxCharacter("aabb"));
  
  
}