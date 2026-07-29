{
  function findMostFrequentWord(S) {
    let count = {};
    for (const n of S) {
      if (count[n]) {
        count[n]++;
      } else {
        count[n] = 1; // { b:1, a:3, n:2 }
      }
    }
    let maxNum = 0;
    let answer = "";
    for (const key in count) {
      if (count[key] > maxNum) {
        maxNum = count[key];
        answer = key
      }
    }
    console.log(answer);
  }

  console.log(findMostFrequentWord("banana"));
  console.log(findMostFrequentWord("aabbbbccd"));
}
