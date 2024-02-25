import { CORE_CONCEPTS } from "./data";
import Header from "./components/header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
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
          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}
          ></CoreConcept>
        </ul>
      </main>
    </div>
  );
}

export default App;
