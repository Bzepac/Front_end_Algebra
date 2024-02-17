import { ime, prezime, godine } from "./modules.jsx";
import message from "./message.jsx";
function Header() {
  const broj = Math.floor(Math.random() * 2);
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>{ime()}</h1>
      <p>{prezime}</p>
      <p>{message()}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main></main>
    </div>
  );
}

export default App;
