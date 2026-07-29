{
  function findEvenNumbers(S) {
    let result = "";
    for (let i = 0; i < S.length; i++) {
      const index = i + 1
      if(index % 2 === 0) {
        result += S[i]
      }
    }
    return result
  }

  console.log(findEvenNumbers("abcdefg"));
  
}