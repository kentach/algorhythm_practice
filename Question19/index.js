{
//  3文字の文字列 S を引数として受け取ります。
//  S の中に含まれる大文字の個数を返してください。

  function findUpperCaseLetters(S){
    let count = 0;

    for(const char of S){
      char === char.toUpperCase() ? count++ : 0
    }
    return count
  }
  console.log(findUpperCaseLetters("AbC"));
  console.log(findUpperCaseLetters("abc"));
  
  
  // 配列に書き換えてfilterを使う方法
  function filterMethod(S){
    return S.split('').filter(char => char === char.toUpperCase()).length
  }
  console.log(filterMethod("AbC"));
  console.log(filterMethod("abc"));
}
