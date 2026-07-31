{
  function solution(S) {
    const vowels = "aiueo";
    let result = "";

    for (let i = 0; i < S.length; i++) {
      const index = i + 1;
      if(index % 2 === 0 && !vowels.includes(S[i])){
        result += S[i]
      }
    }
    return result
  }
  console.log(solution("abcdefgh"));
  console.log(solution("programming"));
}
