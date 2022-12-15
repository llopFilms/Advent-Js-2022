/* Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:

const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2


const heights = [1, 7, 3, 5]
checkJump(heights) // false


It's `false`.
It goes up-down-up.

  7   5 
 ↗ ↘ ↗
1   3

We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.
Things to keep in mind

    The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
    It is not necessary for the starting and ending points to be the same (cities can be at different heights).
 */

function checkJump2(heights) {
  const check = heights.map((height, i) => {
    console.log(i, height, heights);
    let parabola = false;
    let round = false;
    console.log(height, i, parabola, round);
    if (i == 0) {
      parabola = true;
      console.log(height, parabola);
    } else if (height >= heights[i - 1] && round == false) {
      console.log(height > heights[i - 1], height);
      parabola = true;
    } else if (height < heights[i - 1] && height >= heights[i - 2]) {
      console.log(height < heights[i - 1] && height >= heights[i - 2], height);
      parabola = true;
      round = true;
    } else if (height <= heights[i - 1] && round == true) {
      console.log(height < heights[i - 1], height);
      parabola = true;
    } else if (height > heights[i - 1] && round == true) {
      console.log(height < heights[i - 1], height);
      parabola = false;
    } else {
      parabola = false;
      console.log(parabola, height);
    }
    return parabola;
  });
  return check;
}

const heights = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1];
console.log(checkJump2(heights)); // true

function checkJump(heights) {
  const peak = heights.indexOf(Math.max(...heights));
  console.log(peak);
  const up = heights.slice(0, peak + 1);
  const down = heights.slice(peak);
  console.log(up, down);
  if (
    (up[1] < up[0] && up.length > 1) ||
    (down[1] > down[0] && down.length > 1)
  )
    return false;
  console.log(up, down);

  const upcheck = up.every((e, i) => i == 0 || e >= up[i - 1]);
  const downcheck = down.every((e, i) =>i == 0 || e <= down[i - 1]);
  console.log(upcheck, downcheck);

  return upcheck && downcheck;
}

console.log(checkJump(heights)); // true
