{
  function findA (S) {
    let count = 0;
    for (const n of S) {
      if(n === "a") {
        count++
      }
    }
    return count
  }

  console.log(findA("banana"))
  console.log(findA("apple"))
  console.log(findA("banana"))
  
  
}