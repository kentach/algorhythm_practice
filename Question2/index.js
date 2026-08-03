{
  function solution(S) {
    let count = {};
    for(const char of S){
      if(count[char]){
        count[char]++
      } else {
        count[char] = 1
      }
    }

    let result = ""
    for(const val in count){
      if(count[val] === 1){
        result = val
      }
    }

    return result ? result : -1
    console.log(result);
    
  }
  console.log(solution("aab")); // b
  console.log(solution("abc")); // a
  console.log(solution("ppp")); // -1
}
