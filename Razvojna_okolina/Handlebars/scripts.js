var cast = {
  characters: [
    {
      name: "Jon Snow",
      actor: "Kit Harington",
      house: "Stark",
    },
    {
      name: "Son Snow",
      actor: "Kit Harington",
      house: "Stark",
    },
    {
      name: "Arya Stark",
      actor: "Maisie Williams",
      house: "Stark",
    },
    {
      name: "Tyrion Lannister",
      actor: "Peter Dinklage",
      house: "Lannister",
    },
    {
      name: "Daenerys Targaryen",
      actor: "Emilia Clarke",
      house: "Targaryen",
    },
  ],
};
document.addEventListener("DOMContentLoaded", function () {
  const source = document.getElementById("character-list-container").innerHTML;
  const template = Handlebars.compile(source);

  const context = { characters: cast.characters };
  const html = template(context);

  document.getElementById("app").innerHTML = html;
});
