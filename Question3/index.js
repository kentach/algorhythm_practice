{
  function solution (S) {
    let count = {}

    for (const n of S) {
      if (count[n]) {
        count[n]++
      } else {
        count[n] = 1
      }
    }
  
    for (const n of S) {
      if (count[n] === 2) {
        return n
      }
    }
  
    return -1
  }
  console.log(solution("abac"));
  console.log(solution("abcabc"));
  console.log(solution("abcd"));
  
}