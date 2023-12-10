// Perform q queries where each query consists of some integer string s. For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where x is the first number of the increasing sequence. If there are multiple such values of x, choose the smallest. Otherwise, print NO.

function separateNumbers(s) {
  let answer = "NO";
  for (let i = 1; i < s.length; i++) {
    let section = s.slice(0, i);
    let nextNum = section;
    for (let j = 1n; nextNum.length < s.length; j++) {
      nextNum = nextNum.concat(BigInt(section) + j);
      if (nextNum === s) answer = "YES " + section;
    }
  }
  console.log(answer);
}

separateNumbers("90071992547409929007199254740993");
separateNumbers("45035996273704964503599627370497");
separateNumbers("22517998136852482251799813685249");
separateNumbers("11258999068426241125899906842625");
separateNumbers("562949953421312562949953421313");
