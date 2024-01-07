const div = document.querySelector("#myDIV");
div.style.fontSize = "x-large";
div.style.backgroundColor = "#51e2f5";

document.querySelector("#b").addEventListener("click", function () {
  let zadano = document.getElementById("userNumber").value;

  var zbroj = 1;
  var zbroj2 = 0;
  const niz = [];
  const p1 = document.createElement("p");
  p1.style.fontSize = "x-large";
  for (let i = 0; i < zadano; i++) {
    zbroj = zbroj + zbroj2;
    niz[i] = zbroj;
    if (i < zadano - 1) {
      p1.textContent = p1.textContent + niz[i] + ", ";
    } else {
      p1.textContent = p1.textContent + niz[i];
    }

    i++;
    zbroj2 = zbroj + zbroj2;
    if (zadano == i) return;
    niz[i + 1] = zbroj2;
    if (i < zadano - 1) {
      p1.textContent = p1.textContent + niz[i + 1] + ", ";
    } else {
      p1.textContent = p1.textContent + niz[i + 1];
    }
    div.appendChild(p1);
  }
  return;
});
