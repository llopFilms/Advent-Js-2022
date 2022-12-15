/* You are given a pack of Christmas gifts that Santa Claus wants to deliver to the children. Each gift is represented by a string. Santa Claus has a sleigh that can carry a limited weight, and each gift inside the pack has a weight that is equal to the number of letters in the gift's name.

Santa Claus also has a list of reindeer that can help him deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a pack of gifts and a list of reindeer and returns the maximum number of gifts that Santa Claus can deliver. Packs of gifts can't be splitted.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

pack weights 4 + 4 + 4 = 12
reindeers can carry (2 * 6) + (2 * 6) = 24
distributedGifts(packOfGifts, reindeers) // 2

Things to keep in mind:

    The pack of gifts can't be splitted.
    Gifts and reindeers names length will always be greater than 0.
 */

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

const distributeGifts3 = (packOfGifts, reindeers) =>
  parseInt(
    reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0) /
      packOfGifts.reduce((acc, gift) => acc + gift.length, 0)
  );

console.log(distributeGifts3(packOfGifts, reindeers));

const distributeGifts2 = (packOfGifts, reindeers) => {
  return Math.floor(reindeers.join("").length*2/packOfGifts.join("").length)
}

console.log(distributeGifts2(packOfGifts, reindeers));
