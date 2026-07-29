{
  // function findNumbers(S){
  //   const numbers = "0123456789"
  //   let count = 0;

  //   for (const char of S){
  //     if(numbers.includes(char)){
  //       count++
  //     }
  //   }
  //   return count
  // }

  // console.log(findNumbers("a1b"));
  // console.log(findNumbers("123"));
  // console.log(findNumbers("abc"));

  function findNumbers(S){
    const numbers = "0123456789"
    return S.split("").filter(char => numbers.includes(char)).length
  }
  console.log(filterMethod("a1b"));
  
}