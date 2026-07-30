{
  function backwardChar(S) {
    const array = S.split(" ");
    let reverseWords = [];

    array.forEach((n) => {
      let backward = "";

      for (let i = n.length - 1; i >= 0; i--) {
        backward += n[i];
      }
      reverseWords.push(backward);
    });

    return reverseWords.join(" ");
  }

  console.log(backwardChar("hello world"));
}
