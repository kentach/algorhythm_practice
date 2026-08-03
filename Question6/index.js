{
  function findA(S) {
    let count = 0
    for(const char of S){
      if(char === "a"){
        count ++
      }
    }
    return count
  }

  console.log(findA("banana"));
  console.log(findA("apple"));
  console.log(findA("hello"));
}
