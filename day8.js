/* Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

    A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

checkPart("uwu") // true
// "uwu" is a palindrome without removing any character

checkPart("miidim") // true
// "miidim" can be a palindrome after removing the first "i"

checkPart("midu") // false
// "midu" cannot be a palindrome after removing a character
 */

function checkPart2(part) {
  let leftPointer = 0,
    rightPointer = part.length - 1;
  while (leftPointer < rightPointer) {
    if (part[leftPointer] === part[rightPointer]) {
      leftPointer++;
      rightPointer--;
    } else if (part[leftPointer + 1] === part[rightPointer]) {
      leftPointer++;
    } else if (part[leftPointer] === part[rightPointer - 1]) {
      rightPointer--;
    } else {
      return false;
    }
  }
  return true;
}

function checkPart3(part) {
  const arrPart = part.split("");
  let arrPartR = [...arrPart].reverse();
  console.log(arrPart, arrPartR);
  if (arrPart.some((element, index) => element !== arrPartR[index])) {
    const letter = arrPart.findIndex(
      (element, index) => element !== arrPartR[index]
    );
    console.log(letter);
    arrPart[letter] === arrPartR[letter - 1] || letter === 0
      ? arrPart.splice(letter, 1)
      : arrPart.splice(arrPart.length - letter - 1, 1);
    arrPartR = [...arrPart].reverse();
    console.log(arrPart, arrPartR);
  }
  return arrPart.every((element, index) => element === arrPartR[index])
    ? true
    : false;
}

console.log(checkPart3("baa"));

function checkPart2(part) {
  const isOk = [...part.split("")].some((_, index, arr) => {
    const copy = [...arr];
    copy.splice(index, 1);
    const word = copy.join("");
    const wordR = copy.reverse().join("");
    const res = wordR === word;
    console.log(res);
    return res;
  });
  return isOk;
}

console.log(checkPart2("12321"));

function checkPart(part) {
  return [...part.slice(0, part.length / 2)].every(
    (_, index) =>
      part[index] === part[part.length - 1 - index] ||
      part[index] === part[part.length - 2 - index] ||
      part[index + 1] === part[part.length - 1 - index]
  );
}

console.log(checkPart("12321"));
