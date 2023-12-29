import { HashRouter, Routes, Route } from "react-router-dom";
import TradePage from "./pages/TradePage";

const App = (): JSX.Element => {
  return (
    <HashRouter hashType="noslash">
      <Routes>
        <Route path="/" element={<TradePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
