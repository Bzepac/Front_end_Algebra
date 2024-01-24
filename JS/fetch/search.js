let trazilica = document.querySelector("#search");
let loading = document.querySelector(".labelo");

let resultsContainer = document.createElement("div");
document.querySelector("body").appendChild(resultsContainer);

trazilica.addEventListener("input", function () {
  const textinput = trazilica.value.toLowerCase();
  console.log(textinput);
  loading.textContent = "Loading...";
      
  resultsContainer.innerHTML = "";

  fetch(`https://itunes.apple.com/search?term=${textinput}&entity=song`)
    .then((response) => {
      
      if (!response.ok) {
        throw new Error("Nev valja");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      let reverseResults = data.results.reverse();
      reverseResults.forEach((result) => {
        
        console.log(result);
        let text = document.createElement("p");

        const artistName = result.artistName;
        const song = result.trackName;

        text.textContent = artistName + " - " + song;
        resultsContainer.appendChild(text);
        loading.textContent = "";
      });
    })
    .catch((error) => {
      
      loading.textContent = "No results";
      
      console.error(error)});
    
});
