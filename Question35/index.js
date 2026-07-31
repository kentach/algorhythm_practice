{
  function solution(S) {
    let result = 0;
    const array_num = S.split("").map(Number);
    const maxNum = Math.max(...array_num);
    const minNum = Math.min(...array_num);

    return result = maxNum - minNum
  }
  console.log(solution("35172"));
  console.log(solution("999"));
  console.log(solution("102938"));
}
