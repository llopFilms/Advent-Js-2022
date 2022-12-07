/* adventjs
Challenge #6: Creating xmas decorations
Medium
Completed by 81 users
Discord
Twitch
1
2
3
SPONSOR
Online profesional course for Web Developers

Learn from scratch to be a professional web developer. Platzi has the best courses for you to become a professional in the shortest time possible. Special xmas discount inside!

A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve it.

To create the cubes, a number with the desired size is passed to the program and it returns a string with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:

const cube = createCube(3)

// output:
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/

As you can see, the cube has three faces visually. The symbols used to build the cube faces are: /, \, _. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character \n.

Other examples of cubes:

const cubeOfOne = createCube(1)

// output:
/\_\
\/_/

const cubeOfTwo = createCube(2)

// output:
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/

Take into account:

    Pay attention to the spaces in the cube.
    The cube has to be symmetrical.
    Make sure you use the correct symbols.
    Each line must be separated by a new line character \n except for the last one.
 */

function createCube2(size) {
  let cube = "";

  for (let i = 0; i < size; i++) {
    cube +=
      " ".repeat(size - 1 - i) +
      "/\\".repeat(i + 1) +
      "_\\".repeat(size) +
      "\n";
  }

  for (let i = size; i > 0; i--) {
    cube += " ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size) + "\n";
  }

  const result = cube.substring(0, cube.length - 2);
  console.log(result);
  return result;
}

createCube2(3);

function createCube(size) {
  let head = "";
  let tail = "";
  let i;

  for (i = 1; i <= size; i++) {
    head += " ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n";
    tail += " ".repeat(i - 1) + "\\/".repeat(size - i + 1) + "_/".repeat(size) + "\n";
  }
  const cube = head + tail;
  return cube.slice(0, cube.length - 1);
}

console.log(createCube(3));
