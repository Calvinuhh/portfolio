import { Route, BrowserRouter, Routes } from "react-router-dom";
import EnglishPage from "./views/EnglishPage";
import SpanishPage from "./views/SpanishPage";

import "./main.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnglishPage />}></Route>
          <Route path="/es" element={<SpanishPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
