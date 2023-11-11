// Components
import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

// Data JS
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [clickedTopic, setClickedTopic] = useState();

  function handleClick(clickedButton) {
    setClickedTopic(clickedButton.toLowerCase());
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((item) => (
              <TabButton
                key={item.title}
                onClick={() => handleClick(item.title)}
              >
                {item.title}
              </TabButton>
            ))}
            {/* <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton> */}
          </menu>
          {!clickedTopic ? (
            <p>Please click a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[clickedTopic].title}</h3>
              <p>{EXAMPLES[clickedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[clickedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
