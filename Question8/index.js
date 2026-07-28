{
  function pickDifferentWord(S){
    let result = "";

    for(const n of S){
      if(!result.includes(n)) {
        result += n
      }
    }

    return result
  }
  console.log(pickDifferentWord("mississippi"));
  
  
}