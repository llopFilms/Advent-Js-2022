/* Santa Claus is a bit worried because the preparations are taking a long time. He has got a Scrum certification and has decided to use the Scrum methodology to organize the work of his elves.

The elfs tell him the expected duration of the tasks with a string with the format hh:mm:ss and in the same format how long they have been working on it.

But Santa Claus does not get quickly if there is too much or too little left to finish, so he has asked us to make a program that tells us what portion of the task has already been completed.

For example, if the task lasts 03:00:00 and they have been working for 01:00:00 then they have already completed 1/3 of the task. In code:

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '2/3'
getCompleted('03:30:30', '05:50:50') // '3/5

Note:

    The time format is hh:mm:ss.
    The output format is a string a/b where a is the portion of the task that has already been completed and b is the portion of the task that is left to complete.
    The portion is always shown with the smallest fraction possible. (for example, 2/4 will never be shown because it can be represented as 1/2).
    If the task has already been completed, the fraction would be 1/1.
    No elf has been mistreated during the execution of this challenge nor have they had to use Scrum for real.
 */

function getCompleted2(part, total) {
  const toMinutes = (string) => {
    let arrValues = string.split(":");
    console.log(arrValues);
    return arrValues[0] * 3600 + arrValues[1] * 60 + arrValues[2];
  };

  let sec = [toMinutes(part), toMinutes(total)];
  console.log(sec);
  if (sec[0] === sec[1]) return "1/1";

  const simple = (num, denom) => {
    if (num < denom) return simple(denom, num);
    else if (denom == 0) return num;
    else return simple(denom, num % denom);
  };

  return (
    sec[0] / simple(sec[0], sec[1]) + "/" + sec[1] / simple(sec[0], sec[1])
  );
}

console.log(getCompleted2("01:00:00", "03:00:00"));

function getCompleted(part, total) {
  /* let secPart =
    part
      .split(":")
      .slice(0, -1)
      .reduce((acc, v) => (acc + +v) * 60, 0) + +part.at(-1);
  
  let secTotal =
    total
      .split(":")
      .slice(0, -1)
      .reduce((acc, v) => (acc + +v) * 60, 0) + +total.at(-1);
  console.log(secPart, secTotal);

  if (secPart === secTotal) return "1/1";
  if (secTotal === 0) return secPart +"/1"; */

  const pSplit = part.split(":");
  const secPart = +pSplit[0] * 3600 + +pSplit[1] * 60 + +pSplit[2];

  const tSplit = total.split(":");
  const secTotal = +tSplit[0] * 3600 + +tSplit[1] * 60 + +tSplit[2];
  console.log(pSplit, tSplit);
  console.log(secPart, secTotal);

  let mcd = secPart;
  let tmp = secTotal;
  while (tmp) {
    const t = tmp;
    tmp = mcd % tmp;
    mcd = t;
  }

  return `${secPart / mcd}/${secTotal / mcd}`;
}

console.log(getCompleted("0:10:00", "01:00:0"));
/*  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
 const mcd = gcd(secTotal, secPart);  */
