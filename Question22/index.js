{
  function removeVowel(S) {
    let result = "";
    const vowels = "aiueo";

    for (const char of S) {
      if (!vowels.includes(char)) {
        result += char;
      }
    }

    let backwardChar = "";
    for (let i = result.length - 1 ; i >= 0; i--) {
      backwardChar += result[i];      
    }
    return backwardChar ? backwardChar : -1;
  }

  console.log(removeVowel("hello"));
  console.log(removeVowel("programming"));
  console.log(removeVowel("aeiou"));
}
