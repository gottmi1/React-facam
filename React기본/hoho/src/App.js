import "./App.css";
import A from "./componentComunication/A";
// import Aas from "./components/Aas";
// import WithHasMounted from "./Hocs/WithHasMounted";
// import useHasMounted from "./Hooks/useHasMounted";
// import useWindowWidth from "./Hooks/useWindowWidth";
// import Reducer from "./components/Reducer";
// import Memo from "./components/Memo";
// import Ref from "./components/Ref";

export default function App() {
  // const width = useWindowWidth();
  // const hasMountedFromHooks = useHasMounted();

  // console.log(hasMounted, hasMountedFromHooks);

  return (
    <div className="App">
      {/* <Ref />
      <br />
      <Aas />
      <p>{width}</p>
      <br />
      <Reducer />
      <br />
      <Memo /> */}
      <A />
    </div>
  );
}

// export default WithHasMounted(App);
