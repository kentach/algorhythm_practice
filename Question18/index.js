{
  // 3文字の文字列 S を引数として受け取ります。
  // S の中に同じ文字が2つ以上含まれているかを判定し、
  // 真偽値（true / false）を返してください。

  function hasDuplicateCharacters (S) {
    let count = {}
    for(const n of S){
      if(count[n]){
        count[n]++
      } else {
        count[n] = 1
      }
    }

    let result = ''
    for(const key in count){
      if(count[key] > 1){
        result = key
      }
    }
    return result ? true : false
  }
  console.log(findDuplicateWords("aab"));
  
}
