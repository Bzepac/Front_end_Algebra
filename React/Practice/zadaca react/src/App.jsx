import reactImg from "./assets/react-core-concepts.png";

function conditionalRendering(props) {
  if (props === 0) {
    return "Prvi tekst";
  } else if (props === 1) {
    return "Drugi tekst";
  } else {
    return "";
  }
}

function Header() {
  const broj = Math.floor(Math.random() * 2);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>{conditionalRendering(broj)}</h1>
      <p>
        These are the React concepts you will need for almost any app you are
        going to build!
      </p>
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
