{
  function Backward(S) {
    let result = ""
    for(let i = S.length - 1; i >= 0; i--){
      result += S[i]
    }
    return result
  }
  console.log(Backward("paiza"));
}
