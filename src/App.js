import { Routes,Route  } from "react-router-dom";
import { DetailsOfMentor } from "./components/DetailsMentor";
import { Home } from "./components/Home";
import { Topic } from "./components/Topic";
import {About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/posts/:id" element={<DetailsOfMentor />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
