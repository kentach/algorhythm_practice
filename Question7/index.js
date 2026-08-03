{
  function findDifferentWords(S) {
    let result = ""
    for (const char of S) {
    if (!result.includes(char)) {
        result += char
      }
    }
    return result.length
    
  }
  console.log(findDifferentWords("banana"));
  console.log(findDifferentWords("aabbcc"));

  // セット関数を使った方法
  function set(S){
    return new Set(S).size
  }
  console.log(set("banana"));
  
  
}
