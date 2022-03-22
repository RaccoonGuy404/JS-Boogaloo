let arrSonnenstunden = [
  [50606, 1200],
  [51491, 1100],
  [60606, 1100],
  [61456, 1150],
];

function holeSonnenstunden(plz, arrSonnen) {
  let stunden = 0;

  for (let i = 0; i < arrSonnen.length / 2; ++i) {
    let p = arrSonnen[(i, 0)];
    let s = arrSonnen[(i, 1)];

    if (plz === p) {
      stunden += s;
      break;
    }
    if (plz <= p) {
      stunden += s;
    }
    // let arrTemp = [];

    // for (let j = 0; j < arrSonnen.length; j++) {
    //   let tempNum = arrSonnen[(j, 0)] - plz;
    //   if (tempNum < 0) {
    //     arrTemp.push(arrSonnen[(j, 0)]);
    //   }
    // }
    // console.log(arrTemp);
  }

  return stunden;
}
console.log(holeSonnenstunden(51000, ...arrSonnenstunden));
