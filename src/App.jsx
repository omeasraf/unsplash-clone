import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
