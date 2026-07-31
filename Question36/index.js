{
  function solution(S) {
    let result = 0;
    let count = {};

    for(const char of S){
      if(count[char]){
        count[char]++
      } else {
        count[char] = 1
      }
    }
    
    
    for(const val in count){
      if(count[val] === 1){
        result += count[val]
      }
    }

    return result ? result : 0
  }
  console.log(solution("aab"));
  console.log(solution("abc"));
  console.log(solution("ppp"));
  console.log(solution("aba"));
}
