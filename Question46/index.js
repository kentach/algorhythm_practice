{
  function solution(S) {
    let duplicateChar = "";
    for (let i = 0; i < S.length; i++) {
      if (duplicateChar.includes(S[i])) {
        return i + 1;
      }
      duplicateChar += S[i];
    }
    return -1;
  }
  console.log(solution("abac")); // 3
  console.log(solution("abcabc")); // 4
}
