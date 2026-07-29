{
  function findVowel(S){
    let result = "";
    const vowel = "aiueo";

    for(const n of S){
      if(vowel.includes(n)){
        result += n
      }
    }
    return result
  }
  console.log(findVowel("javascript"));
  
}
