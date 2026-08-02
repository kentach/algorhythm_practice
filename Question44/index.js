{
  function solution(S) {
    let count = 0;
    for (let i = 0; i < S.length - 1; i++) {
      if(S[i] === S[i + 1]){
        count++
      } 
    }
    return count
  }

  console.log(solution("aabbcc"));
  console.log(solution("abccdeff"));
  console.log(solution("aaaa"));
  console.log(solution("abcd"));
}
