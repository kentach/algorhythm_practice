{
  function solution(S) {
    const middle = S.length / 2;
    const secondHalf = S.slice(middle);
    const firstHalf = S.slice(0, middle)
    
    return secondHalf + firstHalf
  }
  console.log(solution("abcdef"));
  console.log(solution("abcd"));
  console.log(solution("hellohello"));
}
