{
  function solution(S){
    let count = {};
    for(const char of S){
      count[char] = (count[char] || 0) + 1
      // count[char]が 0 でなければ +1
    }

    for(const val in count){
      if(count[val] === 2){
        return val
      }
    }
    return -1
  }

  console.log(solution("abac")); // a
  console.log(solution("abcabc")); // a
  console.log(solution("abcd")); // -1
}
