/* We're preparing the Christmas gift bags but each bag has a weight limit.

We are given an array with the names of the gifts and a number that is the maximum weight that each bag can carry. The weight of each gift is the length of its name.

Write a function that groups the gifts in bags and returns an array with the names of the gifts of each bag. To group the gifts, the names are separated by spaces (the space does not count as weight).

But keep in mind that if the weight of the gifts of a bag exceeds the maximum weight, the last gift of the bag must be separated and placed in the next bag.

carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// in each bag you can carry 10kg
// the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
// the second bag carries 'book' and ' toy' which weigh 4kg and 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// in each bag you can carry 7kg
// the first bag can only carry 'game' which weighs 4kg
// the second bag can only carry 'bike' which weighs 4kg

carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// in each bag you can carry 4kg
// each bag can only carry one gift

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// in each bag you can carry 6kg
// each bag can only carry one gift
// note that you can not carry 'toy toy' in a bag
// because it is not next to each other

Note:

    The gifts are always grouped in the order of appearance in the array.
    You can not change the order of the gifts in the array when grouping them.
    All the gifts can be grouped in a single bag.
    If you can not group any gift in a bag, an empty array is returned.
 */

function carryGifts2(gifts, maxWeight) {
  if (!gifts.every((gift) => maxWeight >= gift.length)) {
    return [];
  }
  let carry = [""];
  gifts.forEach((gift) => {
    const previousWeight = carry.at(-1).replace(/ /g, "").length;
    console.log(previousWeight);
    if (previousWeight + gift.length <= maxWeight) {
      carry[carry.length - 1] += " " + gift;
      console.log(carry.at(-1));
      carry[carry.length - 1] = carry[carry.length - 1].trim();
      console.log(carry[carry.length - 1]);
      return;
    }
    carry.push(gift);
    console.log(carry);
  });
  console.log(carry);
  return carry;
}

console.log(carryGifts2(["game", "bike", "book", "toy"], 10));

function carryGifts(gifts, maxWeight) {
  let carry = [];
  let i = 0;
  let bag = "";
  let bagCut = "";
  while (i < gifts.length) {
    console.log(i);
    if (gifts[i + 1]) {
      while (bag.trim().length + gifts[i + 1].length <= maxWeight) {
        bag += gifts[i] + " ";
        i++;
        bagCut = bag.slice(0, -1);
        console.log(i, bagCut);
      }
      carry.push(bagCut);
      bag = "";
    } else {
      carry.push(gifts[i]);
      i++;
    }
      
    ;
  }

  return carry;
}

console.log(carryGifts(["game", "bike", "book", "toy"], 10));
