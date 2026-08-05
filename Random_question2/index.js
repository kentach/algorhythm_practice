{
  function solution(S) {
    let count = {};
    for (const char of S) {
      if (count[char]) {
        count[char]++;
          if(count[char] === 3){
            return char
          }
      } else {
        count[char] = 1;
      }
    }
    return -1
  }

  console.log(solution("abacada")); // a
  console.log(solution("banana")); // a
  console.log(solution("abcabc")); // -1
}
