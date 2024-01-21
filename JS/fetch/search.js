let i = 0;
let trazilica = document.querySelector("#search");

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
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Nev valja");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    data.forEach((data) => {
      let text = document.createElement("p");

      const firstUsername = data.name;

      text.textContent = firstUsername;
      console.log(data);
      document.querySelector("body").appendChild(text);
    });
  })

  .catch((error) => console.error(error));
