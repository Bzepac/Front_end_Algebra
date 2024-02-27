import { CORE_CONCEPTS } from "./data";
import Header from "./components/header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import React, { useState } from "react";
function App() {
  function onSelect({ children }) {
    <h3>{children}</h3>;
  }
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

      <section id="examples">
        <menu>
          <li>
            <TabButton onSelect={onSelect}>Components</TabButton>
          </li>
          <li>
            <TabButton onSelect={onSelect}>Jsx</TabButton>
          </li>
          <li>
            <TabButton onSelect={onSelect}>Props</TabButton>
          </li>
          <li>
            <TabButton onSelect={onSelect}>State</TabButton>
          </li>
        </menu>
        <section id="tab-content">
          <div>
            <h3>
              The core UI building block - compose the user interface by
              combining multiple components.
            </h3>
          </div>
          <div>
            <h3>
              Return (potentially dynamic) HTML(ish) code to define the actual
              markup that will be rendered.
            </h3>
          </div>
          <div>
            <h3>
              Make components configurable (and therefore reusable) by passing
              input data to them.
            </h3>
          </div>
          <div>
            <h3>
              React-managed data which, when changed, causes the component to
              re-render & the UI to update.
            </h3>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
