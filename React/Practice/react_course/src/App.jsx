import reactImg from "../src/assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main id="core-concepts">
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            img={CORE_CONCEPTS[0].image}
          ></CoreConcept>
          <CoreConcept
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            img={CORE_CONCEPTS[1].image}
          ></CoreConcept>
          <CoreConcept
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            img={CORE_CONCEPTS[2].image}
          ></CoreConcept>
        </ul>
      </main>
    </div>
  );
}

export default App;
