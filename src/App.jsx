import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Payment from "./Payment";
import Tests from "./Tests";
import UseState from "./UseState";
import LearnUseEffect from "./UseEffect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<LearnUseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
