{
  function findDuplicateWord(S) {
    let result = {}
    let duplicateWord = ""

    for(const n of S){
      if(result[n]){
        result[n]++
      } else {
        result[n] = 1
      }
    }

    for(const key in result){
      if(result[key] !== 1){
        duplicateWord += key
      }
    }
    return duplicateWord
  }
  
  console.log(findDuplicateWord("banana"));
  
}