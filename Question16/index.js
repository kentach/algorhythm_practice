{
  const mostFrequentWord = (S) => {
    let count = {};

    for (const n of S) {
      if (count[n]) {
        count[n]++;
      } else {
        count[n] = 1;
      }
    }

    let mostFrequentWord = "";
    let maxNum = 0;

    for (const key in count) {
      if (count[key] > maxNum) {
        maxNum = count[key];
        mostFrequentWord = key;
      }
    }
    return mostFrequentWord;
  };

  console.log(mostFrequentWord("aab"));
  console.log(mostFrequentWord("abc"));
  console.log(mostFrequentWord("bbb"));
}
