let i = 0;
let zbroj = 1;
let zbroj2 = 1;
const niz = [];

function fibo(n) {
  niz[i + 1] = zbroj2;
  niz[i] = zbroj;
  zbroj = zbroj + zbroj2;
  zbroj2 = zbroj + zbroj2;

  i = i + 2;
  if (n % 2 == 1) niz.splice(n);
  if (i < n) return fibo(n);
  else console.log(niz);
}

fibo(14);
