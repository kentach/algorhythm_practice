{

  function solution(A) {
    let result = "";

    for (let i = 0; i < A.length; i++) {
      const index = i + 1;

      if (index % 3 === 0 || String(index).includes("3")) {
        result += A[i];
      }
    }

    return result;
  }
  console.log(solution("abcdefghi"));
  console.log(solution("123456789"));
  console.log(solution("abcdefghijklmnopqrstuvwxyz"));

  // filterを使ったやり方
  // 1. 引数をスプレッド構文を使って配列に変換する
  // 2. filterメソッドを使用し、return以降に条件を記述。
  // 3. その返り値をarrayで受け取り、joinメソッドで配列から文字列に変換

  function filterMethod(A) {
    const array = [...A].filter((_, index) => (
      (index + 1) % 3 === 0 || String(index + 1).includes("3")
    ));
    return array.join("");
  }

  console.log(filterMethod("abcdefghijklmnopqrstuvwxyz"));
  console.log(filterMethod("abcdefghi"));
  console.log(filterMethod("123456789"));

  
}
