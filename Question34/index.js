{
  function addition(S) {
    let result = 0;
    const num_array = S.split("").map(Number)
    num_array.forEach((num) => {
      result += num
    })
    return result
  }
  console.log(addition("12345"));
  console.log(addition("999"));
  console.log(addition("10203"));
}
