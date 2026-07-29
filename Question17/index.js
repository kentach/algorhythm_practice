{
  function reverseString (text){
    let result = ""
  
    for (let i = text.length - 1; i >= 0; i--) {
      result += text[i]
    }
    return result
  }

  function isBackward(S){
    return reverseString(S) === S
  }


  console.log(isBackward("aba"));
  console.log(isBackward("abc"));
  
}
