{
  // function solution(S) {
  //   let seenWords = ""
  //   for(let i = 0; i < S.length; i++) {
  //     if(!seenWords.includes(S[i])) {
  //       seenWords += S[i]
  //     } else {
  //       return i + 1;
  //     }
  //   }

  //   return -1
  // }

  // console.log(solution("abac"));
  // console.log(solution("abcabc"));
  // console.log(solution("aabb"));
  // console.log(solution("abcd"));

  function solution(S) {
    const seenWords = new Set();

    for (let i = 0; i < S.length; i++) {
      if(seenWords.has(S[i])){
        return i + 1;
      }
      
      console.log(seenWords.add(S[i]));
      
    }
  }

  console.log(solution("abac"));
  console.log(solution("abcabc"));
}
