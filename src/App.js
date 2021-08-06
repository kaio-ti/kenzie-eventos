import "./App.css";
import HideAppBar from "./components/header";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <HideAppBar />
    </>
  );
}

export default App;
