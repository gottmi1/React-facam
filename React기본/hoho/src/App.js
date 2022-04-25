import "./App.css";
import Aas from "./components/Aas";
import WithHasMounted from "./Hocs/WithHasMounted";
import useHasMounted from "./Hooks/useHasMounted";
import useWindowWidth from "./Hooks/useWindowWidth";

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);

  return (
    <div className="App">
      <Aas />
      <p>{width}</p>
    </div>
  );
}

export default WithHasMounted(App);
