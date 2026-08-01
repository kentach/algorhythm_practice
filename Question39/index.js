{
  function solution(S){
    let count = {}
    for(const char of S){
      if(count[char]){
        count[char]++
      } else {
        count[char] = 1
      }
    }
    let result = ""
    for(const val in count){
      if(count[val] === 2){
        return val
      }
    }

    return result ? result : -1
    
  }
  console.log(solution("aabb"));
  console.log(solution("abcd"));
  console.log(solution("aaab"));
  console.log(solution("aabc"));
  
}
