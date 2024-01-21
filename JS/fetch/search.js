let i = 0;
let trazilica = document.querySelector("#search");
let loading = document.createElement("p");

document.querySelector("body").appendChild(loading);
const allp = document.querySelectorAll("p");
allp.forEach((p) => {
  p.className = "hide";
});

trazilica.addEventListener("input", function () {
  const textinput = trazilica.value.toLowerCase();
  console.log(textinput);
  const p = document.querySelectorAll("p");

  p.forEach((p) => {
    const username = p.textContent.toLowerCase();
    if (username.includes(textinput)) {
      p.className = "show";
    } else {
      p.className = "hide";
    }
  });
});

fetch("https://randomuser.me/api/?results=2000")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Nev valja");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    document.querySelector(".labelo").textContent = "Type to search";

    data.results.forEach((artist) => {
      console.log(data.results);
      let text = document.createElement("p");
      text.className = "hide";

      const firstUsername = artist.name.first;
      const lastUsername = artist.name.last;
      const gender = artist.gender;
      text.textContent = firstUsername + " " + lastUsername + " " + gender;
      console.log(artist.name.first);
      document.querySelector("body").appendChild(text);
    });
  })

  .catch((error) => console.error(error));
