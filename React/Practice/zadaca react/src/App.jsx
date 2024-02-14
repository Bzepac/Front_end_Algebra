import { ime, prezime, godine } from "./modules.jsx";

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>{ime()}</h1>
      <p>{prezime}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>
          <br />

          {godine}
        </h2>
      </main>
    </div>
  );
}

export default App;
