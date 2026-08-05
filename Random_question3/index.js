{
  function removeDuplicateWords(S) {
    let result = "";
    for (let i = 0; i < S.length; i++) {
      if (S[i] !== S[i + 1]) {
        result += S[i]
      }
    }
    console.log(result);
    
  }

  console.log(removeDuplicateWords("aaabbbccaadd")); // abcad
  console.log(removeDuplicateWords("mississippi")); // misisipi
}
