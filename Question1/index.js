{
  
// Aは長さ1以上100以下の文字列である。
// Aが引数として与えられたとき、3の倍数または3が含まれる順番
// （例：3,6,9,12,13,15,18,21,23,24...）における文字列をつなげた文字列を返り値にする関数を書いてください。

// 入力： "abcdefghi"
// 3の倍数、または3が含まれる順番：3, 6, 9
// 該当する文字："c", "f", "i"
// 出力："cfi"

  function solution (A) {
    let result = ""

    for(let i = 0; i < A.length; i++) {
      const index = i + 1;
      const stringIndex = String(index);
      
      if (index % 3 === 0 || stringIndex.includes("3")) {
        result += A[i]
      }
    }

    return result  
  }
  console.log(solution("abcdefghi"))
  console.log(solution("123456789"))
  console.log(solution("abcdefghijklmnopqrstuvwxyz"))


  // filterを使ったやり方
  // 1. 引数をスプレッド構文を使って配列に変換する
  // 2. filterメソッドを使用し、return以降に条件を記述。
  // 3. その返り値をarrayで受け取り、joinメソッドで配列から文字列に変換

  function filterMethod (A) {
    const array = [...A].filter((_, index) => {
      const stringIndex = index + 1
      return index % 3 === 0 || String(index).includes('3')
    })
    return array.join("")
  }

  console.log(solution("abcdefghijklmnopqrstuvwxyz"));
}
  