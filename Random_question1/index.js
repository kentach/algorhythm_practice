{
  function solution(S) {
    let seen = ""
    for(const char of S){
      if(seen.includes(char)){
        return char
      }

      seen += char
    }

    return -1
  }
  console.log(solution("abcbad")); // b
  
}
