{
  function countEachChar(S) {
    let count = ""
    const array = S.split(" ")
    array.forEach(n => {
      count += n.length + " "
    });
   return count.trim()
  }
  console.log(countEachChar("I am a student"))
}
