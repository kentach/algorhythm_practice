{
  function solution (S) {
    let count = {};

    for(const n of S){
      if(count[n]){
        count[n] ++
      } else {
        count[n] = 1
      }
    }

    let word = ""
    for(const key in count){
      if(count[key] === 1 ){
        word += key
      }
    }
    
    return word === "" ? -1 : word
  }

  console.log(solution("banana"));
  console.log(solution("aabbcc"));
}