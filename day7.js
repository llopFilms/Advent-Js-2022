/* In the Santa Claus stores they are doing inventory. There are three stores (which is represented as an Array each). In each store there are gifts.

We have been asked to write a program that tells us what gifts we have to buy to replenish our stores now that Christmas is approaching. A gift must be replenished when there is only stock in one of the three stores.

For example, if we have the following stores:

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.


const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']

As you can see, the stores can have the same gift repeated several times. But, no matter how many existences there are in a store, if we do not have it in the other two, we must replenish it to have better distribution.
📝 To sum up

    Create a function getGiftsToRefill that receives three Array as parameters.
    The function must return an Array with the gifts to be replenished.
    A gift must be replenished when there is only stock in one of the three stores.
    If there is no gift to replenish, the function must return an empty Array.
    If there is more than one gift to replenish, the function must return an Array with all the gifts that need to be replenished.
 */
const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

function getGiftsToRefill2(a1, a2, a3) {
  let refill = [];
  let i;
  for (let i = 0; i < a1.length; i++) {
    if (!a2.includes(a1[i]) && !a3.includes(a1[i])) refill.push(a1[i]);
  }
  for (i = 0; i < a2.length; i++) {
    if (!a1.includes(a2[i]) && !a3.includes(a2[i])) refill.push(a2[i]);
  }
  for (i = 0; i < a3.length; i++) {
    if (!a1.includes(a3[i]) && !a2.includes(a3[i])) refill.push(a3[i]);
  }
  console.log(refill);
  return Array.from(new Set(refill));
}

//console.log(getGiftsToRefill(a1, a2, a3))
console.log(getGiftsToRefill2(["a", "a"], ["b", "b"], ["c", "c"]));

function getGiftsToRefill3(a1, a2, a3) {
  let refill = a1.filter((gift) => !a2.includes(gift) && !a3.includes(gift));
  let refill2 = a2.filter((gift) => !a1.includes(gift) && !a3.includes(gift));
  let refill3 = a3.filter((gift) => !a1.includes(gift) && !a2.includes(gift));
  console.log(refill, refill2, refill3);

  let result = Array.from(new Set([...refill, ...refill2, ...refill3]));
  console.log(result);

  return result;
}
console.log(getGiftsToRefill3(a1, a2, a3));
//console.log(getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"]));

function getGiftsToRefill4(a1, a2, a3) {
  const set1 = new Set(a1);
  const set2 = new Set(a2);
  const set3 = new Set(a3);
  const set = [...new Set([...set1, ...set2, ...set3])];
  console.log(set);
  const result = set.filter(
    (gift) => set1.has(gift) + set2.has(gift) + set3.has(gift) === 1
  );

  return result;
}
console.log(getGiftsToRefill4(a1, a2, a3));

function getGiftsToRefill(a1, a2, a3) {
  return Array.from(new Set([...a1, ...a2, ...a3])).filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  );
}
console.log(getGiftsToRefill(a1, a2, a3));
