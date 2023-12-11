// Create a Caesar's Cipher function

function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  let newS = s.split("");
  const shift = (letter) => {
    let upper = false;
    if (/[A-Z]/.test(letter)) upper = true;
    if (/[A-Z, a-z]/.test(letter)) {
      let index = alphabetArr.indexOf(letter.toLowerCase());
      index = (index + k) % 26;
      if (upper) return alphabetArr[index].toUpperCase();
      return alphabetArr[index];
    }
    return letter;
  };
  for (let i = 0; i < s.length; i++) {
    newS[i] = shift(newS[i]);
  }
  return newS.join("");
}

console.log(caesarCipher("aBc", 1));
