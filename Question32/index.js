{
  function solution(S) {
    let result = false;
    let seen = ""
    for (let i = 0; i < S.length; i++) {
      if(S[i] === S[i+1]) {
        return !result
      } else {
        return result
      }
    }
    
  }
  console.log(solution("aab"));
  console.log(solution("aba"));
  console.log(solution("bbb"));
  
}
