{
  function findMultipleOfFive(S) {
    let result = "";

    for (let i = 0; i < S.length; i++) {
      const index = i + 1;
      if (index % 5 === 0 || String(index).includes("5")) {
        result += S[i];
      }
    }

    return result;
  }
  console.log(findMultipleOfFive("abcdefghijklmno"));
  console.log(findMultipleOfFive("0123456789"));
  console.log(findMultipleOfFive("abcdefghijklmnopqrstuvwxyz"));
}
