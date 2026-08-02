{
  function solution(S) {
    let count = 1;
    let maxCount = 1;
  
    for (let i = 0; i < S.length - 1; i++) {
      if(S[i] === S[i+1]){
        count++
      } else {
        count = 1
      }
      maxCount = Math.max(maxCount, count);
    }
    return 
    
  }
  console.log(solution("aabbbcccc"));
}
