{
  function findSameChar(S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
      if (S[i] === S[i + 1]) {
        count++;
      }
    }
    return count;
  }
  console.log(findSameChar("aabbcc"));
  console.log(findSameChar("abca"));
  console.log(findSameChar("aaa"));
  console.log(findSameChar("abcccde"));
  console.log(findSameChar("a"));
}
