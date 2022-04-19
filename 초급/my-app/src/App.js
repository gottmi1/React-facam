import "./App.css";
import Composition from "./components/2-4 Props/Composition";
import Extraction from "./components/2-4 Props/Extraction/Extraction";
import ClassComponent from "./components/2-5 State/ClassComponent";
import FunctionalComponent from "./components/2-5 State/FunctionalComponent";
import ClassComponent2 from "./components/2-6 LifeCycle/ClassComponent2";
import Event from "./components/2-7 Event/Event";
import Conditional from "./components/2-8 Conditional Rendering/Conditional";
import List from "./components/2-9 List/List";

function App() {
  return (
    <div>
      <List />
      {/* <Conditional /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction /> */}
    </div>
  );
}

export default App;
