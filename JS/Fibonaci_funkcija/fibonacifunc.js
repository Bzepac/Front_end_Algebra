let i = 0;
let zbroj = 1;
let zbroj2 = 1;
const niz = [];

function counter(n) {
  niz[i + 1] = zbroj2;
  niz[i] = zbroj;
  zbroj = zbroj + zbroj2;
  zbroj2 = zbroj + zbroj2;

  i = i + 2;
  if (i < n) return counter(n);
  else console.log(niz);
}

counter(11);
