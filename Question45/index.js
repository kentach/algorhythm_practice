{
  function solution(S) {
    let count = {}
    for(const char of S) {
      if(count[char]){
        count[char]++
      } else {
        count[char] = 1
      }
    }
    let result = 0
    for(const val in count){
      if(count[val] === 1){
        result ++
      }
    }
    return result
  }

  console.log(solution("aabbccd")); // 1
  console.log(solution("abcde")); // 5
  console.log(solution("banana")); // 1
  console.log(solution("aabbcc")); // 0
}
