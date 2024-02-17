import reactImg from "../src/assets/react-core-concepts.png";
import otherImg from "../src/assets/jsx-ui.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function randomImg() {
  if (Math.random(1) > 0.5) {
    return otherImg;
  } else {
    return reactImg;
  }
}
function Header() {
  return (
    <header>
      <img src={randomImg()} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
