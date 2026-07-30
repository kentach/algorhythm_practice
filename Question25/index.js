{
  function toUpperCaseFirstChar(S){
    const array = S.split(" ")
    const result = array.map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })

    return result.join(" ")
  }

  console.log(toUpperCaseFirstChar("hello world"));
  
}
