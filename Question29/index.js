{
  function findLongChar(S) {
    let maxLength = 0;
    let result = "";
    const array = S.split(" ");

    array.forEach((n) => {
      if (n.length > maxLength) {
        result = n;
        maxLength = n.length;
      }
    });
    return result
  }

  console.log(findLongChar("I am a student"));
}
