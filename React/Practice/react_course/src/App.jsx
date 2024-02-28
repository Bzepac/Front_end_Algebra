import { CORE_CONCEPTS } from "./data";
import Header from "./components/header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
function App() {
  const [tabContent, setTabContent] = useState("Plese click a button");
  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
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
            <TabButton
              onSelect={() =>
                handleSelect(
                  "The core UI building block - compose the user interface by combining multiple components."
                )
              }
            >
              Components
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() =>
                handleSelect(
                  "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
                )
              }
            >
              JSX
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() =>
                handleSelect(
                  "Make components configurable (and therefore reusable) by passing input data to them."
                )
              }
            >
              Props
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() =>
                handleSelect(
                  "React-managed data which, when changed, causes the component to re-render & the UI to update."
                )
              }
            >
              State
            </TabButton>
          </li>
        </menu>

        <div>{tabContent}</div>
        <div></div>
      </section>
    </div>
  );
}

export default App;
