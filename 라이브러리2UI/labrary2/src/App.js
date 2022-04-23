import "./App.css";
import Button from "./components/TailWind/Button";
import Message from "./components/TailWind/Message";
import Position from "./components/TailWind/Position";
// import Example from "./components/TailWind/Example";
// import AntDesign from "./components/AntDesign/AntDesign";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapExample from "./components/ReactBootstrap/BootstrapExample";
// import MaterialExample from "./components/Material/MaterialExample";

function App() {
  return (
    <div className="App">
      <Position />
      <Message />
      {/* <BootstrapExample /> */}
      {/* <MaterialExample /> */}
      {/* <Example /> */}
      <Button />
    </div>
  );
}

export default App;
