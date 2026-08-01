{
  function solution(S) {
    let count = 1; // aaの時点でカウントは２。
    let maxCount = 1;
  
    for (let i = 0; i < S.length - 1; i++) {
      if (S[i] === S[i + 1]) {
        count++;
      } else {
        count = 1;
      }
      maxCount = Math.max(maxCount, count);
      // maxCountとcountを比較大きい方を入れる
    }
  
    return maxCount;
  }
  
  
  console.log(solution("aabbbcccc")); // 4
  console.log(solution("abcde"));     // 1
  console.log(solution("aaab"));      // 3
  console.log(solution("aabc"));      // 2
}
