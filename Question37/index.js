{
  function solution(S) {
    let result = "";
    let count = 1;

    for (let i = 0; i < S.length; i++) {
      if (S[i] === S[i + 1]) {
        count++
      } else {
        result += S[i] + count
        count = 1
      }
    }
    return result
  }
  console.log(solution("aabaa"));
  console.log(solution("aaabbc"));
}
