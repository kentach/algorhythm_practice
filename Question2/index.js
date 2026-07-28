{
//  3 文字の文字列 S を引数として受け取ります。 S の中で 1 度だけ含まれる文字 1 つを返り値にする関数を書いてください。 
//  但し、そのような文字が存在しない場合は代わりに -1（数値 or 文字列） を返り値にしてください。

// 例 1："aab" -> "b"
// 例 2："abc" -> "a" または "b" または "c"(※ どれでもいいので)
// 例 3："ppp" -> -1 (1 度だけ含まれる文字がないので)

function solution (S) {
  const count = {}

  for (const word of S) {
    
    if (count[word]) {
      count[word] ++
    } else {
      count[word] = 1
    }
  }
  // {a: 1}があれば キーに「＋１」する

  for (const word of S) {
    if (count[word] === 1) {
      return word
    }
  }
  
  return -1
}
// person["name"] = "kenta"
// オブジェクト["キー"] = "バリュー"

console.log(solution("aab"));
console.log(solution("abc"));
console.log(solution("ppp"));

}