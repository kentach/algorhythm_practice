{
  function findSameWord(S) {
    let count = 0;

    for (let i = 0; i < S.length - 1; i++) {
      if(S[i] === S[i + 1]) {
        count++
      }
    }
    return count
  }
  console.log(findSameWord("aabbcc"));
  console.log(findSameWord("abca"));
  console.log(findSameWord("abcccde"));
  
  
}