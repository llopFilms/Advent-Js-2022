function getMaxGifts2(giftsCities, maxGifts, maxCities) {
  let result = 0;
  const g = giftsCities
    .sort((curr, prev) => {
      if (curr < prev) return 1;
      if (curr > prev) return -1;
      return 0;
    })
    .filter((element) => element < maxGifts);

  for (let i = 0; i < maxCities; i++) {
    if (g[i] == null) return result;
    result += g[i];
    if (result > maxGifts) return maxGifts;
  }
  return result;
}
console.log(getMaxGifts2([50, 10, 40, 1000, 500, 200], 199, 4));

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const g = giftsCities
    .sort((curr, prev) => {
      if (curr < prev) return 1;
      if (curr > prev) return -1;
      return 0;
    })
    .filter((element) => element < maxGifts);

  g.length = maxCities;
  const result = g.reduce((a, b) => a + b, 0);
  if (result > maxGifts) return maxGifts;

  return result;
}
console.log(getMaxGifts([50, 70], 100, 1));
