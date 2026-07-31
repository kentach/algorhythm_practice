{
  function solution(S) {
    const sortedArray = S.split("").sort();
    const result = sortedArray.slice(-1).join()
    return result
  }
  console.log(solution("bac"));
  console.log(solution("zzz"));
  console.log(solution("gpa"));
}
