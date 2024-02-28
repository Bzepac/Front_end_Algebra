import { CORE_CONCEPTS } from "./data";
import Header from "./components/header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
function App() {
  function handleSelect() {
    console.log(children);
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
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
          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}
          ></CoreConcept>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <li>
            <TabButton onSelect={handleSelect}>Components</TabButton>
          </li>
          <li>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
          </li>
          <li>
            <TabButton onSelect={handleSelect}>Props</TabButton>
          </li>
          <li>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </li>
        </menu>
        <div></div>
      </section>
    </div>
  );
}

export default App;
