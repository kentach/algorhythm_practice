{
  function findDifferentWords(S) {
    let result = "";

    for (const n of S) {
      if (!result.includes(n)) {
        result += n
      }
    }
    return result.length
  }
  console.log(findDifferentWords("banana")); 
  console.log(findDifferentWords("aabbcc"));
  
}