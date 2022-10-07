import Home from "./pages/home";
import Episode from "./pages/episode";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Episode />} path="/episode/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
