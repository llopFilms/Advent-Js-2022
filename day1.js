/* Instructions

This year the elves have bought a gift wrapping machine. But... it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array with the gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol and to wrap a gift the * symbol is placed so that it completely surrounds the string on all sides. For example:

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
/* [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
]

As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

Good luck! */

const gifts = ["book", "game", "socks"];

const wrapping = (gifts) =>
  gifts.map(
    (gift) =>
      `${"*".repeat(gift.length + 2)}\n*${gift}*\n${"*".repeat(
        gift.length + 2
      )}`
  );

const wrapped = wrapping(gifts);
console.log(wrapped);

function wrapping2(gifts) {
  return gifts.map((gift) => {
    const wrap = (new Array(gift.length + 1).fill("*")).join("");
    const n = "*\n*";
    const string = wrap + n + gift + n + wrap;
    return string;
  });
}
console.log(wrapping2(gifts));

function wrapping3(gifts) {
  return gifts.map(
    (gift) =>
      `${"*".repeat(gift.length + 2)}\n*${gift}*\n${"*".repeat(
        gift.length + 2
      )}`
  );
}
console.log(wrapping3(gifts));

function wrapping4(gifts) {
  let giftsWrapped = [];
  let wrapper = "";
  let gift = "";
  for (let i = 0; i < gifts.length; i++) {
    for (let j = 0; j < gifts[i].length + 1; j++) {
      wrapper += "*";
    }
    gift += wrapper;
    gift += "*\n*";
    gift += gifts[i];
    gift += "*\n*";
    gift += wrapper;
    giftsWrapped.push(gift);
    wrapper = "";
    gift = "";
  }
  return giftsWrapped
}
console.log(wrapping4(gifts));

