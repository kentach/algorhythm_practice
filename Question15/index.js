{
  function findVowel(S){
    let result = "";
    const vowel = "aiueo";

    for(const n of S){
      if(vowel.includes(n)){
        result += n
      }
    }
    return result ? result : -1
  }
  console.log(findVowel("javascript"));
  console.log(findVowel("rhythm"));
  
}
