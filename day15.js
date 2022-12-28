/* A couple is putting up the Christmas tree. The boy loves Christmas decorations and wants it to be perfectly balanced. He has three types of decorations:

    Colored balls: B
    Small gifts: R
    Pine cones: P

The Christmas tree is a triangle that must be generated. They already have the base mounted, which would be the first row, and from there they have to place the decorations upwards following a formula.

Place on top :    P     R     B     P
If below is  :   P P   B P   R P   B R

The combinations are also reversed. For example, if below is B P, above is R. But it will also be R if below is P B. Also if below you have repeated the letter, above you use the same letter. For example: if below is B B, above is B.

With these rules, we could see the tree that we would generate with the base B P R P:

   R
  P B
 R B B
B P R P

Write a program that receives the string B P R P and returns an array with the representation of the tree.

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']

Keep in mind that:

    The program always receives the text string that represents the base of the tree.
    The tree must be generated completely, that is, the base and the rows that are generated from it, until the top.
    You have to follow the formula to know which decoration to place in each position.

 */

function decorateTree2(base) {
  const select = (deco1, deco2) => {
    if (deco1 === deco2) return deco1;
    else if (
      (deco1 === "B" && deco2 === "P") ||
      (deco2 === "B" && deco1 === "P")
    )
      return "R";
    else if (
      (deco1 === "P" && deco2 === "R") ||
      (deco2 === "P" && deco1 === "R")
    )
      return "B";
    else return "P";
  };

  let tree = [base];
  const count = base.split(" ");
  console.log(count);
  let i = 0;

  let baseArr = base.split(" ");
  while (i < count.length - 1) {
    console.log(baseArr);
    const next = baseArr
      .map((deco, i, arr) => {
        if (i === arr.length - 1) return;
        console.log(deco, baseArr[i + 1]);
        const map = select(deco, baseArr[i + 1]);
        console.log(map);
        return map;
      })
      .slice(0, -1);
    baseArr = next;
    console.log(next, baseArr);
    console.log(next.join(" "));
    tree.push(next.join(" "));
    console.log(tree);
    i++;
  }

  console.log(tree);
  return tree.reverse();
}

console.log(decorateTree2("B P R P"));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

function decorateTree3(base) {
  const pairs = new Map([
    ["BB", "B"],
    ["RR", "R"],
    ["PP", "P"],
    ["PR", "B"],
    ["RP", "B"],
    ["RB", "P"],
    ["BR", "P"],
    ["PB", "R"],
    ["BP", "R"],
  ]);
  console.log(pairs);

  let tree = [base];
  const count = base.split(" ");
  console.log(count);
  let i = 0;

  let baseArr = count;
  while (i < count.length - 1) {
    console.log(baseArr);
    const next = baseArr
      .map((deco, i) => pairs.get(deco + baseArr[i + 1]))
      .slice(0, -1);
    baseArr = next;
    console.log(next, baseArr);
    console.log(next.join(" "));
    tree.unshift(next.join(" "));
    console.log(tree);
    i++;
  }

  console.log(tree);
  return tree;
}

console.log(decorateTree3("B P R P"));

function decorateTree(base) {
  const obj = {
    BB: "B",
    RR: "R",
    PP: "P",
    PR: "B",
    RP: "B",
    RB: "P",
    BR: "P",
    PB: "R",
    BP: "R",
  };

  let see = base.split(" ").slice(0, -1);
  console.log(see);

  let result = base
    .split(" ")
    .slice(0, -1)
    .reduceRight(
      (tree) => {
        const top = tree[0].split(" ");
        return [
          top
            .slice(0, -1)
            .reduce((acc, x, i) => {
              return [...acc, obj[x + top[i + 1]]];
            }, [])
            .join(" "),
          ...tree,
        ];
      },
      [base]
    );
  return result;
}

console.log(decorateTree("B P R P"));
